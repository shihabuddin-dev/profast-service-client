import { BsArrowUpRightCircle } from "react-icons/bs";
import Button from "../ui/Button";


const faqData = [
    {
        id: 1,
        question: "How do I create an account?",
        answer:
            'Click the "Sign Up" button in the top right corner and follow the registration process.',
    },
    {
        id: 2,
        question: "I forgot my password. What should I do?",
        answer:
            'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
    },
    {
        id: 3,
        question: "How do I update my profile information?",
        answer:
            'Go to "My Account" settings and select "Edit Profile" to make changes.',
    },
    {
        id: 4,
        question: "How can I track my orders?",
        answer:
            "Navigate to the ‘Orders’ section in your account and select an order to view tracking details.",
    },
    {
        id: 5,
        question: "Can I cancel or reschedule a delivery?",
        answer:
            "Yes, visit your orders and click on ‘Manage Delivery’ to reschedule or cancel if it's eligible.",
    },
];

const Faq = () => {
    return (
        <section className="bg-gray-100 px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#184042] mb-2">
                    Frequently Asked Question (FAQ)
                </h2>
                <p className="text-sm text-gray-500 mb-10">
                    Enhance posture, mobility, and well-being effortlessly with ProFast Courier.
                    Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>

                <div className="space-y-3 text-left">
                    {faqData.map((item, index) => (
                        <div
                            key={item.id}
                            className="collapse collapse-arrow rounded-md border border-base-300 bg-white [&:has(input:checked)]:border-[#3ab6a5] [&:has(input:checked)]:bg-[#e0f5f3]"
                        >
                            <input
                                type="radio"
                                name="faq-accordion"
                                defaultChecked={index === 0}
                            />
                            <div className="collapse-title text-base font-medium text-[#184042]">
                                {item.question}
                            </div>
                            <div className="collapse-content text-sm text-gray-600">
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>

                <Button variant="secondary" className="btn mt-10">
                    See More FAQ’s
                    <BsArrowUpRightCircle />
                </Button>
            </div>
        </section>
    );
};

export default Faq;