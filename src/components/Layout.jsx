import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            {/* Required Message */}
            <div className="bg-green-100 text-green-800 text-center py-2 text-sm font-medium border-b border-green-200">
                WebView page loaded successfully
            </div>

            {/* Main Content Area */}
            <main className="flex-grow w-full max-w-md mx-auto bg-white shadow-sm min-h-[calc(100vh-40px)]">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
