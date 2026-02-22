import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import LegalPageHeader from '../components/LegalPageHeader';

/* ---------------------------------------------------------
   Category -> icon / colour mapping.
   Admin can create any category name from the panel;
   unmapped categories fall back to DEFAULT_STYLE.
   --------------------------------------------------------- */
const CATEGORY_STYLES = {
  'General':                 { icon: 'rocket_launch',   color: 'text-violet-600', bgColor: 'bg-violet-50',  borderColor: 'border-violet-100' },
  'Getting Started':         { icon: 'rocket_launch',   color: 'text-violet-600', bgColor: 'bg-violet-50',  borderColor: 'border-violet-100' },
  'Tasks & Services':        { icon: 'task_alt',        color: 'text-emerald-600',bgColor: 'bg-emerald-50', borderColor: 'border-emerald-100' },
  'Payments & Fees':         { icon: 'payments',        color: 'text-primary',    bgColor: 'bg-blue-50',    borderColor: 'border-blue-100' },
  'Cancellations & Refunds': { icon: 'undo',            color: 'text-amber-600',  bgColor: 'bg-amber-50',   borderColor: 'border-amber-100' },
  'Insurance & Safety':      { icon: 'shield',          color: 'text-rose-600',   bgColor: 'bg-rose-50',    borderColor: 'border-rose-100' },
  'Disputes & Support':      { icon: 'support_agent',   color: 'text-purple-600', bgColor: 'bg-purple-50',  borderColor: 'border-purple-100' },
  'Account & Privacy':       { icon: 'manage_accounts', color: 'text-slate-600',  bgColor: 'bg-slate-50',   borderColor: 'border-slate-100' },
};
const DEFAULT_STYLE = {
  icon: 'help_outline',
  color: 'text-gray-600',
  bgColor: 'bg-gray-50',
  borderColor: 'border-gray-100',
};

/* ---------------------------------------------------------
   Role filter pills
   --------------------------------------------------------- */
const ROLE_FILTERS = [
  { value: 'all',    label: 'All',    icon: 'groups' },
  { value: 'poster', label: 'Poster', icon: 'post_add' },
  { value: 'tasker', label: 'Tasker', icon: 'handyman' },
];

/* ---------------------------------------------------------
   Main FAQ Component
   --------------------------------------------------------- */
