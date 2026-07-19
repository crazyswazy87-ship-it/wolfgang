
import CategoryCard from "../components/CategoryCard";
import { useProducts } from "../data/products";

export default function CategoriesSection() {
  const { products, loading } = useProducts();

  if (loading) return <p>Loading...</p>;

  const categories = [
    ...new Set(products.map((p) => p.category))
  ].map((category) => ({
    id: category!,
    label: category!,
    image: products.find((p) => p.category === category)?.image ?? "",
  }));

  return (
    <section className="section" aria-labelledby="categories-heading">
      <h2 id="categories-heading" className="heading">
        Categories
      </h2>

      <div className="grid">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}