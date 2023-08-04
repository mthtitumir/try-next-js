import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React from 'react';

const withLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default withLayout;