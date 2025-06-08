import ProductsContainer from "@/components/products/ProductsContainer";
import React from "react";


const ProductsPage = async ({ searchParams }: any) => {
  const { layout = "grid" } = (await searchParams) || {};
  const { search } = (await searchParams) || "";

  return (
    <div>
      <ProductsContainer layout={layout} search={search} />
    </div>
  );
};

export default ProductsPage;
