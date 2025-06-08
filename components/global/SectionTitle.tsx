import React from "react";
import { Separator } from "../ui/separator";

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <div className="">
      <h2 className="text-3xl font-medium tracking-wider capitalize mb-8">
        {text}
        <Separator />
      </h2>
    </div>
  );
};

export default SectionTitle;
