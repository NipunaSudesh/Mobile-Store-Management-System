import { Footer } from "../Components/Footer ";
import { Header } from "../Components/Header";
import { NavBar } from "../Components/navbar/NavBar";
export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Navbar */}
      <NavBar />

   {/* Content Section */}
      <div className="p-6 max-w-4xl mx-auto flex-grow">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold mb-4 mt-10">Privacy Policy</h1>
        </div>

        <p className="mb-4">
          We respect your privacy and are committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, store, and protect your data.
        </p>

        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <p className="mb-4">We may collect the following information:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Name and contact details</li>
          <li>Account information</li>
          <li>Device and browser details</li>
          <li>Shopping activity and preferences</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>To provide and improve our services</li>
          <li>To manage user accounts</li>
          <li>To process orders and payments</li>
          <li>To send notifications and updates</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">3. Data Protection</h2>
        <p className="mb-4">
          We use secure servers, encryption, and access controls to protect your data.
          Your information will not be shared with third parties without your consent.
        </p>

        <h2 className="text-xl font-semibold mb-2">4. Your Rights</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Right to access your data</li>
          <li>Right to update or delete your data</li>
          <li>Right to withdraw consent</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">5. Contact Us</h2>
        <p>If you have any questions, contact us at: support@example.com</p>
      </div>


      {/* Footer stays bottom */}
      <Footer />
    </div>
  );
};
