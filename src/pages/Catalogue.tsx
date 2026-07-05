import london from "../../public/assets/trao.png";
import nairobi from "../../public/assets/sweaty.png";
import kampala from "../../public/assets/sweti.png";
import cairo from "../../public/assets/t-sho.png";
import Kinsasha from "../../public/assets/ty-ty.png"
import abudhabi from "../../public/assets/navy-t-sho.png"
import lagos from "../../public/assets/swaet.png";
import claifornia from "../../public/assets/t-sho-ty.png"
import paloalto from "../../public/assets/seat-tsho.png"
import dodoma from "../../public/assets/combat.png";
import dah from "../../public/assets/combato.png";

import ScrollVelocity from "../components/ScrollVelocity";
import TiltedCard from "../components/TiltedCard";
import CardNav from "../components/CardNav";

import logo from "../../public/assets/wolff.png"
import cart from "../../public/assets/cart.png"

import '../App.css'
import { Link } from "react-router-dom";
import ShinyText from "../components/ShinyText";
const Catalogue = () => {

   //Topbar
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
  }
];

  const shirts = [
    {
      image: london,
      text: ["WolfGNG", "Sweat Pants"],
       overlay: "WolfGNG"
    },
    {
      image: nairobi,
      text: ["WolfGNG", "Navyblue Suit"],
      overlay: "WolfGNG"
    },
    {
      image: kampala,
      text: ["WolfGNG", "white Suit"],
     
      overlay: "WolfGNG"
    },
    {
      image: cairo,
      text: ["WolfGNG", "Black T-shirt"],
     
      overlay: "WolfGNG"
    },
    {
      image: Kinsasha,
      text: ["WolfGNG", "White T-shirt"],
     
      overlay: "WolfGNG"
    },
    {
      image: abudhabi,
      text: ["WolfGNG", "Navy Blue T-shirt"],
     
      overlay: "WolfGNG"
    },
    {
      image: dodoma,
      text: ["WolfGNG", "Combat T-shirt"],
     
      overlay: "WolfGNG"
    },
    {
      image: dah,
      text: ["WolfGNG", "Navy T-Shirt"],
     
      overlay: "WolfGNG"
    },
    {
      image: claifornia,
      text: ["WolfGNG", "Black Tees"],
      overlay: "WolfGNG"
    },
    {
      image: lagos,
      text: ["WolfGNG", "Navy Blue Tees"],
      overlay: "WolfGNG"
    },
    {
      image: paloalto,
      text: ["WolfGNG", "White Tees"],
      overlay: "WolfGNG"
    },
  ];

  return (
    <div className="home-con">
          {/*card nav */}
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

      {shirts.map((shirt, i) => (
        <div className={`bithd item-${i}`} key={i}>
          <TiltedCard
            imageSrc={shirt.image}
            altText="Merch design"
            captionText="Merch"
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
                {shirt.overlay}
              </p>
            }
          />

          <div className="slim">
            <ScrollVelocity
              texts={shirt.text}
              velocity={50}
              className="custom-scroll-text"
              numCopies={4}
              damping={70}
              stiffness={750}
            />

              <ShinyText
                text="1500 KSH"
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
                to={'https://www.instagram.com/wolf_gng5?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='} 
                className="pain">
              Place order
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