import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import ProductCards from "./ProductCards";
import Tab from "./Tab";
import SortDropDown from "./SortDropDown";
import { useEffect, useState } from "react";
import { useGetProductsQuery, useGetCategoriesQuery } from "@/lib/api";
import { Button } from "../ui/button";
import { Link } from "react-router";

function Products(props) {
  const {
    data: products,
    isLoading: isProductsLoading,
    isError: isProductsError,
    error: productsError,
  } = useGetProductsQuery();
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
    error: categoriesError,
  } = useGetCategoriesQuery();

  const [selectedCategoryId, setSelectedCategoryId] = useState("ALL");
  const [sortOrder, setSortOrder] = useState("ASC");

  const filteredProducts =
    selectedCategoryId === "ALL"
      ? products || []
      : (products || []).filter(
          (product) => product.categoryId._id === selectedCategoryId
        );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);
    return sortOrder === "ASC" ? priceA - priceB : priceB - priceA;
  });

  const handleTabClick = (_id) => {
    setSelectedCategoryId(_id);
  };

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const limitedProducts = props.limit
    ? sortedProducts.slice(0, props.limit)
    : sortedProducts;

  if (isProductsLoading || isCategoriesLoading) {
    return (
      <section className="py-8 px-4 xl:px-16">
        <h2 className="text-4xl font-bold">Our Top Products</h2>
        <Separator className="mt-2" />
        <div className="mt-4 flex items-center gap-4">
          <Skeleton className="h-80" />
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <Skeleton className="h-80" />
          <Skeleton className="h-80" />
          <Skeleton className="h-80" />
          <Skeleton className="h-80" />
          <Skeleton className="h-80" />
          <Skeleton className="h-80" />
          <Skeleton className="h-80" />
          <Skeleton className="h-80" />
        </div>
      </section>
    );
  }

  if (isProductsError || isCategoriesError) {
    return (
      <section className="py-8 px-4 xl:px-16">
        <h2 className="text-4xl font-bold">Our Top Products</h2>
        <Separator className="mt-2" />
        <div className="mt-4 flex items-center gap-4"></div>
        <p className="text-red-500">{`${productsError.message} ${categoriesError.message}`}</p>
      </section>
    );
  }

  return (
    <section className="py-8 px-4 xl:px-16">
      <div className="mt-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold font-poppins">
            Best Selling Products
          </h1>
          <p className="text-gray-600 font-poppins mt-2">
            Check our best selling products on Pulzo website right now!
          </p>
        </div>
        {props.limit && (
          <div className="flex justify-end mt-4">
            <Button
              asChild
              variant="outline"
              className="font-poppins rounded-[30px] border-[#febc26] text-[#febc26] hover:bg-[#febc26] hover:text-black"
            >
              <Link to="/shop">View All</Link>
            </Button>
          </div>
        )}
      </div>
      <ProductCards products={limitedProducts} />
    </section>
  );
}

export default Products;
