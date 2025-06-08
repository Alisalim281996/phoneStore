import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Links } from "@/utils/links";
import { LuShoppingCart } from "react-icons/lu";
const CartButton = () => {
  return (
    <Button
      asChild
      variant={"outline"}
      size={"icon"}
      className="flex justify-center items-center relative"
    >
      <Link href={Links.CART.href}>
        <LuShoppingCart />
        <span className="-top-3 absolute -right-3 bg-blue-500 text-white w-6 h-6 rounded-full flex justify-center items-center">
          1
        </span>
      </Link>
    </Button>
  );
};

export default CartButton;
