import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            {/* Main Content Area */}
            <main className="flex-grow w-full max-w-md mx-auto bg-white shadow-sm min-h-[calc(100vh-40px)]">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
