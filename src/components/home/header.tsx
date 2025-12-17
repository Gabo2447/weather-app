import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-lg px-4 sm:px-16 py-3 sm:py-5 sticky top-0">
      <a href="/" className="flex items-center gap-2 font-semibold sm:text-xl ">
        <img src="sun.webp" alt="sun" className="size-8 sm:size-10" />
        Weather App
      </a>
      <nav className="flex items-center gap-x-4 text-neutral-300">
        <a
          href="https://github.com/gabo2447/weather-app"
          target="_blank"
          type="nooreferer noopener"
        >
          <Button variant={"secondary"} className="button-jump">
            <Github />
          </Button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
