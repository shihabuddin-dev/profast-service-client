import { FaBan, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import Button from "../../components/ui/Button";

const Forbidden = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center bg-red-50 text-red-800 px-4 py-6">
            <FaBan className="text-6xl md:text-7xl mb-4 text-red-600 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold mb-2">403 - Forbidden</h1>
            <p className="text-lg md:text-xl text-center mb-6 max-w-md">
                Sorry, you don’t have permission to access this page.
            </p>
            <Button
            variant="danger"
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-2 py-3"
            >
                <FaArrowLeft />
                Back to Home
            </Button>
        </div>
    );
};

export default Forbidden;