const FAQ = () => {
  const [articles, setArticles]           = useState([]);
  const [loading, setLoading]             = useState(true);
  const [error, setError]                 = useState(null);
  const [openItem, setOpenItem]           = useState(null);   // "catName-itemIndex"
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeRole, setActiveRole]       = useState('all');  // 'all' | 'poster' | 'tasker'

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'https://au-live-api.mytodoo.com/api';

  /* ---- fetch from API ---- */
  const fetchArticles = useCallback(async (role) => {
    try {
      setLoading(true);
      setError(null);

      const params = {};
      if (role !== 'all') params.role = role;

      const res = await axios.get(`${apiBaseUrl}/help-support`, { params });
      const data = res.data?.data || [];
      // sort by the admin-defined order field
      data.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
      setArticles(data);
    } catch (err) {
      console.error('FAQ fetch error:', err);
      setError('Could not load help articles. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [apiBaseUrl]);

  useEffect(() => {
    fetchArticles(activeRole);
  }, [activeRole, fetchArticles]);

  /* ---- group by category ---- */
  const grouped = articles.reduce((acc, article) => {
    if (!article.isActive) return acc;
    const cat = article.category || 'General';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(article);
    return acc;
  }, {});

  const categories = Object.keys(grouped).map((name) => ({
    name,
    items: grouped[name],
    style: CATEGORY_STYLES[name] || DEFAULT_STYLE,
  }));

  const toggle = (key) => setOpenItem(openItem === key ? null : key);

  const visibleCategories =
    activeCategory === 'all'
      ? categories
      : categories.filter((c) => c.name === activeCategory);

  /* ---- Loading skeleton ---- */
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F9FB]">
        <LegalPageHeader
          title="Frequently Asked Questions"
          subtitle="Find quick answers to common questions about the MyToDoo Platform."
          badge="Help Centre"
          badgeColor="bg-emerald-50 text-emerald-700"
        />
        <div className="px-4 py-5 space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-3 bg-gray-100 rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ---- Error state ---- */
  if (error) {
    return (
      <div className="min-h-screen bg-[#F8F9FB]">
        <LegalPageHeader
          title="Frequently Asked Questions"
          subtitle="Find quick answers to common questions about the MyToDoo Platform."
          badge="Help Centre"
          badgeColor="bg-emerald-50 text-emerald-700"
        />
        <div className="px-4 py-10 flex flex-col items-center text-center space-y-4">
          <span className="material-symbols-outlined text-4xl text-red-400">wifi_off</span>
          <p className="text-sm font-semibold text-gray-700">{error}</p>
          <button
            onClick={() => fetchArticles(activeRole)}
            className="mt-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl active:opacity-80"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  /* ---- Main render ---- */
  return (
    <div className="min-h-screen bg-[#F8F9FB]">

      {/* -- Header -- */}
      <LegalPageHeader
        title="Frequently Asked Questions"
        subtitle="Find quick answers to common questions about the MyToDoo Platform."
        badge="Help Centre"
        badgeColor="bg-emerald-50 text-emerald-700"
      />

      <div className="px-4 py-5 pb-10 space-y-4">

        {/* -- Role Filter (All / Poster / Tasker) -- */}
        <div className="flex gap-2">
          {ROLE_FILTERS.map((r) => (
            <button
              key={r.value}
              onClick={() => {
                setActiveRole(r.value);
                setActiveCategory('all');
                setOpenItem(null);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                activeRole === r.value
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-600 border-gray-200'
              }`}
            >
              <span className="material-symbols-outlined text-[13px]">{r.icon}</span>
              {r.label}
            </button>
          ))}
        </div>

        {/* -- Category Filter Scroll -- */}
        {categories.length > 0 && (
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                activeCategory === 'all'
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-600 border-gray-200'
              }`}
            >
              All Topics
            </button>
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  activeCategory === cat.name
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-gray-600 border-gray-200'
                }`}
              >
                <span className="material-symbols-outlined text-[13px]">{cat.style.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* -- Empty state -- */}
        {visibleCategories.length === 0 && (
          <div className="py-16 flex flex-col items-center text-center space-y-2">
            <span className="material-symbols-outlined text-4xl text-gray-300">search_off</span>
            <p className="text-sm font-semibold text-gray-500">No articles found</p>
            <p className="text-xs text-gray-400">Try a different role or category filter.</p>
          </div>
        )}

        {/* -- FAQ Sections -- */}
        {visibleCategories.map((category) => (
          <div key={category.name} className="space-y-2">

            {/* Category heading */}
            <div className={`flex items-center gap-2 px-3 py-2 rounded-xl ${category.style.bgColor} border ${category.style.borderColor}`}>
              <span className={`material-symbols-outlined text-base ${category.style.color}`}>{category.style.icon}</span>
              <p className={`text-xs font-bold ${category.style.color}`}>{category.name}</p>
            </div>

            {/* Q&A items */}
            {category.items.map((item, idx) => {
              const key = `${category.name}-${idx}`;
              const isOpen = openItem === key;
              return (
                <div
                  key={item._id || idx}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggle(key)}
                    className="w-full flex items-start justify-between px-4 py-4 text-left active:bg-gray-50 transition-colors gap-3"
                  >
                    <p className="text-sm font-semibold text-gray-800 leading-snug flex-1">{item.question}</p>
                    <span
                      className={`material-symbols-outlined text-gray-400 flex-shrink-0 text-xl transition-transform duration-200 mt-0.5 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 border-t border-gray-50 accordion-content">
                      <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        {/* -- Contact Support CTA -- */}
        <div className="bg-gradient-to-br from-[#007AFF] to-[#5856D6] rounded-2xl p-5 text-white text-center space-y-2">
          <span className="material-symbols-outlined text-3xl text-white/80">support_agent</span>
          <p className="text-sm font-bold">Still have questions?</p>
          <p className="text-xs text-white/80 leading-relaxed">
            Our support team is here to help. Contact us through the app or via email.
          </p>
          <div className="mt-2 inline-block bg-white/20 rounded-xl px-4 py-2 text-xs font-semibold">
            Contact Support
          </div>
        </div>

      </div>
    </div>
  );
};

export default FAQ;
