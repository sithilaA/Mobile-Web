import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PaymentDetails = () => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // State to trigger re-fetch
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                setLoading(true); // Reset loading state on retry
                setError(null);   // Reset error state on retry

                // 1. Get Token from window.APP_AUTH_TOKEN
                const token = window.APP_AUTH_TOKEN;

                console.log("Checking for token in window.APP_AUTH_TOKEN:", token);

                if (!token) {
                    throw new Error("Unauthorized access: Token missing");
                }

                // 2. Call API
                const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com'; // Fallback for dev
                const response = await axios.get(`${apiBaseUrl}/users/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setProfile(response.data);
            } catch (err) {
                console.error("Error fetching profile:", err);
                setError(err.message || "Failed to load payment details");
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [retryCount]); // Depend on retryCount

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6 text-center">
                <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-4">
                    {error}
                </div>
                <button
                    onClick={() => setRetryCount(c => c + 1)}
                    className="px-4 py-2 bg-gray-200 rounded text-gray-700 text-sm hover:bg-gray-300 transition-colors"
                >
                    Check Token Again
                </button>
                <p className="mt-4 text-xs text-gray-400">
                    Dev Hint: Set window.APP_AUTH_TOKEN in console and click above.
                </p>
            </div>
        );
    }

    return (
        <div className="p-4 sm:p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Payment Details</h1>

            {profile && (
                <div className="bg-white border rounded-lg shadow-sm p-4 space-y-6">
                    {/* User Friendly Summary */}
                    <div className="space-y-3">
                        <div className="flex justify-between border-b pb-2">
                            <span className="text-gray-500 text-sm">Name</span>
                            <span className="font-medium text-gray-900">{profile.name || (profile.user && (profile.user.firstName + ' ' + profile.user.lastName)) || 'N/A'}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="text-gray-500 text-sm">Email</span>
                            <span className="font-medium text-gray-900">{profile.email || (profile.user && profile.user.email) || 'N/A'}</span>
                        </div>
                    </div>

                    {/* Raw API Response for Debugging/Verification */}
                    <div className="mt-4">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            API Response Body
                        </h3>
                        <div className="bg-slate-900 rounded-md shadow-inner overflow-hidden border border-slate-700">
                            <div className="p-4">
                                <pre className="text-xs font-mono text-green-400 whitespace-pre-wrap break-all">
                                    {JSON.stringify(profile, null, 2)}
                                </pre>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 p-3 bg-blue-50 rounded text-sm text-blue-700 border border-blue-100">
                        Secure payment information loaded via WebView.
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentDetails;
