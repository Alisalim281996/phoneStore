import { cn } from "@/lib/utils";
import React from "react";

interface EmptyListProps {
  title: string;
  className?: string;
}

const EmptyList = ({ title, className }: EmptyListProps) => {
  return <h2 className={cn("text-xl", className)}>{title}</h2>;
};

export default EmptyList;
