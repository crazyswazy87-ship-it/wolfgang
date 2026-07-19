import { Link, useNavigate } from "react-router-dom";

import abt from "../../public/assets/wolff.png"
import danski from "../../public/assets/cart.png"

import ShinyText from "../components/ShinyText";
import { useEffect, useState } from "react";
import { DATABASE_ID, databases, PRODUCT_COLLECTION_ID } from "../components/lib/appwrite";
import { Query } from "appwrite";
import PillNav from "../components/PillNav";
import wolf from "../../public/assets/wolff.png"
interface Product {
  $id: string;
  name: string;
  image: string;
  price: string;
}

const Home = () => {

  const navigate = useNavigate();

  const [merchs, setMerchs] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");


const loadProducts = async () => {
  setLoading(true);

  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      PRODUCT_COLLECTION_ID,
      [Query.orderDesc("$createdAt")]
    );

    setMerchs(response.documents as Product[]);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  void loadProducts();
}, []);

const filteredMerchs = merchs.filter(
  (merch) =>
    merch.name.toLowerCase().includes(search.toLowerCase()) ||
    merch.price.includes(search)
);

const [loaded, setLoaded] = useState(false);



  return (
    <div className="missed">
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

      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {loading
  ? Array.from({ length: 4 }).map((_, i) => (
      <div className={`sauti item-${i}`} key={i}>
        <div className="product-loader-image shimmer"></div>

        <div className="santan">
          <div className="product-loader-price shimmer"></div>
          <div className="product-loader-name shimmer"></div>
        </div>

        <div className="berbique">
          <div className="product-loader-icon shimmer"></div>

          <div className="product-loader-button shimmer"></div>
        </div>
      </div>
    ))
  : filteredMerchs.map((merch, i) => (
      <div className={`sauti item-${i}`} key={merch.$id}>
        <div className="sauti">
          {!loaded && (
            <div className="absolute inset-0 animate-pulse bg-zinc-800 rounded-xl" />
          )}

          <img
          src={merch.image}
          alt={merch.name}
          onClick={() => navigate("/catalogue")}
          className="kanye"
          
        />
        </div>

        <div className="santan">
          <ShinyText
            text={`Ksh ${Number(merch.price).toLocaleString()}`}
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover
            disabled={false}
            className="alkaline"
          />

          <ShinyText
            text={merch.name}
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover
            disabled={false}
            className="alkaline"
          />
        </div>

        <div className="berbique">
          <Link to="/wolfgng" className="pain">
            <img
              src={abt}
              alt="wolfgng"
              height={30}
              width={30}
              className="waba"
            />
          </Link>

          <button className="shugli">
            <Link
              to="https://www.instagram.com/wolf_gng5?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="pain"
            >
              Checkout
            </Link>

            <img
              src={danski}
              alt="cart"
              height={25}
              width={25}
            />
          </button>
        </div>
      </div>
    ))}

    {!loading && filteredMerchs.length === 0 && (
      <div className="no-products">
        No products found.
      </div>
    )}

    </div>
  )
}

export default Home