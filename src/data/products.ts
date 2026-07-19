import { useEffect, useState } from "react";
import { Query } from "appwrite";
import {
  databases,
  DATABASE_ID,
  PRODUCT_COLLECTION_ID,
} from "../components/lib/appwrite";

export interface Product {
  $id: string;
  name: string;
  image: string;
  price: number;
  isNew?: boolean;
  featured?: boolean;
  category?: string;
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const res = await databases.listDocuments(
        DATABASE_ID,
        PRODUCT_COLLECTION_ID,
        [Query.orderDesc("$createdAt")]
      );

      setProducts(res.documents as Product[]);
      setLoading(false);
    }

    load();
  }, []);

  return { products, loading };
}
