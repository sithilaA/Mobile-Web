import React, { useState } from 'react';
import LegalPageHeader from '../components/LegalPageHeader';

/* ─────────────────────────────────────────────────────────
   FAQ Data  –  7 categories, 30+ Q&A pairs
   ───────────────────────────────────────────────────────── */
const faqCategories = [
  {
    id: 'getting-started',
    icon: 'rocket_launch',
    label: 'Getting Started',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-100',
    items: [
      {
        q: 'What is MyToDoo?',
        a: 'MyToDoo is an online marketplace that connects people who need services (called "Posters") with people who provide them (called "Taskers"). You can post tasks, browse offers, and complete work safely — all through our secure Platform.',
      },
      {
        q: 'Who can use MyToDoo?',
        a: 'Anyone who is at least 18 years old and has the legal capacity to enter into binding contracts can create an account. By registering, you confirm that you meet these eligibility requirements.',
      },
      {
        q: 'How do I create an account?',
        a: 'Download the MyToDoo app or visit our website, tap "Sign Up," and follow the prompts to register. You\'ll need to provide accurate personal information and complete identity verification.',
      },
      {
        q: 'What is the difference between a Poster and a Tasker?',
        a: 'A Poster creates and publishes a task they need help with. A Tasker responds to a Posted Task with an Offer to perform it. The same person can be both a Poster and a Tasker on the Platform.',
      },
    ],
  },
  {
    id: 'tasks-services',
    icon: 'task_alt',
    label: 'Tasks & Services',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
    items: [
      {
        q: 'What types of tasks can I post?',
        a: 'You can post a wide range of lawful services, including home maintenance, cleaning, gardening, painting, plumbing (by licensed providers), electrical work, IT support, delivery and removalist services, and other personal or business services.',
      },
      {
        q: 'What tasks are not allowed on the Platform?',
        a: 'Prohibited tasks include anything unlawful or illegal; services requiring a licence the Tasker doesn\'t hold; hazardous activities without proper controls; regulated industry services (child care, healthcare, finance, legal) without proper authorisation; and any arrangement to pay outside the Platform.',
      },
      {
        q: 'Can a Tasker subcontract work to someone else?',
        a: 'No. Taskers must personally perform the services agreed in a Task Contract. Subcontracting or delegating a Task to another person is a breach of our Terms and may result in account termination.',
      },
      {
        q: 'How do I make sure a Tasker is qualified?',
        a: 'MyToDoo verifies identities but does not certify skills or qualifications. It is your responsibility as a Poster to conduct your own due diligence — check references, ask for evidence of licences, and confirm insurance where relevant.',
      },
      {
        q: 'What happens if a Task is not completed satisfactorily?',
        a: 'You should first try to resolve it directly with the Tasker. If unresolved, you can raise a concern with MyToDoo through the support channels. MyToDoo may review the circumstances and make a non-binding determination about held funds.',
      },
    ],
  },
  {
    id: 'payments-fees',
    icon: 'payments',
    label: 'Payments & Fees',
    color: 'text-primary',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    items: [
      {
        q: 'How does payment work on MyToDoo?',
        a: 'When you accept a Tasker\'s Offer, you pay the Agreed Price (plus the Connection Fee) into a secure escrow account managed by our payment partner, Stripe. The funds are held until the Task is completed, then released to the Tasker.',
      },
      {
        q: 'What is the Connection Fee?',
        a: 'The Connection Fee is paid by the Poster at the time they accept a Tasker\'s Offer. It covers the cost of connecting Posters and Taskers through our Platform and is non-refundable in all circumstances (except as required by Australian Consumer Law).',
      },
      {
        q: 'How does the Tasker Service Fee work?',
        a: 'The fee is deducted from the Agreed Price before the Tasker receives payment. It operates on a tiered structure based on the Tasker\'s total completed earnings in the previous 30 days:\n• Grasshopper (under $799): 15% + GST\n• P-Plater ($800–$2,499): 13% + GST\n• Expert ($2,500–$4,999): 11% + GST\n• Grandmaster ($5,000+): 9% + GST',
      },
      {
        q: 'Can I pay or receive payment outside the Platform?',
        a: 'No. All payments must be made through the MyToDoo Platform. Off-platform payments — including cash — are a breach of our Terms and may result in suspension or termination of your account.',
      },
      {
        q: 'What are MyToDoo Credits?',
        a: 'Credits are prepaid value issued to you on the Platform, usually as a result of refunds or cancellations. They can be used to pay for future Tasks. Credits are valid for at least 3 years from the date of issue and are non-transferable.',
      },
      {
        q: 'What are MyToDoo Points?',
        a: 'Points are loyalty rewards issued for engagement activities like referrals, reviews, and promotions. They can be redeemed on the Platform and are not redeemable for cash. Points may expire (typically within 6–12 months) as notified at the time of issue.',
      },
    ],
  },
  {
    id: 'cancellations-refunds',
    icon: 'undo',
    label: 'Cancellations & Refunds',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-100',
    items: [
      {
        q: 'What happens if a Poster cancels a task?',
        a: 'If you cancel after accepting an Offer, the Connection Fee is retained by MyToDoo. The Agreed Price may be refunded to you as MyToDoo Credits, unless the Australian Consumer Law requires a refund to your original payment method.',
      },
      {
        q: 'What happens if a Tasker cancels?',
        a: 'If a Tasker cancels after their Offer has been accepted, they will be charged a cancellation fee equal to the Connection Fee. This fee may be deducted from future payouts.',
      },
      {
        q: 'How do refunds work?',
        a: 'Refunds of the Agreed Price are ordinarily issued as MyToDoo Credits. You may request a refund to your original payment method, and MyToDoo may approve or refuse this at its discretion — subject always to your rights under the Australian Consumer Law.',
      },
      {
        q: 'What happens if a task is unresolved after 30 days?',
        a: 'If a Task is not resolved within 30 days of the Tasker marking it complete, the Poster may choose to cancel or extend the Task. If no action is taken, funds will be automatically released to the Tasker.',
      },
    ],
  },
  {
    id: 'insurance-safety',
    icon: 'shield',
    label: 'Insurance & Safety',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-100',
    items: [
      {
        q: 'Does MyToDoo provide insurance?',
        a: 'No. MyToDoo does not provide any insurance to Users. Taskers are solely responsible for obtaining and maintaining all necessary insurance, and Posters should make their own enquiries about a Tasker\'s insurance before engaging them.',
      },
      {
        q: 'What insurance should a Tasker have?',
        a: 'Taskers are responsible for holding appropriate insurance for the services they perform. This may include public liability insurance, workers\' compensation (if applicable), and any other legally required or industry-standard coverage depending on the type of Task.',
      },
      {
        q: 'What should I check before hiring a Tasker?',
        a: 'Before hiring, check that the Tasker has the required licences, permits, and qualifications for the Task. You should also ask about their insurance coverage — especially for higher-risk tasks like electrical work, plumbing, or working at heights.',
      },
      {
        q: 'Can MyToDoo require a Tasker to show proof of insurance?',
        a: 'Yes. MyToDoo may, at its discretion, require Taskers to provide evidence of insurance before accepting or performing certain categories of Tasks. Failure to provide evidence may result in suspension or cancellation of the Task or account.',
      },
    ],
  },
  {
    id: 'disputes-support',
    icon: 'support_agent',
    label: 'Disputes & Support',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100',
    items: [
      {
        q: 'What should I do if I have a dispute?',
        a: 'First, try to resolve the matter directly with the other User. If that fails, you can raise it with MyToDoo through the support channels on the Platform. MyToDoo may review the circumstances and make a non-binding determination about escrow funds.',
      },
      {
        q: 'What can MyToDoo do to help with disputes?',
        a: 'MyToDoo can informally facilitate communication and, at its discretion, make a determination about held funds. However, MyToDoo is not a party to any Task Contract and cannot arbitrate legally. Either party may pursue the matter through consumer protection authorities or courts.',
      },
      {
        q: 'How do I escalate a dispute externally?',
        a: 'If a dispute remains unresolved after the internal process, you may escalate to the relevant consumer protection authority, small claims tribunal, or court. Escalation may only occur after completing MyToDoo\'s internal dispute resolution process.',
      },
      {
        q: 'How do I report inappropriate behaviour?',
        a: 'Use the report function within the Platform or contact our support team. MyToDoo may investigate and take action, including removing content, suspending accounts, or reporting unlawful conduct to authorities.',
      },
    ],
  },
  {
    id: 'account-privacy',
    icon: 'manage_accounts',
    label: 'Account & Privacy',
    color: 'text-slate-600',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-100',
    items: [
      {
        q: 'How does identity verification work?',
        a: 'MyToDoo may require you to verify your identity using third-party providers (such as RatifyID). This may involve providing government-issued ID, proof of address, or other documentation. Additional optional checks (like police checks) may also be available.',
      },
      {
        q: 'What are badges?',
        a: 'Badges are digital indicators shown on your profile to reflect that you have completed a form of verification. They are based on information available at a point in time and may not remain current. MyToDoo can withdraw badges at any time.',
      },
      {
        q: 'How do I close my account?',
        a: 'You can terminate your account at any time through the account settings on the Platform. Note that termination doesn\'t cancel existing Task Contracts or relieve you of outstanding obligations.',
      },
      {
        q: 'How is my personal information protected?',
        a: 'MyToDoo handles your personal information in accordance with the Privacy Act 1988 (Cth) and our Privacy Policy. We may share data with third-party service providers (such as payment processors and identity verification providers) as necessary to operate the Platform.',
      },
      {
        q: 'Can I use the Platform if my account was terminated?',
        a: 'If your account is terminated or suspended by MyToDoo, you must not create another account without our prior written consent. Doing so would be a further breach of our Terms.',
      },
    ],
  },
];

