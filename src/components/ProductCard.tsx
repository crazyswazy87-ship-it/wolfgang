import type { Product } from "../data/types";
import BlurImage from "./shared/BlurImage";


export interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
  onToggleWishlist?: (product: Product) => void;
  onCompare?: (product: Product) => void;
}

function formatPrice(price: number): string {
  return `KSh ${price.toLocaleString("en-KE")}`;
}

export function ProductCard({
  product,
  onAddToCart,
  onQuickView,
  onToggleWishlist,
  onCompare,
}: ProductCardProps) {
  return (
    <a
      className="cadi"
      href={product.href ?? "/wolfgng"}
      aria-label={`${product.name} — ${formatPrice(product.price)}`}
    >
      <div className="imageWrap">
        <BlurImage
          src={product.image}
          alt={product.name}
          className="w-full h-full rounded-xl"
        />

        {product.isNew && <span className="badge">New</span>}

        <div className="actions">
          <button
            type="button"
            className="actionBtn"
            aria-label="Add to cart"
            onClick={(e) => {
              e.preventDefault();
              onAddToCart?.(product);
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
            </svg>
          </button>

          <button
            type="button"
            className="actionBtn"
            aria-label="Quick view"
            onClick={(e) => {
              e.preventDefault();
              onQuickView?.(product);
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </button>

          <button
            type="button"
            className="actionBtn"
            aria-label="Add to wishlist"
            onClick={(e) => {
              e.preventDefault();
              onToggleWishlist?.(product);
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
            </svg>
          </button>

          <button
            type="button"
            className="actionBtn"
            aria-label="Compare"
            onClick={(e) => {
              e.preventDefault();
              onCompare?.(product);
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3l4 4-4 4" />
              <path d="M21 7H9" />
              <path d="M7 21l-4-4 4-4" />
              <path d="M3 17h12" />
            </svg>
          </button>
        </div>
      </div>

      <div className="info">
        <h3 className="namme">{product.name}</h3>
        <span className="pricce">{formatPrice(product.price)}</span>
      </div>
    </a>
  );
}

export default ProductCard;
