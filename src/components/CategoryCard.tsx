import type { Category } from "../data/types";


export interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <a className="cardi" href={category.href ?? "/catalogue"}>
      <img
        className="image"
        src={category.image}
        alt={category.label}
        loading="lazy"
      />
      <div className="scrim" />
      <span className="label">{category.label}</span>
    </a>
  );
}

export default CategoryCard;
