import React from 'react';
import Button from '../../components/ui/Button';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img
                src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                alt="404 Not Found"
                className="w-72 h-72 object-contain mb-6"
            />
            <h1 className="text-5xl font-bold text-[#CAEB66] mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
            <p className="text-gray-500 mb-6 text-center max-w-md">
                Sorry, the page you are looking for does not exist or has been moved.
            </p>
            <a href="/" ><Button variant='secondary'>Go Home</Button></a>
        </div>
    );
};

export default NotFound;