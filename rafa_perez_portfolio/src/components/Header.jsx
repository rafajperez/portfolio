const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full h-20 flex items-center z-40 
    bg-gradient-to-b from-zinc-900 mask-b-to-zinc-900/0"
    >
      <div
        className="max-w-screen-2xl w-full mx-auto px-4 
        flex justify-between items-center 
        md:px-6 md:grid md:grid-cols[1fr,3fr,1fr]"
      >
        <h1>
          <a href="/" classname="logo">
            <img
              src="/images/logo.svg"
              width={40}
              height={40}
              alt="Rafa Perez"
            />
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button
            className="w-10 h10 grid place-items-center bg-zinc-50/10
            rounded-xl ring-inset ring-1 md:hidden"
            onClick={null}
          >
            <span className="material-symbols-rounded">menu</span>
          </button>
          Navbar
        </div>
        <a href="#contact" className="">
          Contate-me
        </a>
      </div>
    </header>
  );
};

export default Header;
