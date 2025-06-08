import { Links } from "@/utils/links";
import { Phone } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToogleButton from "./FavoriteToogleButton";

const ProductGrid = ({ phone }: { phone: Phone[] }) => {
  return (
    <section className="pt-12 grid md:grid-cols-2 gap-4 lg:grid-cols-3">
      {phone.length > 0 &&
        phone.map((phone) => {
          const phoneId = phone.id;
          const dollarAmount = formatCurrency(phone.price);
          return (
            <div className="group relative" key={phone.id}>
              <Link href={`${Links.PRODUCTS.href}/${phoneId}`}>
                <Card className=" transform group-hover:shadow-xl transition-shadow duration-500">
                  <CardContent>
                    <div className="relative h-64 md:h-48 rounded-md overflow-hidden">
                      <Image
                        src={phone.imageUrl}
                        alt=""
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                        className="object-fill"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h2>
                        <span className="text-lg capitalize">
                          {phone.brand} {phone.name}
                        </span>{" "}
                        {phone.storage}-{phone.ram}
                      </h2>
                      <p className="text-muted-foreground mt-2">
                        {dollarAmount}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <div className="absolute top-7 right-7 z-50">
                <FavoriteToogleButton phoneId={phoneId} />
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default ProductGrid;
