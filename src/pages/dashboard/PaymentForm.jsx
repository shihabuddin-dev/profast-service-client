import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "../../components/ui/Button";
import { useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Spinner from "../../components/ui/Spinner";

import useAuth from "../../hooks/useAuth";

const PaymentForm = () => {
    const { user } = useAuth()
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
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
    console.log(amountInCents);

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
        } else {
            setError('')
            console.log('[PaymentMethod]', paymentMethod);
        }
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
            if (result.paymentIntent.status === 'succeeded') {
                console.log('Payment Succeeded')
                console.log(result)
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