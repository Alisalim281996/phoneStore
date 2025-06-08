import React from "react";
import SectionTitle from "../global/SectionTitle";
import ProductGrid from "../products/ProductGrid";
import { fetchFeaturedProducts } from "@/utils/action";
import EmptyList from "../global/EmptyList";

const FeaturedProduct = async () => {
  const phone_Feature = await fetchFeaturedProducts();

  if (phone_Feature.length === 0) return <EmptyList title="Add New Products" />;

  return (
    <section className="pt-24">
      <SectionTitle text="Featured Products" />
      <ProductGrid phone={phone_Feature} />
    </section>
  );
};

export default FeaturedProduct;
