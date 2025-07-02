import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "../../components/ui/Button";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Spinner from "../../components/ui/Spinner";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useTrackingLogger from "../../hooks/useTrckingLogger";

const PaymentForm = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const stripe = useStripe();
    const elements = useElements(); 
    const [error, setError] = useState('')
    const { logTracking } = useTrackingLogger();
    const { parcelId } = useParams()
    const axiosSecure = useAxiosSecure()

    const { isPending, data: parcelInfo = {} } = useQuery({
        queryKey: ['parcel', parcelId],
        queryFn: async () => {
            const res = await axiosSecure(`/parcels/${parcelId}`)
            return res.data;
        }
    })

    if (isPending) {
        return <Spinner />
    }
    const amount = parcelInfo.cost;
    const amountInCents = amount * 100;

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

        if (!card) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
        }

        else {
            setError('')
            console.log('PaymentMethod', paymentMethod);

            // step-2: payment intent
            const res = await axiosSecure.post('/create-payment-intent', {
                amountInCents,
                parcelId
            })
            const clientSecret = res.data.clientSecret

            // step-3: confirm payment
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: user.displayName,
                        email: user.email
                    },
                },
            });
            if (result.error) {
                setError(result.error.message);
            }
            else {
                setError('')
                if (result.paymentIntent.status === 'succeeded') {
                    console.log('Payment Succeeded')
                    const transactionId = result.paymentIntent.id;
                    // setp-4: mark parcel paid also create payment histotry
                    const paymentData = {
                        parcelId,
                        email: user.email,
                        amount,
                        transactionId: transactionId,
                        paymentMethod: result.paymentIntent.payment_method_types
                    }
                    // posting data to db using axious secure
                    const paymentRes = await axiosSecure.post('/payments', paymentData)
                    if (paymentRes.data.insertedId) {
                        //  Show SweetAlert with transaction ID
                        await Swal.fire({
                            icon: 'success',
                            title: 'Payment Successful!',
                            html: `<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
                            confirmButtonText: 'Go to My Parcels',
                        });

                        await logTracking(
                            {
                                tracking_id: parcelInfo.tracking_id,
                                status: "payment_done",
                                details: `Paid by ${user.displayName}`,
                                updated_by: user.email,
                            })

                        //  Redirect to /myParcels
                        navigate('/dashboard/myParcels');


                    }

                }
            }
        }


    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto">
                <CardElement className="p-2 border rounded" />
                <Button
                    variant="secondary"
                    className="w-full"
                    type="submit"
                    disabled={!stripe}>
                    Pay ${amount}
                </Button>
                {error && <p className="text-red-500">{error}</p>}

            </form>
        </div>
    );
};

export default PaymentForm;