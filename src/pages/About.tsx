import { motion } from "framer-motion";
import RotatingText from "../components/RotatingText"
import ScrollFloat from "../components/ScrollFloat"
import ScrollReveal from "../components/ScrollReveal"
import Shuffle from "../components/Shuffle"
import PillNav from "../components/PillNav";
import wolf from "../../public/assets/wolff.png"


const About = () => {
  return (
    <div className="home-cony">
      {/*Pill Nav*/}
      <PillNav
        logo={wolf}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Collections', href: '/wolfgng' },
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
      
     {/*Scroll Float */}
    <ScrollFloat
      animationDuration={9}
      ease='back.inOut(2)'
      scrollStart='center bottom+=50%'
      scrollEnd='bottom bottom-=40%'
      stagger={0.03}
      containerClassName="bdady"
    >
      About Us
    </ScrollFloat>

  <div className="genje"> 
    
    <section id="about">
      <div className="sana">
        <div className="wild">
          {/*Scroll Reveal */}
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={4}
            blurStrength={1}
          >
          We are more than just a clothing brand.
          It's built for people who choose discipline
            over excuses, growth over comfort,
            and consistency over motivation
          </ScrollReveal>

          <motion.div className="dream">
            <Shuffle
              text="GRIND"
              shuffleDirection="up"
              duration={0.25}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power2.out"
              stagger={0.09}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
              className="tag-hero"
            />

            <Shuffle
              text="DAILY.NO"
              shuffleDirection="up"
              duration={0.25}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power2.out"
              stagger={0.09}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
              className="tag-hero"
            />

            <Shuffle
              text="EXCUSES"
              shuffleDirection="up"
              duration={0.25}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power2.out"
              stagger={0.09}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
              className="tag-hero"
            />
    
          </motion.div>
        </div>

        <div className="wild">

          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={4}
            blurStrength={1}
          >
          The wolf represents strength,
          resilience, and leadership, while
          the gang represents a community of 
          like-minded individuals pushing 
          each other to become their best selves
          </ScrollReveal>

          <motion.div className="dream">
            <Shuffle
              text="PACK"
              shuffleDirection="up"
              duration={0.25}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power2.out"
              stagger={0.09}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
              className="tag-hero"
            />

            <Shuffle
              text="305"
              shuffleDirection="up"
              duration={0.25}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power2.out"
              stagger={0.09}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
              className="tag-hero"
            />
          
          </motion.div>
        </div>

      </div>
    </section>

    <div 
      className="jenita">
      {/*Rotate Text */}
      <div className="katanisha">
        Our core values
      </div>
      <RotatingText
        texts={['Growth', 'Resilience', 'Dicipline' , 'Community']}
        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        staggerFrom="last"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
        splitBy="characters"
        auto
        loop={false}
        className="safisha"
      />
    </div>
    </div>


    </div>
  )
}

export default About