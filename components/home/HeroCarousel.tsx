import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import db from "@/utils/db";
const HeroCarousel = async () => {
  const hero = await db.headerPage.findMany();
  return (
    <div className="lg:block hidden">
      <Carousel>
        <CarouselContent>
          {hero.map((img) => (
            <CarouselItem key={img.id}>
              <div className="p-2 border-2 border-gray-500 rounded-lg">
                <Image
                  src={img.imageUrl}
                  width={400}
                  height={400}
                  priority
                  className="object-cover w-full h-[440px] rounded-md"
                  alt="image"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
