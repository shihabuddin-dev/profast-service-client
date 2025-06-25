import { CardCvcElement, CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = e => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardCvcElement>
                    <button type="submit" disabled={!stripe}>
                        pay for parcel pickup
                    </button>
                </CardCvcElement>

            </form>
        </div>
    );
};

export default PaymentForm;