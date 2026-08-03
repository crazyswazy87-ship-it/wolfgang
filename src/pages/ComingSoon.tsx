import "../ComingSoon.css";
import { ArrowRight } from "lucide-react";
import ShinyText from "../components/ShinyText";
import { DATABASE_ID, databases, ID, WAITLIST_COLLECTION_ID } from "../components/lib/appwrite";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import intro from "../../public/assets/wollf.png"

export default function ComingSoon() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  
  const subscribe = async (e: React.FormEvent) => {
  e.preventDefault();

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

    toast.success("Welcome to the pack 🐺");

    setEmail("");

    // Redirect after a short delay so the toast is visible
    setTimeout(() => {
      navigate("/home");
    }, 1200);

  } catch (error) {
    console.error(error);
    toast.error("Something went wrong try using another email");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="coming-page">

      <div className="b7-hero">
        <img 
          src={intro}
          alt="WOLF GNG"
          className="indaa"
        />
      </div>

      <section className="content">
        <h1>OPENING SOON</h1>

         <ShinyText
            text="Be the first to know when we launch."
            speed={3}
            delay={0}
            color="#000"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover
            disabled={false}
            className="mental"
          />


        <form className="email-form" onSubmit={subscribe}>
        <input
          type="email"
          required
          disabled={loading}
          className="mcfullsto"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="btn-gra bund"
        >
          {loading ? "Redirecting..." : <ArrowRight size={18} />}
        </button>
      </form>
      </section>
    </div>
  );
}