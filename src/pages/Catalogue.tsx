import ScrollVelocity from "../components/ScrollVelocity";
import TiltedCard from "../components/TiltedCard";
import CardNav from "../components/CardNav";
import ShinyText from "../components/ShinyText";

import logo from "../../public/assets/wolff.png";
import cart from "../../public/assets/cart.png";

import "../App.css";

import { Link } from "react-router-dom";
import { useProducts } from "../data/products";

const Catalogue = () => {
  const { products, loading } = useProducts();

  const itemsz = [
    {
      label: "About",
      target: "about",
    },
    {
      label: "Catalogue",
      target: "catalogue",
    },
    {
      label: "Contact",
      target: "socials",
    },
  ];

  if (loading) {
  return (
    <div className="home-con">
      <CardNav
        logo={logo}
        logoAlt="Company Logo"
        items={itemsz}
        baseColor=""
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
        theme="light"
        className="topbar"
      />

      {Array.from({ length: 8 }).map((_, i) => (
        <div className="bithd" key={i}>
          <div className="catalogue-skeleton-image shimmer" />

          <div className="slim">
            <div className="catalogue-skeleton-title shimmer" />
            <div className="catalogue-skeleton-price shimmer" />
            <div className="catalogue-skeleton-button shimmer" />
          </div>
        </div>
      ))}
    </div>
  );
}

  return (
    <div className="home-con">
      <CardNav
        logo={logo}
        logoAlt="Company Logo"
        items={itemsz}
        baseColor=""
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
        theme="light"
        className="topbar"
      />

      {products.map((product) => (
        <div className="bithd" key={product.$id}>
          <TiltedCard
            imageSrc={product.image}
            altText={product.name}
            captionText={product.name}
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="390px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
            overlayContent={
              <p className="tilted-card-demo-text">
                WolfGNG
              </p>
            }
          />

          <div className="slim">
            <ScrollVelocity
              texts={["WolfGNG", product.name]}
              velocity={50}
              className="custom-scroll-text"
              numCopies={4}
              damping={70}
              stiffness={750}
            />

            <ShinyText
              text={`Ksh ${Number(product.price).toLocaleString()}`}
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover
              disabled={false}
              className="dingo"
            />

            <button className="btn-gradd">
              <Link
                to="https://www.instagram.com/wolf_gng5?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="pain"
              >
                Place Order

                <img
                  src={cart}
                  height={27}
                  width={27}
                  alt="cart"
                />
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalogue;