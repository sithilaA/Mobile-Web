import React, { useState } from 'react';
import LegalPageHeader from '../components/LegalPageHeader';

/* ─────────────────────────────────────────────────────────
   Insurance types for Taskers
   ───────────────────────────────────────────────────────── */
const insuranceTypes = [
  {
    icon: 'policy',
    title: 'Public Liability Insurance',
    desc: 'Covers you if a third party (client or bystander) suffers injury or property damage as a result of your work. Highly recommended for all Taskers.',
    required: true,
  },
  {
    icon: 'personal_injury',
    title: 'Workers\' Compensation',
    desc: 'Required in most Australian states if you employ others. Even as a sole trader, it may be a legal requirement depending on your jurisdiction.',
    required: true,
  },
  {
    icon: 'construction',
    title: 'Tools & Equipment Insurance',
    desc: 'Covers the cost of replacing or repairing tools and equipment if they are stolen, lost, or accidentally damaged.',
    required: false,
  },
  {
    icon: 'home_repair_service',
    title: 'Professional Indemnity',
    desc: 'Protects you against claims of negligence or errors in the professional services or advice you provide. Required for licensed trades and professional services.',
    required: false,
  },
  {
    icon: 'local_shipping',
    title: 'Motor Vehicle / Transit Insurance',
    desc: 'Required if your Task involves driving, transporting goods, or using a vehicle as part of your service.',
    required: false,
  },
];

/* ─────────────────────────────────────────────────────────
   Poster Checklist Items
   ───────────────────────────────────────────────────────── */
const posterChecklist = [
  { icon: 'badge', text: 'Check the Tasker has a verified profile and relevant badges.' },
  { icon: 'fact_check', text: 'Ask to see evidence of relevant licences or permits before the Task begins.' },
  { icon: 'shield', text: 'Confirm the Tasker holds appropriate insurance for the work.' },
  { icon: 'star', text: 'Read the Tasker\'s reviews and ratings from previous Posters.' },
  { icon: 'chat', text: 'Communicate clearly through the Platform about the scope of work.' },
  { icon: 'gavel', text: 'For regulated work (electrical, plumbing, etc.), always verify formal licences.' },
];

/* ─────────────────────────────────────────────────────────
   FAQs specific to Insurance
   ───────────────────────────────────────────────────────── */
const insuranceFaqs = [
  {
    q: 'Does MyToDoo provide insurance cover for Tasks?',
    a: 'No. MyToDoo does not provide any form of insurance to Users. Each Tasker is solely responsible for obtaining and maintaining appropriate insurance, and Posters should confirm coverage before engaging a Tasker.',
  },
  {
    q: 'What happens if a Tasker causes damage during a Task?',
    a: 'If a Tasker causes damage, the Tasker\'s public liability insurance (if held) would ordinarily cover third-party property damage or injury. MyToDoo is not liable for loss, damage, or injury arising out of a Task. Users assume all risks associated with Tasks to the maximum extent permitted by law.',
  },
  {
    q: 'Can MyToDoo require proof of insurance?',
    a: 'Yes. MyToDoo may, in its discretion, require Taskers to provide evidence of insurance before accepting or performing certain categories of Tasks. Failure to provide evidence may result in suspension or cancellation of the Task or account.',
  },
  {
    q: 'What if a Tasker doesn\'t have the required licence?',
    a: 'Taskers must hold and maintain all licences, permits, and qualifications required to lawfully perform a Task. Posters must not engage a Tasker for regulated work unless satisfied the Tasker holds the necessary authorisations. MyToDoo may take action against Taskers performing unlicensed work.',
  },
];

/* ─────────────────────────────────────────────────────────
   Component
   ───────────────────────────────────────────────────────── */
