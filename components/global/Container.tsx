import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("mx-auto max-w-6xl xl:max-w-7xl px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
