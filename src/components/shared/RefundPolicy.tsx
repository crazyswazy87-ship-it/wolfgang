import PillNav from "../PillNav";
import wolf from "../../../public/assets/wolff.png"

const RefundPolicy = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-black text-white home-min">
       {/*Pill Nav*/}
      <PillNav
        logo={wolf}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
          { label: 'Our Terms', href: '/terms' },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
        theme="light"
        initialLoadAnimation={false}
      />   

      <img 
        src={wolf}
        alt="wolfy"
        className="koimet"
      />

      <div className="max-w-3xl mx-auto">
        
        <h1 className="text-3xl font-bold mb-6">WolfGNG Refund Policy</h1>

        <p className="mb-6 text-gray-300">
          At WolfGNG, we aim to ensure every customer is satisfied with their purchase. 
          If something isn’t right, we’re here to help.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Returns</h2>
          <p className="text-gray-300">
            You may request a return within <strong>7 days</strong> of receiving your order. 
            Items must be unworn, unused, in original condition, and with all tags and packaging intact.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Refunds</h2>
          <p className="text-gray-300">
            Once your return is received and inspected, we will notify you of the approval status. 
            If approved, refunds will be processed to your original payment method within 
            <strong> 5–10 business days</strong>.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Non-Refundable Items</h2>
          <ul className="list-disc pl-5 text-gray-300">
            <li>Worn, washed, or damaged items caused by the customer</li>
            <li>Sale or clearance items marked as final sale</li>
            <li>Custom or personalized products</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Exchanges</h2>
          <p className="text-gray-300">
            We only replace items if they are defective, damaged upon arrival, or incorrect.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">How to Request a Refund</h2>
          <p className="text-gray-300">
            Contact us with your order number, reason for return, and clear photos (if applicable).
          </p>
          <p className="text-gray-300 mt-2">
            Phone: <span className="font-medium">+254722541890</span>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Shipping Costs</h2>
          <p className="text-gray-300">
            Customers are responsible for return shipping costs unless the item is faulty or incorrect. 
            Original shipping fees are non-refundable.
          </p>
        </section>

      </div>
    </div>
  );
};

export default RefundPolicy;