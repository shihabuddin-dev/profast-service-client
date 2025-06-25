import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router';

const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate= useNavigate()
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['my-parcels', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;
        }
    })


    const handleView = (id) => {
        console.log("View parcel", id);
        // You could open a modal or navigate to a detail page
    };

    const handlePay = (id) => {
        navigate(`/dashboard/payment/${id}`)
        console.log("Proceed to payment for", id);
        // Implement your payment logic
    };

    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "This parcel will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#e11d48", // red-600
            cancelButtonColor: "#6b7280",  // gray-500
        });
        if (confirm.isConfirmed) {
            try {

                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Parcel has been deleted.",
                                icon: "success",
                                timer: 1500,
                                showConfirmButton: false,
                            });
                        }
                        refetch();
                    })


            } catch (err) {
                Swal.fire("Error", err.message || "Failed to delete parcel", "error");
            }
        }
    };

    const formatDate = (iso) => {
        return new Date(iso).toLocaleString(); // Format: "6/22/2025, 3:11:31 AM"
    };

    return (
        <div className="overflow-x-auto shadow-md rounded-xl">
            <table className="table table-zebra w-full">
                <thead className="bg-base-200 text-base font-semibold">
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Created At</th>
                        <th>Cost</th>
                        <th>Payment</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {parcels.map((parcel, index) => (
                        <tr key={parcel._id}>
                            <td>{index + 1}</td>
                            <td className="max-w-[180px] truncate">{parcel.title}</td>
                            <td className="capitalize">{parcel.type}</td>
                            <td>{formatDate(parcel.creation_date)}</td>
                            <td>৳{parcel.cost}</td>
                            <td>
                                <span
                                    className={`badge ${parcel.payment_status === "paid"
                                        ? "badge-success"
                                        : "badge-error"
                                        }`}
                                >
                                    {parcel.payment_status}
                                </span>
                            </td>
                            <td className="space-x-2">
                                <button
                                    onClick={() => handleView(parcel._id)}
                                    className="btn btn-xs btn-outline"
                                >
                                    View
                                </button>
                                {parcel.payment_status === "unpaid" && (
                                    <button
                                        onClick={() => handlePay(parcel._id)}
                                        className="btn btn-xs btn-primary"
                                    >
                                        Pay
                                    </button>
                                )}
                                <button
                                    onClick={() => handleDelete(parcel._id)}
                                    className="btn btn-xs btn-error"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    {parcels.length === 0 && (
                        <tr>
                            <td colSpan="6" className="text-center text-gray-500 py-6">
                                No parcels found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MyParcels;