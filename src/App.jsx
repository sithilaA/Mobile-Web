import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import PaymentDetails from './pages/PaymentDetails';
import StaticPage from './pages/StaticPage';
import TermsAndConditions from './pages/TermsAndConditions';
import FAQ from './pages/FAQ';
import InsuranceProtection from './pages/InsuranceProtection';
import CommunityGuideline from './pages/CommunityGuideline';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Default Route */}
          <Route index element={<Navigate to="/FrequentlyAskedQuestions" replace />} />

          {/* Payment Details - Auth required (via window.APP_AUTH_TOKEN) */}
          <Route path="payment-details" element={<PaymentDetails />} />

          {/* Legal & Info Pages */}
          <Route path="TermsAndConditions"          element={<TermsAndConditions />} />
          <Route path="FrequentlyAskedQuestions"    element={<FAQ />} />
          <Route path="InsuranceProtection"         element={<InsuranceProtection />} />
          <Route path="CommunityGuideline"          element={<CommunityGuideline />} />

          <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />

          {/* 404 Route */}
          <Route
            path="*"
            element={
              <div className="p-6 text-center space-y-2">
                <span className="material-symbols-outlined text-gray-300 text-5xl">search_off</span>
                <h2 className="text-lg font-bold text-gray-800">Page Not Found</h2>
                <p className="text-sm text-gray-500">The requested page could not be found.</p>
              </div>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
