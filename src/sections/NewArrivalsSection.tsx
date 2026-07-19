import Carousel from "../components/Crousel";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../data/products";

const NewArrivalsSection = () => {
  const { products, loading } = useProducts();

  const newArrivals = products.filter((p) => p.isNew);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="section" aria-labelledby="new-arrivals-heading">
      <h2 id="new-arrivals-heading" className="heading">
        New Arrivals
      </h2>

      <Carousel
        items={newArrivals}
        getKey={(product) => product.$id}
        ariaLabel="New arrivals"
        renderItem={(product) => (
          <ProductCard product={product} />
        )}
      />
    </section>
  );
};

export default NewArrivalsSection;