import wolf from "../../public/assets/wolf.png"
import ShinyText from "../components/ShinyText";
import { motion } from "framer-motion";
//import ScrollReveal from "../components/ScrollReveal";
//import ScrollFloat from "../components/ScrollFloat";
//import RotatingText from "../components/RotatingText";
import CardNav from "../components/CardNav";
import logo from "../../public/assets/wolff.png"
//import Shuffle from "../components/Shuffle";
//import FlowingMenu from "../components/FlowingMenu";
import CircularText from "../components/CircularText";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import bra from "../../public/assets/wolff.png"
import sub from "../../public/assets/pack.png"
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
//import Masonry from "../components/Masonry";
import { useState } from "react";
import { DATABASE_ID, databases, ID, WAITLIST_COLLECTION_ID } from "../components/lib/appwrite";
import { toast } from "react-toastify";


import CategoriesSection from "../sections/CategoriesSection";
import FeaturedProductsSection from "../sections/FeaturedProducts";
import type { Product } from "../data/types";
import NewArrivalsSection from "../sections/NewArrivalsSection";


export interface HomePageProps {
  onAddToCart?: (product: Product) => void;
}

const itemsz = [
  {
    label: "About",
    target: "about",
  },
  {
    label: "Collections",
    target: "catalogue",
  },
  {
    label: "Contact",
    target: "socials",
  }
];