const InsuranceProtection = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('tasker'); // 'tasker' | 'poster'

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      {/* ── Header ── */}
      <LegalPageHeader
        title="Insurance & Protection"
        subtitle="Understand your insurance responsibilities and how to stay protected on the MyToDoo Platform."
        badge="Platform Policy"
        badgeColor="bg-rose-50 text-rose-700"
      />

      <div className="px-4 py-5 pb-10 space-y-4">

        {/* ── Important Notice Banner ── */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-4 flex gap-3">
          <span className="material-symbols-outlined text-amber-500 text-xl flex-shrink-0 mt-0.5">warning</span>
          <div className="space-y-1">
            <p className="text-xs font-bold text-amber-800">Important Notice</p>
            <p className="text-xs text-amber-700 leading-relaxed">
              MyToDoo does <strong>not</strong> provide any insurance to Users. All insurance responsibilities rest solely with the Tasker and Poster.
            </p>
          </div>
        </div>

        {/* ── Tasker / Poster Toggle ── */}
        <div className="flex justify-center">
          <div className="bg-slate-100 p-1 rounded-full flex w-full max-w-[280px]">
            <button
              onClick={() => setActiveTab('tasker')}
              className={`flex-1 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                activeTab === 'tasker' ? 'bg-primary text-white shadow-sm' : 'text-slate-500'
              }`}
            >
              I'm a Tasker
            </button>
            <button
              onClick={() => setActiveTab('poster')}
              className={`flex-1 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                activeTab === 'poster' ? 'bg-primary text-white shadow-sm' : 'text-slate-500'
              }`}
            >
              I'm a Poster
            </button>
          </div>
        </div>

        {/* ── Tasker View ── */}
        {activeTab === 'tasker' && (
          <div className="space-y-4 accordion-content">
            {/* Your responsibilities */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-50">
                <div className="w-8 h-8 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-rose-500 text-base">assignment</span>
                </div>
                <p className="text-sm font-bold text-gray-800">Your Responsibilities as a Tasker</p>
              </div>
              <div className="px-4 py-4 space-y-3">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-base flex-shrink-0 mt-0.5">check_circle</span>
                  <p className="text-sm text-gray-600 leading-relaxed">Obtain and maintain all insurance necessary to perform your Tasks before you start any work.</p>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-base flex-shrink-0 mt-0.5">check_circle</span>
                  <p className="text-sm text-gray-600 leading-relaxed">Hold and maintain all licences, permits, authorisations, or qualifications required by law for each Task type.</p>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-base flex-shrink-0 mt-0.5">check_circle</span>
                  <p className="text-sm text-gray-600 leading-relaxed">Be prepared to provide evidence of insurance or licences if requested by MyToDoo or a Poster.</p>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-base flex-shrink-0 mt-0.5">check_circle</span>
                  <p className="text-sm text-gray-600 leading-relaxed">Personally perform all Tasks — you cannot subcontract or delegate work to another person.</p>
                </div>
              </div>
            </div>

            {/* Insurance types */}
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 px-1">
                Types of Insurance to Consider
              </p>
              <div className="space-y-2">
                {insuranceTypes.map((ins, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-4 flex gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary text-base">{ins.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <p className="text-sm font-semibold text-gray-800">{ins.title}</p>
                        {ins.required && (
                          <span className="bg-rose-50 text-rose-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-rose-100">
                            Recommended
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{ins.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk warning */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl px-4 py-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-500 text-base">info</span>
                <p className="text-xs font-semibold text-slate-700">Risk Assumption</p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                By using the Platform, you acknowledge that participation in Tasks involves inherent risks, including property damage, personal injury, or financial loss. MyToDoo disclaims all liability for any loss, damage, injury, or claim arising out of or connected with a Task.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                MyToDoo's total liability to any User will not exceed the greater of the total fees paid by that User in the previous 12 months, or AUD $500.
              </p>
            </div>
          </div>
        )}

        {/* ── Poster View ── */}
        {activeTab === 'poster' && (
          <div className="space-y-4 accordion-content">
            {/* Poster notice */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-50">
                <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-base">person_search</span>
                </div>
                <p className="text-sm font-bold text-gray-800">Your Responsibilities as a Poster</p>
              </div>
              <div className="px-4 py-4 space-y-3">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-base flex-shrink-0 mt-0.5">check_circle</span>
                  <p className="text-sm text-gray-600 leading-relaxed">Make your own enquiries about whether a Tasker holds appropriate insurance before engaging them.</p>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-base flex-shrink-0 mt-0.5">check_circle</span>
                  <p className="text-sm text-gray-600 leading-relaxed">Do not engage a Tasker for regulated work unless satisfied the Tasker holds the necessary licences and authorisations.</p>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-base flex-shrink-0 mt-0.5">check_circle</span>
                  <p className="text-sm text-gray-600 leading-relaxed">Conduct your own due diligence — MyToDoo does not certify or verify a Tasker's skills, qualifications, or insurance coverage.</p>
                </div>
              </div>
            </div>

            {/* Poster checklist */}
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 px-1">
                Before You Hire — Checklist
              </p>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {posterChecklist.map((item, i) => (
                  <div key={i} className={`flex items-start gap-3 px-4 py-3 ${i < posterChecklist.length - 1 ? 'border-b border-gray-50' : ''}`}>
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-emerald-500 text-sm">{item.icon}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Poster disclaimer */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl px-4 py-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-500 text-base">gavel</span>
                <p className="text-xs font-semibold text-slate-700">Legal Note for Posters</p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                MyToDoo is not responsible for ensuring a Tasker is insured or licensed. If a Tasker causes damage or injury, liability lies between the Poster and Tasker as the parties to the Task Contract. Always verify credentials before work commences.
              </p>
            </div>
          </div>
        )}

        {/* ── Insurance FAQs ── */}
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 px-1">Common Questions</p>
          <div className="space-y-2">
            {insuranceFaqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-start justify-between px-4 py-4 text-left active:bg-gray-50 transition-colors gap-3"
                  >
                    <p className="text-sm font-semibold text-gray-800 leading-snug flex-1">{faq.q}</p>
                    <span
                      className={`material-symbols-outlined text-gray-400 flex-shrink-0 text-xl transition-transform duration-200 mt-0.5 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 border-t border-gray-50 accordion-content">
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Refer to T&C ── */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl px-4 py-4 flex gap-3">
          <span className="material-symbols-outlined text-primary text-lg flex-shrink-0 mt-0.5">menu_book</span>
          <div>
            <p className="text-xs font-bold text-blue-800 mb-0.5">Full Policy Details</p>
            <p className="text-xs text-blue-700 leading-relaxed">
              For complete insurance and liability provisions, please refer to <strong>Section 8</strong> (Insurance and Risk Allocation) and <strong>Section 15</strong> (Liability and Indemnity) of our Terms & Conditions.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InsuranceProtection;
