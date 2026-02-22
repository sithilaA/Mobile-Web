import React, { useState } from 'react';
import LegalPageHeader from '../components/LegalPageHeader';

/* ---------------------------------------------------------
   10 Community Guidelines
   --------------------------------------------------------- */
const guidelines = [
  {
    number: '1',
    icon: 'handshake',
    title: 'Respect and Courtesy',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-100',
    points: [
      'Treat all other Users with respect.',
      'No harassment, abuse, threats, discrimination, or offensive language.',
      'Communicate clearly and professionally when posting or completing Tasks.',
    ],
  },
  {
    number: '2',
    icon: 'verified',
    title: 'Honesty and Transparency',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    points: [
      'Be truthful in your profile, skills, and experience.',
      'Posters must provide clear and accurate details about the Task.',
      'Taskers must not misrepresent their ability or qualifications to complete a Task.',
    ],
  },
  {
    number: '3',
    icon: 'health_and_safety',
    title: 'Safety First',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
    points: [
      'Only post and accept lawful Tasks.',
      'Do not post or accept Tasks that could endanger health, safety, or property without proper licenses and precautions.',
      'Follow all relevant work health and safety laws of your country and State when completing Tasks.',
    ],
  },
  {
    number: '4',
    icon: 'person',
    title: 'No Subcontracting',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-100',
    points: [
      'The Tasker who accepts the Task must be the one to complete it.',
      'Tasks cannot be subcontracted, transferred, or shared with others.',
    ],
  },
  {
    number: '5',
    icon: 'payments',
    title: 'Payments',
    color: 'text-primary',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    points: [
      'All payments must go through the MyToDoo Platform.',
      'No cash payments, off-platform payments, or arrangements outside the Platform.',
      'Offers must represent the total price of the Task  -  no hidden fees or later mark-ups.',
    ],
  },
  {
    number: '6',
    icon: 'event_available',
    title: 'Cancellations and Reliability',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-100',
    points: [
      'Only make or accept Offers you can commit to.',
      'Repeated cancellations may lead to suspension of your account.',
      'If you can\'t complete a Task, let the other User know as early as possible and follow the cancellation process.',
    ],
  },
  {
    number: '7',
    icon: 'badge',
    title: 'Verification and Badges',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-100',
    points: [
      'Identity verification is required for all Users.',
      'Optional checks (such as police checks or Working with Children Checks) may be required.',
      'Do not misuse badges or verification tools  -  providing false information is grounds for suspension.',
    ],
  },
  {
    number: '8',
    icon: 'star_rate',
    title: 'Feedback and Reviews',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-100',
    points: [
      'Leave fair, honest, and respectful feedback after each Task.',
      'Reviews must reflect genuine experiences and must not include offensive or defamatory content.',
      'Do not offer or request fake or incentivised reviews.',
    ],
  },
  {
    number: '9',
    icon: 'block',
    title: 'Prohibited Behaviour',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-100',
    isProhibited: true,
    points: [
      'Illegal or unlawful activity.',
      'Posting or accepting prohibited Tasks (e.g. services without required licences, hazardous activities without proper controls).',
      'Intellectual property infringement (e.g. using copyrighted material without permission).',
      'Uploading viruses, malware or malicious code.',
      'Creating multiple or fake accounts.',
      'Attempting to manipulate ratings, reviews, or the payment system.',
    ],
  },
  {
    number: '10',
    icon: 'flag',
    title: 'Reporting Concerns',
    color: 'text-slate-600',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-100',
    points: [
      'If you experience or witness behaviour that breaches these Guidelines, report it to MyToDoo through the support page.',
      'MyToDoo may investigate and take action, including removing content, suspending accounts, or reporting unlawful conduct to authorities.',
    ],
  },
];

/* ---------------------------------------------------------
   Component
   --------------------------------------------------------- */
const CommunityGuideline = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      {/* -- Header -- */}
      <LegalPageHeader
        title="Community Guidelines"
        subtitle="How we expect all Users to behave on the MyToDoo Platform  -  keeping our community safe, fair, and respectful."
        badge="Part of Terms & Conditions"
        badgeColor="bg-violet-50 text-violet-700"
      />

      <div className="px-4 py-5 pb-10 space-y-3">

        {/* -- Intro card -- */}
        <div className="bg-gradient-to-br from-[#6366f1] to-[#a855f7] rounded-2xl px-5 py-5 text-white">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-white/80 text-2xl flex-shrink-0">groups</span>
            <div className="space-y-1">
              <p className="text-sm font-bold">Our Community Promise</p>
              <p className="text-xs text-white/80 leading-relaxed">
                The MyToDoo Platform works best when everyone acts honestly, respectfully and responsibly. These guidelines help build a safe, fair and supportive community for all Users.
              </p>
            </div>
          </div>
        </div>

        {/* -- Guidelines Accordion -- */}
        {guidelines.map((guideline, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-4 py-4 text-left active:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {/* Number + icon badge */}
                  <div className={`w-9 h-9 rounded-xl ${guideline.bgColor} border ${guideline.borderColor} flex items-center justify-center flex-shrink-0`}>
                    <span className={`material-symbols-outlined text-base ${guideline.color}`}>
                      {guideline.icon}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">
                      Guideline {guideline.number}
                    </p>
                    <p className="text-sm font-bold text-gray-800 leading-snug">{guideline.title}</p>
                  </div>
                </div>
                <span
                  className={`material-symbols-outlined text-gray-400 flex-shrink-0 text-xl transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                >
                  expand_more
                </span>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-1 border-t border-gray-50 accordion-content">
                  {guideline.isProhibited ? (
                    /* Prohibited behaviour  -  warning style list */
                    <div className="space-y-2 mt-1">
                      <p className="text-xs font-semibold text-rose-600 mb-2">
                        The following conduct is <strong>not permitted</strong> on the Platform:
                      </p>
                      {guideline.points.map((point, pi) => (
                        <div key={pi} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-rose-400 text-base flex-shrink-0 mt-0.5">cancel</span>
                          <p className="text-sm text-gray-600 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-2 mt-1">
                      {guideline.points.map((point, pi) => (
                        <div key={pi} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-primary text-base flex-shrink-0 mt-0.5">check_circle</span>
                          <p className="text-sm text-gray-600 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* -- Remember card -- */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl px-4 py-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-500 text-lg">lightbulb</span>
            <p className="text-sm font-bold text-emerald-800">Remember</p>
          </div>
          <p className="text-xs text-emerald-700 leading-relaxed">
            The MyToDoo Platform works best when everyone acts <strong>honestly</strong>, <strong>respectfully</strong> and <strong>responsibly</strong>. By following these Guidelines, you help build a safe, fair and supportive community for all Users.
          </p>
        </div>

        {/* -- Consequences notice -- */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-400 text-base">gavel</span>
            <p className="text-xs font-semibold text-slate-700">Consequences of Breach</p>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Failure to comply with these Community Guidelines may result in removal of content, suspension of your account, permanent termination, or referral to law enforcement. These Guidelines form part of the MyToDoo Terms & Conditions.
          </p>
        </div>

      </div>
    </div>
  );
};

export default CommunityGuideline;
