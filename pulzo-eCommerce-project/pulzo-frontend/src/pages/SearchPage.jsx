import { useLocation } from "react-router-dom";
import { useGetProductsQuery } from "@/lib/api";
import ProductCards from "@/components/standalone/ProductCards";
import { useState, useEffect } from "react";

function SearchPage() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const category = queryParams.get("category") || "";

  const { data: products, isLoading, isError } = useGetProductsQuery();

  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingState(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = Array.isArray(products)
    ? products.filter(
        (product) =>
          product.categoryId?.name
            ?.toLowerCase()
            .includes(category.toLowerCase()) ||
          product.name.toLowerCase().includes(category.toLowerCase())
      )
    : [];

  if (loadingState || isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="h-16 w-16 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
          <p className="text-gray-500 dark:text-gray-400 font-poppins">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  if (isError) {
    return <p>Error loading products.</p>;
  }

  return (
    <section className="py-8 px-4 xl:px-16 mt-32">
      <h2 className="text-4xl font-bold">Search Results for "{category}"</h2>
      <div className="mt-4">
        {filteredProducts.length > 0 ? (
          <ProductCards products={filteredProducts} />
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </section>
  );
}

export default SearchPage;
