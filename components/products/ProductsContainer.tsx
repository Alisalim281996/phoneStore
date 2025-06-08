import { fetchAllProducts } from "@/utils/action";
import React from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";
import Link from "next/link";
import { Links } from "@/utils/links";
import EmptyList from "../global/EmptyList";
import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";

const ProductsContainer = async ({
  layout,
  search,
}: {
  layout: string;
  search: any;
}) => {
  const allProduct = await fetchAllProducts({search});
  const lengthProduct = allProduct.length;
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <>
      <section>
        <div className="flex justify-between items-center">
          <h4>
            {lengthProduct} product{lengthProduct > 0 ? "s" : ""}
          </h4>
          <div className="flex gap-4">
            <Button
              asChild
              variant={layout === "grid" ? "default" : "outline"}
              size={"icon"}
            >
              <Link href={`${Links.PRODUCTS.href}?layout=grid${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              asChild
              variant={layout === "list" ? "default" : "outline"}
              size={"icon"}
            >
              <Link href={`${Links.PRODUCTS.href}?layout=list${searchTerm}`}>
                <LuLayoutList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator />
      </section>
      <section>
        {allProduct.length === 0 ? (
          <EmptyList title="Sorry, No product Matched Your Search" />
        ) : layout === "grid" ? (
          <ProductGrid phone={allProduct} />
        ) : (
          <ProductList phone={allProduct} />
        )}
      </section>
    </>
  );
};

export default ProductsContainer;
