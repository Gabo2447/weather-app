const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-lg px-4 sm:px-16 py-3 sm:py-5 sticky top-0">
      <a href="/" className="flex items-center gap-2 font-semibold sm:text-xl ">
        <img src="sun.webp" alt="sun" className="size-8 sm:size-10" />
        Weather App
      </a>
      <nav className="flex items-center gap-x-4 text-neutral-300">
        <a href="" className="underline-effect">
          Home
        </a>
        <a href="" className="underline-effect">
          About
        </a>
        <a href="" className="underline-effect">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
