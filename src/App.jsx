import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import PaymentDetails from './pages/PaymentDetails';
import StaticPage from './pages/StaticPage';

function App() {
  const staticContent = {
    terms: `<h2>Terms and Conditions</h2>
            <p>Welcome to our app. By using our services, you agree to these terms...</p>
            <h3>1. Introduction</h3>
            <p>These terms govern your use of our application...</p>`,
    privacy: `<h2>Privacy Policy</h2>
              <p>Your privacy is important to us. This policy explains how we collect and use your data.</p>`,
    insurance: `<h2>Insurance Protection</h2>
                <p>We provide comprehensive insurance coverage for all verified tasks...</p>`,
    community: `<h2>Community Guidelines</h2>
                <p>Respect others and follow our community standards to ensure a safe environment for everyone.</p>`,
    faq: `<h2>Frequently Asked Questions</h2>
          <details><summary>How do I reset my password?</summary><p>Go to settings and click reset password.</p></details>
          <details><summary>Is my payment secure?</summary><p>Yes, we use industry-standard encryption.</p></details>`
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Default Route - Redirect to FAQ or a Home page if needed */}
          <Route index element={<Navigate to="/FrequentlyAskedQuestions" replace />} />

          {/* Payment Details - Auth required (via window.APP_AUTH_TOKEN) */}
          <Route path="payment-details" element={<PaymentDetails />} />

          {/* Static Pages */}
          <Route
            path="TermsAndConditions"
            element={<StaticPage title="Terms & Conditions" content={staticContent.terms} />}
          />
          <Route
            path="PrivacyPolicy"
            element={<StaticPage title="Privacy Policy" content={staticContent.privacy} />}
          />
          <Route
            path="InsuranceProtection"
            element={<StaticPage title="Insurance Protection" content={staticContent.insurance} />}
          />
          <Route
            path="CommunityGuideline"
            element={<StaticPage title="Community Guidelines" content={staticContent.community} />}
          />
          <Route
            path="FrequentlyAskedQuestions"
            element={<StaticPage title="FAQ" content={staticContent.faq} />}
          />

          {/* 404 Route */}
          <Route path="*" element={
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold">Page Not Found</h2>
              <p className="mt-2 text-gray-600">The requested page could not be found.</p>
            </div>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