const HomePage = ({ onAddToCart }: HomePageProps) => {

  const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

  const navigate = useNavigate();
   //variable proximity
 //const containerRef = useRef(null);




const [email, setEmail] = useState("");
const [loading, setLoading] = useState(false);

const subscribe = async () => {
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    toast("Please enter a valid email address");
    return;
  }

  try {
    setLoading(true);

    await databases.createDocument(
      DATABASE_ID,
      WAITLIST_COLLECTION_ID,
      ID.unique(),
      {
        email,
      }
    );

    toast("Welcome to the pack 🐺");
    setEmail("");
  } catch (error) {
    console.error(error);
    toast("Something went wrong");
  } finally {
    setLoading(false);
  }
};


  return (
  <div className="home-container">
  <section 
    className="hero"
     style={{
    backgroundImage: `url(${wolf})`,
  }}>

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

    <div className="hero-content">
      {/*Shiny Text */}
      <ShinyText
        text="WOLF GANG"
        speed={2}
        delay={0}
        color="#b5b5b5"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover
        disabled={false}
        className="hero-tag"
      />

      <h1>
        BUILT BY DISCIPLINE
        <br />
        DRIVEN BY PURPOSE
      </h1>


      <div className="hero-buttons">
        <motion.div>
         <button 
          className="btn-grad"
          onClick={() => navigate("/wolfgng")}>
            Wolf Collection
          </button>
        </motion.div>

        <motion.div>
         <button 
          onClick={() => handleScroll("contact")}
          className="btn-grad">
            Join The Pack
         </button>
        </motion.div>
      </div>
    </div>
  </section>
  <ShinyText
        text="Premium apparel for those who choose growth over comfort"
        speed={2}
        delay={0}
        color="#b5b5b5"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover
        disabled={false}
        className="mental"
      />

  <div className="genje"> 

    <NewArrivalsSection />
    <CategoriesSection />
      
    {/*circular text*/}
    <CircularText
      text="**WOLF***GNG**"
      onHover="speedUp"
      spinDuration={20}
      className="custom-class"
    />

    <div className="manymen">
      <button
      onClick={() => navigate("/wolfgng")} 
      className=" btn-grad">
      Shop Now
      </button>
    </div>
    
    <FeaturedProductsSection  />


    <div className="kartelo">
      {/*Scroll Stack */}
      <ScrollStack>
        <ScrollStackItem itemClassName="elon">
          <h2>What Our Customers Say</h2>
          
          <div className="moto">

          <div className="zuck">
            <div className="yolo">
              ⭐ ⭐ ⭐ ⭐ ⭐
            </div>
            <div className="meso">
              Got myself a wolfGNG stweatshirt, 
              its very reliable & affordable
            </div>
            <div className="maja">
              <div className="msee oo">
                SM
              </div>
              <div className="rates">
                <span className="bombo">Simon Mwangi</span>
                <span className="alaine">Customer</span>
              </div>
            </div>
          </div>

          <div className="zuck">
            <div className="yolo">
              ⭐ ⭐ ⭐ ⭐ 
            </div>
            <div className="meso">
              Comfortable enough for everyday wear and 
              stylish enough to turn heads. Worth every shilling
            </div>
            <div className="maja">
              <div className="msee ii">
                AK
              </div>
              <div className="rates">
                <span className="bombo">Abdul Karim</span>
                <span className="alaine">Pack member</span>
              </div>
            </div>
          </div>

          <div className="zuck">
            <div className="yolo">
              ⭐ ⭐ ⭐ ⭐ ⭐
            </div>
            <div className="meso">
               I've washed it
               multiple times and it still looks brand new
            </div>
            <div className="maja">
              <div className="msee pp">
                YS
              </div>
              <div className="rates">
                <span className="bombo">Young Sido</span>
                <span className="alaine">Pack Member</span>
              </div>
            </div>
          </div>

          <div className="zuck">
            <div className="yolo">
              ⭐ ⭐ ⭐ ⭐ 
            </div>
            <div className="meso">
              The design stands out without trying too hard
            </div>
            <div className="maja">
              <div className="msee aa">
                YA
              </div>
              <div className="rates">
                <span className="bombo">Yassin Adam</span>
                <span className="alaine">Customer</span>
              </div>
            </div>
          </div>

          <div className="zuck">
            <div className="yolo">
              ⭐ ⭐ ⭐ 
            </div>
            <div className="meso">
              The fabric feels premium,
              and I've received so many compliments whenever I wear it
            </div>
            <div className="maja">
              <div className="msee ii">
                NO
              </div>
              <div className="rates">
                <span className="bombo">Nancy Onyango</span>
                <span className="alaine">Pack member</span>
              </div>
            </div>
          </div>

          <div className="zuck">
            <div className="yolo">
              ⭐ ⭐ ⭐ ⭐ 
            </div>
            <div className="meso">
              It's more than apparel it's a community
            </div>
            <div className="maja">
              <div className="msee aa">
                AK
              </div>
              <div className="rates">
                <span className="bombo">Abdul Karim</span>
                <span className="alaine">Pack member</span>
              </div>
            </div>
          </div>

          <div className="zuck">
            <div className="yolo">
              ⭐ ⭐ ⭐ ⭐ ⭐ 
            </div>
            <div className="meso">
              Every time I wear WolfGNG, I feel confident and motivated
            </div>
            <div className="maja">
              <div className="msee ss">
                KK
              </div>
              <div className="rates">
                <span className="bombo">Kairo Khalif</span>
                <span className="alaine">Customer</span>
              </div>
            </div>
          </div>

          </div>

        </ScrollStackItem>

        <ScrollStackItem 
          itemClassName="kamala">
        <section id="contact" className="kamala">
          <h2 className="psycho">Join our pack waitlist</h2>
          <p className="psycho">Recieve emails when new merchendise drops</p>

          <input
            type="email"
            required
            disabled={loading}
            className="mcfullstop"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            onClick={subscribe}
            className="btn-grad bundi"
          >
            {loading ? "Joining...." : (
              <img
                src={sub}
                alt="wolfy"
                height={80}
                className="mwitu"
              />
            )}
          </button>
        </section>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="trump">
          <Link to={'/andime'}>
          <img 
            src={bra}
            alt="WOLFGNG"
            height={100}
            width={100}
            className="madem"
          />
          </Link>

          <Link 
            to={'/catalogue'}
            className="poli"
            >© 2026 Wolf GNG</Link>
          <Link 
            to={'/terms'}
            className="poli"
            >Terms & Conditions</Link>
          <Link 
            to={'/refund'}
            className="poli"
            >Refund Policy</Link>
          <Link 
            to={'#'}
            className="poli"
            >Powered by BlockSeven</Link>
          
        </ScrollStackItem>

        <section id="socials" className="wawili">

        <div className="quen">
        <a
          href="https://www.instagram.com/wolf_gng5?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          className="text-white text-2xl hover:scale-110 transition-all duration-300"
        >
          <FaInstagram />
        </a>
        </div>

        <div className="quen">
        <a
          href="https://api.whatsapp.com/send?phone=254722541890"
          className="text-white text-2xl hover:scale-110 transition-all duration-300"
        >
          <FaWhatsapp />
        </a>
        </div>

        <div className="quen">
        <a
          href="https://www.tiktok.com/@mrabdiadan?is_from_webapp=1&sender_device=pc"
          className="text-white text-2xl hover:scale-110 transition-all duration-300"
        >
          <FaTiktok />
        </a>
        </div>

      </section>

      </ScrollStack>
    </div>
   

  </div>

  </div>
  )
}

export default HomePage