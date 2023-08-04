import React from 'react';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='text-center text-red-500'>
                <h1 className='text-3xl'>404</h1>
                <h3 className='text-'>Not Found</h3>
            </div>
        </div>
    );
};

export default NotFound;