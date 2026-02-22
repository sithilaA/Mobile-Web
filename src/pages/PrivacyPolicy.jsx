import React, { useState } from 'react';
import LegalPageHeader from '../components/LegalPageHeader';

/* ---------------------------------------------------------
   Privacy Policy Sections
   --------------------------------------------------------- */
const privacySections = [
  {
    number: '01',
    title: 'Introduction',
    content: `
      <h3>Who We Are</h3>
      <p>MyToDoo Pty Ltd ("MyToDoo", "we", "our" or "us") operates the MyToDoo website, mobile application and related services (together, the "Platform").</p>
      <h3>Our Commitment</h3>
      <p>MyToDoo is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, disclose and otherwise handle your personal information in accordance with the <strong>Privacy Act 1988 (Cth)</strong> and the <strong>Australian Privacy Principles (APPs)</strong>.</p>
      <h3>Acceptance</h3>
      <p>By creating an account or using the Platform, you consent to the collection, use and disclosure of your personal information as described in this Privacy Policy. If you do not agree, you must not use the Platform.</p>
    `,
  },
  {
    number: '02',
    title: 'Information We Collect',
    content: `
      <h3>Information You Provide Directly</h3>
      <ul>
        <li><strong>Account information</strong> - name, email address, phone number, date of birth, and password.</li>
        <li><strong>Profile information</strong> - profile photo, bio, skills, and location.</li>
        <li><strong>Identity verification</strong> - government-issued identification, proof of address, and other documents submitted for verification through our third-party providers (e.g. RatifyID).</li>
        <li><strong>Payment information</strong> - bank account or card details submitted to our payment provider, Stripe. MyToDoo does not store full payment card details.</li>
        <li><strong>Task information</strong> - details of tasks you post, offers you make or accept, and any messages exchanged through the Platform.</li>
        <li><strong>Communications</strong> - content of support requests, feedback, and any correspondence with us.</li>
      </ul>
      <h3>Information Collected Automatically</h3>
      <ul>
        <li><strong>Device information</strong> - device type, operating system, browser type, and unique device identifiers.</li>
        <li><strong>Usage data</strong> - pages visited, features used, time spent, and links clicked.</li>
        <li><strong>Location data</strong> - approximate or precise location (where you grant permission).</li>
        <li><strong>Log data</strong> - IP address, access times, and referring URLs.</li>
        <li><strong>Cookies and similar technologies</strong> - see Section 8 (Cookies) below.</li>
      </ul>
      <h3>Information from Third Parties</h3>
      <ul>
        <li>Identity and background check results from verification providers (e.g. RatifyID, police check providers).</li>
        <li>Payment status and transaction information from Stripe.</li>
        <li>Social login information if you choose to register using a third-party account (e.g. Google, Apple).</li>
      </ul>
    `,
  },
  {
    number: '03',
    title: 'How We Use Your Information',
    content: `
      <p>We use your personal information to:</p>
      <ul>
        <li><strong>Operate the Platform</strong> - create and manage your account, facilitate Task Contracts, and process payments.</li>
        <li><strong>Verify identity</strong> - confirm your identity and eligibility to use the Platform.</li>
        <li><strong>Enable communication</strong> - allow Posters and Taskers to communicate through the Platform.</li>
        <li><strong>Process payments</strong> - handle escrow, payouts, refunds, and credits through Stripe.</li>
        <li><strong>Provide customer support</strong> - respond to queries, resolve disputes, and address complaints.</li>
        <li><strong>Send notifications</strong> - send service updates, task alerts, and important account notices.</li>
        <li><strong>Improve the Platform</strong> - analyse usage patterns to improve features and user experience.</li>
        <li><strong>Safety and security</strong> - detect, prevent, and respond to fraud, abuse, and other harmful activity.</li>
        <li><strong>Legal compliance</strong> - comply with applicable laws, regulations, and government requests.</li>
        <li><strong>Marketing</strong> - send promotional communications (where you have consented or we are otherwise permitted to do so). You may opt out at any time.</li>
      </ul>
    `,
  },
  {
    number: '04',
    title: 'Disclosure of Your Information',
    content: `
      <h3>Other Users</h3>
      <p>Certain profile information (such as your name, profile photo, ratings and reviews) is visible to other Users to facilitate Task Contracts. Your contact details are not shared unless you choose to provide them through the Platform's messaging feature.</p>
      <h3>Service Providers</h3>
      <p>We share personal information with trusted third-party service providers who assist us in operating the Platform, including:</p>
      <ul>
        <li><strong>Stripe</strong> - payment processing and escrow management.</li>
        <li><strong>RatifyID and other verification providers</strong> - identity verification and background checks.</li>
        <li><strong>Cloud hosting providers</strong> - secure storage and processing of Platform data.</li>
        <li><strong>Analytics providers</strong> - understanding Platform usage and improving services.</li>
        <li><strong>Customer support tools</strong> - managing support tickets and communications.</li>
      </ul>
      <p>All service providers are required to handle your personal information securely and only for the purposes we specify.</p>
      <h3>Legal and Safety Disclosures</h3>
      <p>We may disclose personal information if required to do so by law, or if we reasonably believe disclosure is necessary to:</p>
      <ul>
        <li>comply with a legal obligation, court order, or government request;</li>
        <li>enforce our Terms and Conditions or other Policies;</li>
        <li>protect the rights, property or safety of MyToDoo, our Users, or the public; or</li>
        <li>investigate suspected fraud or unlawful activity.</li>
      </ul>
      <h3>Business Transfers</h3>
      <p>If MyToDoo is involved in a merger, acquisition, restructure, or sale of assets, your personal information may be transferred to the relevant successor entity. We will notify you of any such transfer via the Platform or by email.</p>
      <h3>With Your Consent</h3>
      <p>We may share your information with other parties where you have provided your express consent to do so.</p>
    `,
  },
  {
    number: '05',
    title: 'Cross-Border Data Transfers',
    content: `
      <p>MyToDoo may transfer, store, and process your personal information outside of Australia. Our service providers  -  including cloud hosting, payment processing, and identity verification providers  -  may be located in countries such as the United States, the European Union, Singapore, and others.</p>
      <p>By using the Platform, you expressly consent to these cross-border transfers. We take reasonable steps to ensure that overseas recipients handle your information in a manner consistent with the Australian Privacy Principles.</p>
    `,
  },
  {
    number: '06',
    title: 'Data Security',
    content: `
      <p>We take reasonable steps to protect your personal information from misuse, loss, unauthorised access, modification, and disclosure. Security measures we employ include:</p>
      <ul>
        <li>Encryption of data in transit (TLS/HTTPS) and at rest.</li>
        <li>Access controls limiting who within MyToDoo can access personal information.</li>
        <li>Regular security assessments and monitoring.</li>
        <li>Use of reputable, security-certified third-party providers.</li>
      </ul>
      <div class="note-box">
       ⚠️ No method of electronic transmission or storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security. You provide personal information at your own risk, subject to your non-excludable rights under the Australian Consumer Law.
      </div>
      <p>If you become aware of any security breach or suspect unauthorised access to your account, please notify us immediately.</p>
    `,
  },
  {
    number: '07',
    title: 'Data Retention',
    content: `
      <p>We retain personal information for as long as necessary to:</p>
      <ul>
        <li>provide the Platform and related services;</li>
        <li>comply with applicable legal, regulatory, tax, or accounting obligations;</li>
        <li>resolve disputes and enforce our agreements; and</li>
        <li>detect and prevent fraud or abuse.</li>
      </ul>
      <p>When you close your account, we will delete or de-identify your personal information within a reasonable timeframe, subject to the above retention requirements. Some information (such as transaction records) may be retained for longer periods as required by law.</p>
    `,
  },
  {
    number: '08',
    title: 'Cookies',
    content: `
      <h3>What Are Cookies?</h3>
      <p>Cookies are small text files placed on your device when you access the Platform. We also use similar technologies such as web beacons, pixels, and local storage.</p>
      <h3>How We Use Cookies</h3>
      <ul>
        <li><strong>Essential cookies</strong> - required for the Platform to function (e.g. session management, authentication).</li>
        <li><strong>Analytics cookies</strong> - help us understand how Users interact with the Platform so we can improve it.</li>
        <li><strong>Preference cookies</strong> - remember your settings and preferences.</li>
        <li><strong>Marketing cookies</strong> - used to deliver relevant promotional content (where consented).</li>
      </ul>
      <h3>Your Choices</h3>
      <p>Most browsers allow you to control or disable cookies through settings. However, disabling essential cookies may prevent the Platform from functioning correctly. For more information about managing cookies, visit <strong>www.allaboutcookies.org</strong>.</p>
    `,
  },
  {
    number: '09',
    title: 'Your Rights and Choices',
    content: `
      <p>Under the Australian Privacy Principles, you have the right to:</p>
      <ul>
        <li><strong>Access</strong> - request access to the personal information we hold about you.</li>
        <li><strong>Correction</strong> - request that we correct inaccurate or outdated information.</li>
        <li><strong>Deletion</strong> - request deletion of your personal information, subject to our legal retention obligations.</li>
        <li><strong>Opt-out of marketing</strong> - unsubscribe from promotional communications at any time via the unsubscribe link in emails or through your account settings.</li>
        <li><strong>Withdraw consent</strong> - where we process your information based on consent, you may withdraw that consent at any time (this does not affect processing already carried out).</li>
      </ul>
      <h3>How to Exercise Your Rights</h3>
      <p>To exercise any of these rights, please contact us using the details in Section 11 (Contact Us). We will respond within a reasonable timeframe and in accordance with our obligations under the Privacy Act 1988 (Cth).</p>
      <p>We may need to verify your identity before processing your request. We will not charge a fee to access your information unless the request is excessive or unreasonable.</p>
    `,
  },
  {
    number: '10',
    title: 'Children\'s Privacy',
    content: `
      <p>The Platform is not directed at children under the age of 18. We do not knowingly collect personal information from anyone under 18 years of age.</p>
      <p>If you believe we have inadvertently collected information from a child, please contact us immediately and we will take steps to delete that information as soon as practicable.</p>
    `,
  },
  {
    number: '11',
    title: 'Contact Us & Complaints',
    content: `
      <h3>Contact Details</h3>
      <p>If you have any questions, concerns, or requests relating to this Privacy Policy or your personal information, please contact us:</p>
      <ul>
        <li><strong>Email:</strong> [insert privacy contact email]</li>
        <li><strong>Post:</strong> Privacy Officer, [insert registered office address]</li>
      </ul>
      <h3>Complaints</h3>
      <p>If you believe we have breached the Australian Privacy Principles or this Privacy Policy, you may lodge a complaint by contacting us using the details above. We will acknowledge your complaint within a reasonable time and aim to resolve it within 30 days.</p>
      <p>If you are not satisfied with our response, you may escalate the complaint to the <strong>Office of the Australian Information Commissioner (OAIC)</strong>:</p>
      <ul>
        <li>Website: <strong>www.oaic.gov.au</strong></li>
        <li>Phone: <strong>1300 363 992</strong></li>
      </ul>
    `,
  },
  {
    number: '12',
    title: 'Changes to This Policy',
    content: `
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons.</p>
      <p>We will notify you of material changes by:</p>
      <ul>
        <li>posting the updated policy on the Platform with a new "Last Updated" date; and/or</li>
        <li>sending a notification via email or through the Platform.</li>
      </ul>
      <p>Your continued use of the Platform after any changes take effect constitutes your acceptance of the updated Privacy Policy. We encourage you to review this policy periodically.</p>
    `,
  },
];

