export interface Product {
  id: string;
  name: string;
  /** Price in KSh, stored as a plain number (e.g. 7000, not "7,000"). */
  price: number;
  image: string;
  isNew?: boolean;
  /** Link target for the product detail page. */
  href?: string;
}

export interface Category {
  id: string;
  label: string;
  image: string;
  href?: string;
}
