import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
    FaMotorcycle,
    FaCheckCircle,
    FaShippingFast,
    FaBoxOpen,
} from "react-icons/fa";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import useAxiosSecure from "../../hooks/useAxiosSecure";

const COLORS = {
    not_collected: '#F87171',      // red-400
    in_transit: '#FBBF24',         // yellow-400
    rider_assigned: '#60A5FA',     // blue-400
    delivered: '#34D399',          // green-400
};

const statusIcons = {
    rider_assigned: <FaMotorcycle className="text-4xl text-info" />,
    delivered: <FaCheckCircle className="text-4xl text-success" />,
    in_transit: <FaShippingFast className="text-4xl text-warning" />,
    not_collected: <FaBoxOpen className="text-4xl text-error" />,
};

const statusLabels = {
    rider_assigned: "Assigned to Rider",
    delivered: "Delivered",
    in_transit: "In Transit",
    not_collected: "Not Collected",
};



const AdminDashboard=()=> {
    const axiosSecure = useAxiosSecure();
    const { data: deliveryStatus = [], isLoading, isError, error } = useQuery({
        queryKey: ["parcelStatusCount"],
        queryFn: async () => {
            const res = await axiosSecure.get("/parcels/delivery/status-count");
            return res.data;
        },
        staleTime: 5 * 60 * 1000, // 5 minutes
        retry: 1,
    });

    const processedPieData = deliveryStatus.map((item) => ({
        name: statusLabels[item.status] || item.status,
        value: item.count,
        status: item.status
    }))

    if (isLoading)
        return (
            <div className="flex justify-center items-center min-h-[70vh]">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );

    if (isError)
        return (
            <div className="text-center text-red-600 mt-10">
                Error loading data: {error.message}
            </div>
        );

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Parcel Delivery Summary</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {deliveryStatus.map(({ count, status }) => (
                    <div
                        key={status}
                        className="card bg-base-100 shadow-md border border-base-200 flex flex-col items-center justify-center p-6"
                    >
                        {statusIcons[status] || <FaBoxOpen className="text-4xl" />}
                        <h2 className="text-lg font-semibold mt-3 text-center">
                            {statusLabels[status] || status}
                        </h2>
                        <p className="text-4xl font-extrabold text-primary mt-2">{count}</p>
                    </div>
                ))}
            </div>

            {/* pie chart */}
            <div className="card bg-base-100 shadow-md p-4">
                <h2 className="text-xl font-bold mb-4">Delivery Status Breakdown</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={processedPieData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                        >
                            {processedPieData.map((entry) => (
                                <Cell
                                    key={`cell-${entry.status}`}
                                    fill={COLORS[entry.status] || '#A78BFA'}
                                />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
export default AdminDashboard