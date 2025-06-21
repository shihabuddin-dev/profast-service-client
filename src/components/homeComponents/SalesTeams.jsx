import React from 'react';

// Placeholder data for sales team members
const teamMembers = [
  {
    name: 'Jane Doe',
    title: 'Sales Director',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    name: 'John Smith',
    title: 'Senior Sales Manager',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
  },
  {
    name: 'Emily Jones',
    title: 'Sales Representative',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
  },
  {
    name: 'Michael Brown',
    title: 'Sales Representative',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026707d',
  },
];

const SalesTeams = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Meet Our Sales Team</h2>
                    <p className="text-lg text-gray-600 mt-4">The driving force behind our success.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-200"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                            <p className="text-gray-500">{member.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SalesTeams;