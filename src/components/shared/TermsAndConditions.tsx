import PillNav from "../PillNav";
import wolf from "../../../public/assets/wolff.png"

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-black text-white home-min">
       {/*Pill Nav*/}
      <PillNav
        logo={wolf}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
          { label: 'Refund Policy', href: '/refund' },
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

        <h1 className="text-3xl font-bold mb-6">WolfGNG Terms & Conditions</h1>

        <p className="mb-6 text-gray-300">
          Welcome to WolfGNG. By accessing or purchasing from our store, you agree to the terms below.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">General</h2>
          <p className="text-gray-300">
            WolfGNG reserves the right to update or change these terms at any time without prior notice.
            Continued use of our website means you accept those changes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          <p className="text-gray-300">
            We do our best to display product colors and details accurately, but we cannot guarantee
            exact matches due to screen differences.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <p className="text-gray-300">
            Once an order is placed, it cannot be modified. We reserve the right to cancel or refuse any order.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Payments</h2>
          <p className="text-gray-300">
            All payments must be completed before orders are processed and shipped.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Shipping</h2>
          <p className="text-gray-300">
            Delivery times are estimates and may vary depending on location and courier delays.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Returns & Refunds</h2>
          <p className="text-gray-300">
            Returns are only accepted under our Refund Policy. Please review it before making a return request.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p className="text-gray-300">
            For any questions, contact us at <span className="font-medium">+254722541890</span>
          </p>
        </section>

      </div>
    </div>
  );
};

export default TermsAndConditions;