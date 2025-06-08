import React from "react";
import { Button } from "../ui/button";

const AddToCart = ({ phoneId }: { phoneId: string }) => {
  return (
    <Button className="mt-8 capitalize cursor-pointer" size={"lg"}>
      Add to Cart
    </Button>
  );
};

export default AddToCart;
