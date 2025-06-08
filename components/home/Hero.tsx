import React, { Suspense } from "react";
import HeroCarousel from "./HeroCarousel";
import { Button } from "../ui/button";
import Link from "next/link";
import { LoadingHeaders } from "../global/LoadingContainer";

const Hero = () => {
  return (
    <section className="grid-cols-1 grid lg:grid-cols-2 gap-24 items-center w-[1200px]">
      <div className="max-w-2xl font-bold text-3xl tracking-tight sm:text-6xl">
        <h1>Discover the Latest Phones at Best Prices</h1>
        <p className="max-w-xl mt-8 text-lg leading-8 text-muted">
          Explore our collection of the latest smartphones, high-performance
          tablets, and premium accessories. From top brands to exclusive new
          releases, find everything you need to stay connected, productive, and
          ahead of the curve — all in one place.
        </p>

        <Button asChild className="mt-10 bg-blue-500 text-white" size={"lg"}>
          <Link href={"/products"}>Our Products</Link>
        </Button>
      </div>

      <Suspense fallback={<LoadingHeaders />}>
        <HeroCarousel />
      </Suspense>
    </section>
  );
};

export default Hero;
