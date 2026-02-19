import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const PaymentDetails = () => {
    const [activeTab, setActiveTab] = useState('poster'); // 'tasker' | 'poster'
    const [taskerSummary, setTaskerSummary] = useState(null);
    const [posterSummary, setPosterSummary] = useState(null);
    const [taskerHistory, setTaskerHistory] = useState([]);
    const [posterHistory, setPosterHistory] = useState([]);
    const [taskerPage, setTaskerPage] = useState(1);
    const [posterPage, setPosterPage] = useState(1);
    const [taskerTotalPages, setTaskerTotalPages] = useState(1);
    const [posterTotalPages, setPosterTotalPages] = useState(1);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [retryCount, setRetryCount] = useState(0);

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

    const getToken = () => window.APP_AUTH_TOKEN;

    const getAuthHeaders = (token) => ({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    });

    // --- Initial data fetch ---
    useEffect(() => {
        const fetchAllData = async () => {
            try {
                setLoading(true);
                setError(null);

                const token = getToken();
                console.log("Checking for token in window.APP_AUTH_TOKEN:", token);

                if (!token) {
                    throw new Error("Unauthorized access: Token missing");
                }

                const headers = getAuthHeaders(token);

                const [taskerSum, posterSum, taskerHist, posterHist] = await Promise.all([
                    axios.get(`${apiBaseUrl}/payment/taskers/financial`, { headers }),
                    axios.get(`${apiBaseUrl}/payment/posters/financial`, { headers }),
                    axios.get(`${apiBaseUrl}/payment/tasks/tasker/financial-history?page=1&limit=20`, { headers }),
                    axios.get(`${apiBaseUrl}/payment/tasks/poster/financial-history?page=1&limit=20`, { headers }),
                ]);

                setTaskerSummary(taskerSum.data.data);
                setPosterSummary(posterSum.data.data);
                setTaskerHistory(taskerHist.data.data || []);
                setPosterHistory(posterHist.data.data || []);
                setTaskerTotalPages(taskerHist.data.total_pages || 1);
                setPosterTotalPages(posterHist.data.total_pages || 1);
                setTaskerPage(1);
                setPosterPage(1);
            } catch (err) {
                console.error("Error fetching financial data:", err);
                setError(err.response?.data?.message || err.message || "Failed to load payment details");
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, [retryCount, apiBaseUrl]);

    // --- Load more history ---
    const loadMore = useCallback(async () => {
        const token = getToken();
        if (!token) return;
        const headers = getAuthHeaders(token);

        setLoadingMore(true);
        try {
            if (activeTab === 'tasker') {
                const nextPage = taskerPage + 1;
                const res = await axios.get(
                    `${apiBaseUrl}/payment/tasks/tasker/financial-history?page=${nextPage}&limit=20`,
                    { headers }
                );
                setTaskerHistory(prev => [...prev, ...(res.data.data || [])]);
                setTaskerPage(nextPage);
                setTaskerTotalPages(res.data.total_pages || 1);
            } else {
                const nextPage = posterPage + 1;
                const res = await axios.get(
                    `${apiBaseUrl}/payment/tasks/poster/financial-history?page=${nextPage}&limit=20`,
                    { headers }
                );
                setPosterHistory(prev => [...prev, ...(res.data.data || [])]);
                setPosterPage(nextPage);
                setPosterTotalPages(res.data.total_pages || 1);
            }
        } catch (err) {
            console.error("Error loading more:", err);
        } finally {
            setLoadingMore(false);
        }
    }, [activeTab, taskerPage, posterPage, apiBaseUrl]);

    // --- Helpers ---
    const formatCurrency = (amount) => {
        const num = Number(amount) || 0;
        return `$${num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const d = new Date(dateStr);
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    const countByStatus = (history, status) => {
        return history.filter(item => item.status === status).length;
    };

    const getStatusConfig = (status) => {
        switch (status) {
            case 'complete':
                return { label: 'Complete', bg: 'bg-emerald-500', icon: 'check_circle' };
            case 'pending':
                return { label: 'Pending', bg: 'bg-amber-500', icon: 'schedule' };
            case 'cancelled':
                return { label: 'Cancelled', bg: 'bg-rose-500', icon: 'cancel' };
            default:
                return { label: status, bg: 'bg-slate-500', icon: 'info' };
        }
    };

    // --- Derived data per active tab ---
    const currentSummary = activeTab === 'tasker' ? taskerSummary : posterSummary;
    const currentHistory = activeTab === 'tasker' ? taskerHistory : posterHistory;
    const currentPage = activeTab === 'tasker' ? taskerPage : posterPage;
    const currentTotalPages = activeTab === 'tasker' ? taskerTotalPages : posterTotalPages;
    const hasMore = currentPage < currentTotalPages;

    const balance = currentSummary?.current_balance ?? 0;

    const completeCount = countByStatus(currentHistory, 'complete');
    const pendingCount = countByStatus(currentHistory, 'pending');
    const cancelledCount = countByStatus(currentHistory, 'cancelled');

    // --- Loading state ---
    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    // --- Error state ---
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
        <main className="p-4 space-y-6 pb-16">

            {/* ── Tasker / Poster Toggle ── */}
            <div className="flex justify-center pt-2">
                <div className="bg-slate-100 p-1 rounded-full flex w-full max-w-[280px]">
                    <button
                        onClick={() => setActiveTab('tasker')}
                        className={`flex-1 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${activeTab === 'tasker'
                                ? 'bg-primary text-white shadow-sm'
                                : 'text-slate-500'
                            }`}
                    >
                        Tasker
                    </button>
                    <button
                        onClick={() => setActiveTab('poster')}
                        className={`flex-1 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${activeTab === 'poster'
                                ? 'bg-primary text-white shadow-sm'
                                : 'text-slate-500'
                            }`}
                    >
                        Poster
                    </button>
                </div>
            </div>

            {/* ── Balance Gradient Card ── */}
            <div className="balance-gradient rounded-3xl p-8 text-center text-white shadow-[var(--ios-shadow)] relative overflow-hidden">
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <p className="text-[10px] tracking-[0.2em] font-bold uppercase mb-4 opacity-90">
                    MYTODOO PAY
                </p>
                <h2 className="text-5xl font-bold mb-2 tracking-tight">
                    {formatCurrency(balance)}
                </h2>
                <p className="text-sm font-medium opacity-80">Available Balance</p>

                {/* Extra summary info below balance */}
                {activeTab === 'tasker' && taskerSummary && (
                    <div className="mt-4 flex justify-center gap-6 text-xs opacity-80">
                        <div>
                            <p className="font-semibold">{formatCurrency(taskerSummary.total_payout)}</p>
                            <p>Total Payout</p>
                        </div>
                        <div>
                            <p className="font-semibold">{formatCurrency(taskerSummary.pending_payout)}</p>
                            <p>Pending</p>
                        </div>
                    </div>
                )}
                {activeTab === 'poster' && posterSummary && (
                    <div className="mt-4 flex justify-center gap-6 text-xs opacity-80">
                        <div>
                            <p className="font-semibold">{formatCurrency(posterSummary.total_payment)}</p>
                            <p>Total Paid</p>
                        </div>
                        <div>
                            <p className="font-semibold">{formatCurrency(posterSummary.total_refund)}</p>
                            <p>Refunded</p>
                        </div>
                    </div>
                )}
            </div>

            {/* ── 3-Column Stat Cards ── */}
            <div className="grid grid-cols-3 gap-3">
                <div className="bg-white p-4 rounded-2xl text-center shadow-[var(--ios-shadow)] border border-slate-50">
                    <p className="text-xs text-slate-500 font-medium mb-3">Complete</p>
                    <p className="text-2xl font-bold text-emerald-500">{completeCount}</p>
                </div>
                <div className="bg-white p-4 rounded-2xl text-center shadow-[var(--ios-shadow)] border border-slate-50">
                    <p className="text-xs text-slate-500 font-medium mb-3">Pending</p>
                    <p className="text-2xl font-bold text-amber-500">{pendingCount}</p>
                </div>
                <div className="bg-white p-4 rounded-2xl text-center shadow-[var(--ios-shadow)] border border-slate-50">
                    <p className="text-xs text-slate-500 font-medium mb-3">Cancelled</p>
                    <p className="text-2xl font-bold text-rose-500">{cancelledCount}</p>
                </div>
            </div>

            {/* ── Transaction History Cards ── */}
            <div className="space-y-4">
                {currentHistory.length === 0 && (
                    <div className="text-center py-12 text-slate-400 text-sm">
                        <span className="material-symbols-outlined text-4xl mb-2 block">receipt_long</span>
                        No transactions found.
                    </div>
                )}

                {currentHistory.map((item) => {
                    const statusCfg = getStatusConfig(item.status);

                    return (
                        <div
                            key={item.id}
                            className="bg-white rounded-3xl p-5 shadow-[var(--ios-shadow)] border border-slate-50 space-y-4"
                        >
                            {/* Title row */}
                            <div className="flex justify-between items-start">
                                <h3 className="text-lg font-bold leading-tight pr-4">
                                    {item.task_id}
                                </h3>
                                <span className="text-lg font-bold text-primary whitespace-nowrap">
                                    {formatCurrency(item.task_price)}
                                </span>
                            </div>

                            {/* Details */}
                            <div className="space-y-2">
                                <div className="flex items-center text-slate-500">
                                    <span className="material-symbols-outlined text-[18px] mr-2">group</span>
                                    <span className="text-sm">
                                        {activeTab === 'tasker'
                                            ? `Poster → ${item.poster_user_id}`
                                            : `Tasker → ${item.tasker_user_id}`}
                                    </span>
                                </div>

                                {/* Show payout for tasker, refund info for poster */}
                                {activeTab === 'tasker' && item.payout_amount > 0 && (
                                    <div className="flex items-center text-slate-500">
                                        <span className="material-symbols-outlined text-[18px] mr-2">payments</span>
                                        <span className="text-sm">Payout: {formatCurrency(item.payout_amount)}</span>
                                    </div>
                                )}
                                {activeTab === 'poster' && item.refund_amount > 0 && (
                                    <div className="flex items-center text-slate-500">
                                        <span className="material-symbols-outlined text-[18px] mr-2">undo</span>
                                        <span className="text-sm">Refund: {formatCurrency(item.refund_amount)}</span>
                                    </div>
                                )}
                                {item.penalty_amount > 0 && (
                                    <div className="flex items-center text-slate-500">
                                        <span className="material-symbols-outlined text-[18px] mr-2">warning</span>
                                        <span className="text-sm">
                                            Penalty ({item.penalty_owner}): {formatCurrency(item.penalty_amount)}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Footer: status badge + date */}
                            <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                                <div className={`${statusCfg.bg} text-white px-4 py-1.5 rounded-full flex items-center text-xs font-bold`}>
                                    <span className="material-symbols-outlined text-sm mr-1">{statusCfg.icon}</span>
                                    {statusCfg.label}
                                </div>
                                <div className="flex items-center text-slate-400 text-xs font-medium">
                                    <span className="material-symbols-outlined text-sm mr-1">calendar_today</span>
                                    {formatDate(item.createdAt)}
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* Load More button */}
                {hasMore && (
                    <div className="flex justify-center pt-2">
                        <button
                            onClick={loadMore}
                            disabled={loadingMore}
                            className="px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold shadow-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                        >
                            {loadingMore ? (
                                <span className="flex items-center gap-2">
                                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                                    Loading...
                                </span>
                            ) : (
                                'Load More'
                            )}
                        </button>
                    </div>
                )}
            </div>

            {/* Bottom safe-area spacer */}
            <div className="h-10"></div>
        </main>
    );
};

export default PaymentDetails;
