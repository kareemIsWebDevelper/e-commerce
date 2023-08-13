import { useLocation } from "react-router-dom";
import { getProducts } from "../lib/api/product";
import { useEffect, useState } from "react";
import AppNav from "../components/AppNav";
import { ProductCard } from "../components/cards/ProductCard";
import { Products } from "../lib/types";

export const AllProducts = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryId = queryParams.get("id");
  const [products, setProducts] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

 useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);

      try {
        const data = await getProducts();

        const filteredProducts = data.filter(
          (product) => product.category._id === categoryId
        );

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (categoryId) {
      void fetchProducts();
    }
  }, [categoryId]);

  return (
    <>
      <AppNav />
      <main className={"mt-16"}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ProductCard products={products} />
        )}
      </main>
    </>
  );
};