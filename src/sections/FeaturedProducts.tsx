import Carousel from "../components/Crousel";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../data/products";
import type { Product } from "../data/types";

export interface FeaturedProductsSectionProps {
  onAddToCart?: (product: Product) => void;
}

export default function FeaturedProductsSection({
  onAddToCart,
}: FeaturedProductsSectionProps) {
  const { products, loading } = useProducts();

  const featuredProducts = products.filter((p) => p.featured);

  if (loading) {
    return (
      <section className="section">
        <h2 className="heading">Our Featured Products</h2>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className="section" aria-labelledby="featured-heading">
      <h2 id="featured-heading" className="heading">
        Our Featured Products
      </h2>

      <Carousel
        items={featuredProducts}
        getKey={(product) => product.$id}
        ariaLabel="Featured products"
        renderItem={(product) => (
          <ProductCard product={product} onAddToCart={onAddToCart} />
        )}
      />
    </section>
  );
}