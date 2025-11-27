import { NavBar } from "../Components/navbar/NavBar";
  import { Footer } from "../Components/Footer ";
  
export const ReturnsRefunds = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <NavBar />

      {/* Content */}
      <div className="p-6 max-w-4xl mx-auto flex-grow">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold mb-4 mt-10">Terms & Conditions</h1>
        </div>

        <p className="mb-4">
          By using our website and services, you agree to the following terms and conditions.
        </p>

        <h2 className="text-xl font-semibold mb-2">1. Use of Our Service</h2>
        <p className="mb-4">
          Our website is designed for shopping and browsing mobile products. You must not misuse 
          our services or attempt to harm the system.
        </p>

        <h2 className="text-xl font-semibold mb-2">2. Account Responsibilities</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>You are responsible for keeping your login details safe.</li>
          <li>You must provide accurate and updated information.</li>
          <li>We may suspend accounts that violate our rules.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">3. Orders & Payments</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>All orders are subject to availability.</li>
          <li>Payments must be processed through approved methods.</li>
          <li>We reserve the right to cancel any order.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">4. Refund & Return Policy</h2>
        <p className="mb-4">
          Refunds and returns must follow our product return guidelines. Products must be unused 
          and returned within the specified period.
        </p>

        <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
        <p className="mb-4">
          We are not responsible for any loss or damage caused by incorrect use of our website.
        </p>

        <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
        <p className="mb-4">
          We may update these Terms & Conditions at any time. Continued use of our website means 
          you agree to the updated terms.
        </p>

        <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
        <p>If you have any questions: support@example.com</p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
