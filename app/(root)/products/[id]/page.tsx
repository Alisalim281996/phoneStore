import { fetchSingleProduct } from "@/utils/action";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import FavoriteToogleButton from "@/components/products/FavoriteToogleButton";
import AddToCart from "@/components/single-product/AddToCart";
import BreadCrumb from "@/components/single-product/BreadCrumb";
import ProductRaiting from "@/components/single-product/ProductRaiting";

type ProductDetailsPageProps = {
  params: {
    id: any;
  };
};

const ProductDetails = async ({ params }: ProductDetailsPageProps) => {
  const product = await fetchSingleProduct(params.id);

  return (
    <section>
      <BreadCrumb name={product.name} />
      <div className="grid lg:grid-cols-2 mt-6 gap-y-6 lg:gap-x-16">
        <div className="relative h-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <div className="flex items-center gap-x-8">
            <h2 className="text-3xl capitalize font-bold">
              {product.name} {product.brand}
            </h2>
            <FavoriteToogleButton phoneId={product.id} />
          </div>
          <ProductRaiting phoneId={product.id} />

          <h4 className="text-md p-1 mt-3 rounded-md bg-muted inline-block cursor-pointer">
            {formatCurrency(product.price)}
          </h4>
          <div>
            <p className="pt-2">Processor : {product.processor}</p>
            <p className="pt-2">Display Size : {product.displaySize}</p>
            <p className="pt-2">Storage : {product.storage}</p>
            <p className="pt-2">Ram : {product.ram}</p>
            <p className="pt-2">Front Camera : {product.frontCamera}</p>
            <p className="pt-2">Back Camera : {product.backCamera}</p>
            <p className="pt-2">Battery Size : {product.batterySize}</p>
            <p className="pt-2">Colors : {product.colors}</p>
          </div>
          <AddToCart phoneId={product.id} />
        </div>
      </div>
      <div className="h-40"></div>
    </section>
  );
};

export default ProductDetails;
