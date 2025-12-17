import Header from "@/components/home/header";
import Footer from "@/components/home/footer";
import Section from "@/components/global/section";
import type React from "react";

interface Props {
  children: React.ReactNode;
}

const Home = ({ children }: Props) => {
  return (
    <Section className="flex flex-col min-h-[101dvh] min-w-full">
      <Header />
      <main className="flex-1 px-4 sm:px-16 my-8">{children}</main>
      <Footer />
    </Section>
  );
};

export default Home;
