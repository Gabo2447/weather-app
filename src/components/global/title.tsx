import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  as?: React.ElementType;
  props?: React.HTMLAttributes<HTMLTitleElement>;
  children?: React.ReactNode;
  className?: string;
}

const Title = ({ as, props, children, className }: Props) => {
  const Component = as || "h1";
  return (
    <Component
      {...props}
      className={cn(
        "text-3xl sm:text-6xl font-semibold text-center text-wrap",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Title;
