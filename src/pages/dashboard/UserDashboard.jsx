import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaBoxOpen, FaShippingFast, FaCheckCircle } from "react-icons/fa";

const COLORS = ['#60A5FA', '#FBBF24', '#34D399', '#F87171'];

const statusIcons = {
    pending: <FaBoxOpen className="text-4xl text-info" />,
    in_transit: <FaShippingFast className="text-4xl text-warning" />,
    delivered: <FaCheckCircle className="text-4xl text-success" />,
};

const statusLabels = {
    pending: "Pending",
    in_transit: "In Transit",
    delivered: "Delivered",
};

// Sample data, replace with API data as needed
const parcelStatus = [
    { status: "pending", count: 2 },
    { status: "in_transit", count: 3 },
    { status: "delivered", count: 5 },
];

const processedPieData = parcelStatus.map((item) => ({
    name: statusLabels[item.status] || item.status,
    value: item.count,
    status: item.status
}));

const UserDashboard = () => {
    return (
        <div className="p-6 min-h-[80vh] bg-gradient-to-br from-blue-50 to-green-50">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Your Parcel Overview</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {parcelStatus.map(({ count, status }) => (
                    <div
                        key={status}
                        className="card bg-white shadow-lg border border-blue-100 flex flex-col items-center justify-center p-6 hover:scale-105 transition-transform"
                    >
                        {statusIcons[status] || <FaBoxOpen className="text-4xl" />}
                        <h2 className="text-lg font-semibold mt-3 text-center text-gray-700">
                            {statusLabels[status] || status}
                        </h2>
                        <p className="text-4xl font-extrabold text-blue-600 mt-2">{count}</p>
                    </div>
                ))}
            </div>

            <div className="card bg-white shadow-md p-6 max-w-xl mx-auto">
                <h2 className="text-xl font-bold mb-4 text-center text-blue-700">Parcel Status Breakdown</h2>
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
                            {processedPieData.map((entry, idx) => (
                                <Cell
                                    key={`cell-${entry.status}`}
                                    fill={COLORS[idx % COLORS.length]}
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
};

export default UserDashboard;