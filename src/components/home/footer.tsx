const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 px-4 sm:px-16 py-4 flex items-center text-center justify-center opacity-90">
      <small>
        &copy; {new Date().getFullYear()} Weather App. All rights reserved.
        <br />
        <span>Developed by </span>
        <a
          href="https://github.com/gabo2447"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline decoration-wavy"
        >
          Gabo2447
        </a>
      </small>
    </footer>
  );
};

export default Footer;