/* ─────────────────────────────────────────────────────────
   Component
   ───────────────────────────────────────────────────────── */
const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);  // "catIndex-itemIndex"
  const [activeCategory, setActiveCategory] = useState('all');

  const toggle = (key) => setOpenItem(openItem === key ? null : key);

  const visibleCategories =
    activeCategory === 'all'
      ? faqCategories
      : faqCategories.filter((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      {/* ── Header ── */}
      <LegalPageHeader
        title="Frequently Asked Questions"
        subtitle="Find quick answers to common questions about using the MyToDoo Platform."
        badge="Help Centre"
        badgeColor="bg-emerald-50 text-emerald-700"
      />

      <div className="px-4 py-5 pb-10 space-y-4">

        {/* ── Category Filter Scroll ── */}
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
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                activeCategory === cat.id
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-600 border-gray-200'
              }`}
            >
              <span className="material-symbols-outlined text-[13px]">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── FAQ Sections ── */}
        {visibleCategories.map((category, catIdx) => {
          const realCatIdx = faqCategories.findIndex((c) => c.id === category.id);
          return (
            <div key={category.id} className="space-y-2">
              {/* Category heading */}
              <div className={`flex items-center gap-2 px-3 py-2 rounded-xl ${category.bgColor} border ${category.borderColor}`}>
                <span className={`material-symbols-outlined text-base ${category.color}`}>{category.icon}</span>
                <p className={`text-xs font-bold ${category.color}`}>{category.label}</p>
              </div>

              {/* Q&A items */}
              {category.items.map((item, itemIdx) => {
                const key = `${realCatIdx}-${itemIdx}`;
                const isOpen = openItem === key;
                return (
                  <div
                    key={itemIdx}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggle(key)}
                      className="w-full flex items-start justify-between px-4 py-4 text-left active:bg-gray-50 transition-colors gap-3"
                    >
                      <p className="text-sm font-semibold text-gray-800 leading-snug flex-1">{item.q}</p>
                      <span
                        className={`material-symbols-outlined text-gray-400 flex-shrink-0 text-xl transition-transform duration-200 mt-0.5 ${isOpen ? 'rotate-180' : ''}`}
                      >
                        expand_more
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 border-t border-gray-50 accordion-content">
                        <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* ── Contact Support CTA ── */}
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
