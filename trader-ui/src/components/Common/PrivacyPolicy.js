import React from "react";

const PrivacyPolicy = () => (
  <div className="container mx-auto px-4 py-2 text-gray-800 overflow-y-auto">
    <h1 className="text-3xl font-bold mb-2">🛡️ ZyonTrader Privacy Policy</h1>
    <p className="mb-4 text-sm text-gray-600">Last Updated: July 22, 2025</p>
    <p className="mb-6">
      ZyonTrader (“we”, “our”, “us”) is owned and operated by Mydya Technologies Pvt. Ltd., a company registered in India. We are committed to protecting your privacy and personal information as per Indian regulations including the Information Technology Act, 2000, SEBI, and RBI guidelines.
    </p>

    <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
    <ul className="list-disc list-inside mb-6 space-y-1">
      <li>Personal Details: Name, email, phone number, address, PAN (for verification, if needed)</li>
      <li>Payment Info: UPI, card details, bank account (securely handled via Razorpay)</li>
      <li>Usage Data: Device info, IP address, browsing patterns, preferences</li>
      <li>Trading Preferences: Challenges, journaling, analytics selections</li>
      <li>Support Interactions: Emails, chats, and calls for service requests</li>
    </ul>

    <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
    <ul className="list-disc list-inside mb-6 space-y-1">
      <li>Register and manage your ZyonTrader account</li>
      <li>Process payments securely through Razorpay (an RBI-authorized gateway)</li>
      <li>Deliver trading competitions, paper trading, journaling, and analytics</li>
      <li>Send essential updates, alerts, or support messages</li>
      <li>Analyze usage for improvements via SEO and analytics tools (Google, Meta)</li>
      <li>Comply with Indian financial and data protection regulations</li>
      <li>Prevent fraud and enforce platform integrity</li>
    </ul>

    <h2 className="text-xl font-semibold mb-2">3. Sharing and Disclosure</h2>
    <p className="mb-2">We do not sell your data. It may be shared with:</p>
    <ul className="list-disc list-inside mb-6 space-y-1">
      <li>Government authorities (e.g., SEBI, RBI, Income Tax) as legally required</li>
      <li>Service partners like Razorpay, Google, and Meta (only with consent or anonymized data)</li>
      <li>Legal events like mergers or acquisitions</li>
      <li>Cybersecurity and legal teams for fraud detection and enforcement</li>
    </ul>

    <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
    <ul className="list-disc list-inside mb-6 space-y-1">
      <li>HTTPS encryption for all user sessions</li>
      <li>PCI-compliant Razorpay integration</li>
      <li>AES encryption for sensitive data</li>
      <li>Access control and MFA for internal tools</li>
      <li>Regular penetration testing and employee training</li>
    </ul>

    <h2 className="text-xl font-semibold mb-2">5. Data Retention</h2>
    <ul className="list-disc list-inside mb-6 space-y-1">
      <li>Data stored for at least 5 years to meet audit and compliance rules</li>
      <li>User content/preferences up to 2 years for optimization</li>
      <li>Financial records retained as per SEBI/Income Tax regulations</li>
      <li>Users may request deletion if not legally or KYC-bound</li>
    </ul>

    <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
    <ul className="list-disc list-inside mb-6 space-y-1">
      <li>Access, review, or correct your data</li>
      <li>Request deletion or portability, subject to regulation</li>
      <li>Withdraw marketing consent anytime</li>
    </ul>

    <h2 className="text-xl font-semibold mb-2">7. Cookies and Tracking</h2>
    <p className="mb-2">ZyonTrader uses cookies for:</p>
    <ul className="list-disc list-inside mb-6 space-y-1">
      <li>Login/session management</li>
      <li>Analytics (Google Analytics, Tag Manager)</li>
      <li>Ad targeting (Google Ads, Meta Pixel)</li>
    </ul>
    <p className="mb-6">Cookies can be disabled in browser settings but may impact functionality.</p>

    <h2 className="text-xl font-semibold mb-2">8. Third-Party Services</h2>
    <p className="mb-6">
      We link to external tools (e.g., TradingView, Razorpay, Google). Review their privacy policies separately. ZyonTrader is not liable for their data practices.
    </p>

    <h2 className="text-xl font-semibold mb-2">9. International Data Transfers</h2>
    <p className="mb-6">
      Data is stored in India (AWS Mumbai). Cross-border processing complies with Indian standards and international safeguards like SCCs or DPAs.
    </p>

    <h2 className="text-xl font-semibold mb-2">10. Children’s Privacy</h2>
    <p className="mb-6">
      Our platform is strictly for users 18+. Contact us if you suspect data collection from a minor.
    </p>

    <h2 className="text-xl font-semibold mb-2">11. Policy Updates</h2>
    <p className="mb-6">
      This policy may change. Major updates will be communicated via email and updated here.
    </p>

    <h2 className="text-xl font-semibold mb-2">12. Contact Us</h2>
    <div className="mb-6 space-y-1">
      <p><strong>ZyonTrader (Mydya Technologies Pvt. Ltd.)</strong></p>
      <p>📧 Email: <a href="mailto:contact@zyontrader.com" className="text-blue-600">contact@zyontrader.com</a></p>
      <p>📞 Phone: +91-8240772762</p>
    </div>
  </div>
);

export default PrivacyPolicy;