/* ---------------------------------------------------------
   Component
   --------------------------------------------------------- */
const PrivacyPolicy = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      {/* -- Header -- */}
      <LegalPageHeader
        title="Privacy Policy"
        subtitle="How MyToDoo collects, uses, and protects your personal information in accordance with Australian Privacy Law."
        badge="Last Updated: February 2026"
        badgeColor="bg-purple-50 text-purple-700"
      />

      <div className="px-4 py-5 space-y-3 pb-10">

        {/* -- Info banner -- */}
        <div className="bg-purple-50 border border-purple-100 rounded-2xl px-4 py-3 flex gap-3">
          <span className="material-symbols-outlined text-purple-500 text-lg flex-shrink-0 mt-0.5">lock</span>
          <p className="text-xs text-purple-800 leading-relaxed">
            We are committed to protecting your privacy. This policy is governed by the <strong>Privacy Act 1988 (Cth)</strong> and the Australian Privacy Principles. Tap each section to read more.
          </p>
        </div>

        {/* -- Sections Accordion -- */}
        {privacySections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-4 py-4 text-left active:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-purple-50 text-purple-600 text-[11px] font-bold flex items-center justify-center leading-none">
                  {section.number}
                </span>
                <span className="text-sm font-semibold text-gray-800 pr-1 leading-snug">{section.title}</span>
              </div>
              <span
                className={`material-symbols-outlined text-gray-400 flex-shrink-0 text-xl transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
              >
                expand_more
              </span>
            </button>

            {openIndex === index && (
              <div className="px-4 pb-5 pt-2 border-t border-gray-50 accordion-content">
                <div
                  className="legal-content"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            )}
          </div>
        ))}

        {/* -- Footer -- */}
        <div className="bg-slate-50 rounded-2xl border border-slate-100 px-4 py-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-500 text-base">verified_user</span>
            <p className="text-xs font-semibold text-slate-700">Your Privacy Matters</p>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            By using MyToDoo, you consent to the collection, use and disclosure of your personal information as described in this Privacy Policy. If you have any questions, contact our Privacy Officer.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
