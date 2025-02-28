import { useLocation } from "react-router-dom";
import { useGetProductsQuery } from "@/lib/api";
import ProductCards from "@/components/standalone/ProductCards";

function SearchPage() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const category = queryParams.get("category") || "";

  const { data: products, isLoading, isError } = useGetProductsQuery();

  const filteredProducts = Array.isArray(products)
    ? products.filter(
        (product) =>
          product.categoryId?.name
            ?.toLowerCase()
            .includes(category.toLowerCase()) ||
          product.name.toLowerCase().includes(category.toLowerCase())
      )
    : [];

  if (isLoading) {
    return <p>Loading...</p>;
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
