import { NavBar } from "../Components/navbar/NavBar";
 import { Footer } from "../Components/Footer ";

export const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <NavBar />

      {/* Content */}
      <div className="p-6 max-w-4xl mx-auto flex-grow">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold mb-4 mt-10">Returns & Refunds Policy</h1>
        </div>

        <p className="mb-4">
          We want you to be completely satisfied with your purchase.  
          If you are not happy with your order, you can request a return or refund
          according to the rules below.
        </p>

        <h2 className="text-xl font-semibold mb-2">1. Return Eligibility</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Items must be returned within <strong>7 days</strong> of delivery.</li>
          <li>The product must be in original condition (unused, undamaged).</li>
          <li>All accessories, box, and packaging must be included.</li>
          <li>Proof of purchase (invoice or order ID) is required.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">2. Items Not Eligible for Return</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Used or physically damaged products</li>
          <li>Products with missing parts, chargers, or packaging</li>
          <li>Software, digital items, or gift cards</li>
          <li>Items damaged due to misuse</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">3. Refund Process</h2>
        <p className="mb-4">
          Once we receive and inspect the returned product:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>A refund will be issued to your original payment method.</li>
          <li>Refund processing may take 5–7 working days.</li>
          <li>Shipping costs are non-refundable unless the product was defective.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">4. Replacement Policy</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>If a product arrives damaged or defective, you may request a replacement.</li>
          <li>Replacement depends on stock availability.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">5. How to Request a Return</h2>
        <p className="mb-4">
          To start a return, contact our support team:
        </p>

        <p className="font-medium">📧 Email: support@example.com</p>
        <p className="font-medium">📞 Hotline: +94 77 123 4567</p>

        <p className="mt-6">
          Please provide your order number, reason for return, and photos (if damaged).
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
