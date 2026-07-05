import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import {
  DATABASE_ID,
  databases,
  ID,
  PRODUCT_BUCKET_ID,
  PRODUCT_COLLECTION_ID,
  storage,
} from "../components/lib/appwrite";

import { Query } from "appwrite";

import wolf from "../../public/assets/wolff.png"
import abt from "../../public/assets/wolff.png"
import danski from "../../public/assets/cart.png"
import PillNav from "../components/PillNav";
import ShinyText from "../components/ShinyText";


interface Product {
  $id: string;
  $createdAt: string;
  name: string;
  image: string;
  price: string;
}


export default function PostForm() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const [merchs, setMerchs] = useState<Product[]>([]);


  const createPost = async () => {
  if (!name || !price || !image) {
    toast.error("Fill in all fields");
    return;
  }

  try {
    setLoading(true);

    const uploaded = await storage.createFile(
      PRODUCT_BUCKET_ID,
      ID.unique(),
      image
    );

    const imageUrl = storage.getFileView(
      PRODUCT_BUCKET_ID,
      uploaded.$id
    );

    console.log(imageUrl.toString());

    await databases.createDocument(
      DATABASE_ID,
      PRODUCT_COLLECTION_ID,
      ID.unique(),
      {
        name,
        image: imageUrl.toString(),
        price,
      }
    );

    toast.success("Product Added");

    setName("");
    setPrice("");
    setImage(null);

    await loadProducts();
  } catch (err) {
    console.error(err);
    toast.error("Failed to create product");
  } finally {
    setLoading(false);
  }
};

    const loadProducts = async () => {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        PRODUCT_COLLECTION_ID,
        [Query.orderDesc("$createdAt")]
      );
  
      setMerchs(response.documents as Product[]);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load products");
    }
  };

  useEffect(() => {
    void loadProducts();
  }, []);
  
  const deleteProduct = async (id: string) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await databases.deleteDocument(
        DATABASE_ID,
        PRODUCT_COLLECTION_ID,
        id
      );

      toast.success("Product deleted");

      await loadProducts();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete product");
    }
  };

  return (
    <div className="home-cony">
      {/*Pill Nav*/}
      <PillNav
        logo={wolf}
        logoAlt="Company Logo"
        items={[
          { label: 'About', href: '/wolfgng' },
          { label: 'Waitlist', href: '/andime' },
          { label: 'Dashboard', href: '/post' },
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
        className="koima"
      />
      <h1 className="gethaa">WolfGNG Merchendise Dashboard</h1>

      <div className="seer">

        <h2>Add Product</h2>

        <input
          className="seaker"
          placeholder="Product Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          className="seaker"
          placeholder="Price"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          className="seaker"
          onChange={(e)=>{
            if(e.target.files){
              setImage(e.target.files[0]);
            }
          }}
        />

        <button
          className="btn-gradd"
          onClick={createPost}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Create Product"}
        </button>

      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h3>Total Products: {merchs.length}</h3>

        <button
          className="btn-gradd"
          onClick={() => void loadProducts()}
        >
          Refresh
        </button>
      </div>


       <div className="missed">
          {merchs.map((merch, i) => (
            <div className={`sauti item-${i}`} key={merch.$id}>
              
              <img 
                src={merch.image}
                alt={merch.name}
                className="kanye"
              />

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
                <Link 
                    to={'/wolfgng'} 
                    className="pain">
                    <img 
                      src={abt}
                      alt="wolfgng"
                      height={30}
                      width={30}
                      className="waba"
                    />
                </Link>

                <button
                  className="shugli"
                  onClick={() => deleteProduct(merch.$id)}
                >
                  Remove

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
        </div>
    </div>
  );
}