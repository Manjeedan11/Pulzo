import ProductCards from "./ProductCards";
import { Separator } from "@/components/ui/separator";
import Tab from "./Tab";
import { useEffect, useState } from "react";
import SortDropDown from "./SortDropDown";
import { getProducts } from "./lib/api";
import { Skeleton } from "./components/ui/skeleton";

function Products() {
  const [products, setProducts] = useState([]);
  const [isProductsLoading, setIsProductsLoading] = useState(true);
  const [productsError, setProductsError] = useState({
    isError: false,
    message: "",
  });

  const categories = [
    { _id: "ALL", name: "ALL" },
    { _id: "1", name: "Headphones" },
    { _id: "2", name: "Earbuds" },
    { _id: "3", name: "Speakers" },
    { _id: "4", name: "Mobile Phones" },
    { _id: "5", name: "Smart Watches" },
  ];

  const [selectedCategoryId, setSelectedCategoryId] = useState("ALL");
  const [sortOrder, setSortOrder] = useState("ASC");

  const filteredProducts =
    selectedCategoryId === "ALL"
      ? products
      : products.filter((product) => product.categoryId === selectedCategoryId);

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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setProductsError({ isError: true, message: error.message });
      } finally {
        setIsProductsLoading(true);
      }
    };

    fetchProducts();
  }, []);

  if (isProductsLoading) {
    return (
      <section className="py-8 px-4 xl:px-16">
        <h2 className="text-4xl font-bold">Our Top Products</h2>
        <Separator className="mt-2" />
        <div className="mt-4 flex items-center gap-4">
          {categories.map((category) => (
            <Tab
              key={category._id}
              _id={category._id}
              selectedCategoryId={selectedCategoryId}
              name={category.name}
              onTabClick={handleTabClick}
            />
          ))}
          <SortDropDown onSort={handleSort} />
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <Skeleton className="h-80" />
          <Skeleton className="h-80" />
          <Skeleton className="h-80" />
          <Skeleton className="h-80" />
        </div>
      </section>
    );
  }

  if (productsError.isError) {
    return (
      <section className="py-8 px-4 xl:px-16">
        <h2 className="text-4xl font-bold">Our Top Products</h2>
        <Separator className="mt-2" />
        <div className="mt-4 flex items-center gap-4">
          {categories.map((category) => (
            <Tab
              key={category._id}
              _id={category._id}
              selectedCategoryId={selectedCategoryId}
              name={category.name}
              onTabClick={handleTabClick}
            />
          ))}
          <SortDropDown onSort={handleSort} />
        </div>
        <p className="text-red-500">{productsError.message}</p>
      </section>
    );
  }

  return (
    <section className="py-8 px-4 xl:px-16">
      <h2 className="text-4xl font-bold">Our Top Products</h2>
      <Separator className="mt-2" />
      <div className="mt-4 flex items-center gap-4">
        {categories.map((category) => (
          <Tab
            key={category._id}
            _id={category._id}
            selectedCategoryId={selectedCategoryId}
            name={category.name}
            onTabClick={handleTabClick}
          />
        ))}
        <SortDropDown onSort={handleSort} />
      </div>
      <ProductCards products={sortedProducts} />
    </section>
  );
}

export default Products;
