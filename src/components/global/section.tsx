import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Section = ({ children, className }: Props) => {
  return (
    <section className={cn("max-w-full sm:max-w-360  mx-auto", `${className}`)}>
      {children}
    </section>
  );
};

export default Section;
