import React from "react";
import { Button } from "../ui/button";
import { FaHeart } from "react-icons/fa";
const FavoriteToogleButton = ({ phoneId }: { phoneId: string }) => {
  return (
    <Button size={"sm"} variant={"outline"} className=" cursor-pointer">
      <FaHeart />
    </Button>
  );
};

export default FavoriteToogleButton;
