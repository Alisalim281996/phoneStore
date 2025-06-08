import { Links } from "@/utils/links";
import { Phone } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToogleButton from "./FavoriteToogleButton";

const ProductList = ({ phone }: { phone: Phone[] }) => {
  return (
    <section className="mt-12 grid gap-y-8">
      {phone.map((phone) => {
        const priceFormat = formatCurrency(phone.price);
        return (
          <div className="relative group" key={phone.id}>
            <Link href={`${Links.PRODUCTS.href}/id`}>
              <Card className="transform group-hover:shadow-lg transition-shadow duration-500">
                <CardContent className="p-8 gap-y-8 grid md:grid-cols-3">
                  <div className="relative h-64 md:h-48 w-48">
                    <Image
                      src={phone.imageUrl}
                      alt=""
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      fill
                      className="object-fill"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl capitalize font-semibold">
                      {phone.name} {phone.brand}
                    </h2>
                    <p className="pt-2">Storage : {phone.storage}</p>
                    <p className="pt-2">Ram : {phone.ram}</p>
                    <p className="pt-2">Colors : {phone.colors}</p>
                    <p className="pt-2">Processor : {phone.processor}</p>
                    <p className="pt-2">BatterySize : {phone.batterySize}</p>
                  </div>
                  <div className="flex flex-col justify-between items-end max-md:flex-row max-sm:items-center">
                    {priceFormat}
                    <div>
                      <FavoriteToogleButton phoneId={phone.id} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default ProductList;
