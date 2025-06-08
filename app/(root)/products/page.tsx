import ProductsContainer from "@/components/products/ProductsContainer";
import React from "react";

interface ProductPageProps {
  searchParams: {
    layout?: string;
    search?: string;
  };
}

const ProductsPage = async ({ searchParams }: ProductPageProps) => {
  const { layout = "grid" } = (await searchParams) || {};
  const { search } = (await searchParams) || "";

  return (
    <div>
      <ProductsContainer layout={layout} search={search} />
    </div>
  );
};

export default ProductsPage;
