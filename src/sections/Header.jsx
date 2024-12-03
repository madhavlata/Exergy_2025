import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ title, to, isExternal }) => {
    if (isExternal) {
      return (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
        >
          {title}
        </a>
      );
    }

    return (
      <Link
        to={to} // Use react-router-dom's Link for navigation
        onClick={() => setIsOpen(false)}
        className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
      >
        {title}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10 bg-black-100 backdrop-blur-[8px] transition-all duration-500 max-lg:py-4 overflow-x-hidden">
      <div className="container mx-auto flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2" href="/">
          <img
            src="/images/exergylogo.png"
            alt="logo"
            className="w-auto h-auto max-h-14"
          />
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex flex-wrap justify-between max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="Events" to="/events" />
                  <div className="dot" />
                  <NavLink title="Competitions" to="/competitions" />
                  <div className="dot" />
                  <NavLink title="Schedule" to="/schedule" />
                </li>

                <li className="nav-logo">
                  <a href="/" className="max-lg:hidden">
                    <img
                      src="/images/exergylogo.png"
                      alt="logo"
                      className="w-auto h-auto max-h-14"
                    />
                  </a>
                </li>

                <li className="nav-li">
                  <NavLink title="Gallery" to="/gallery" />
                  <div className="dot" />
                  <NavLink title="Team" to="/team" />
                  <div className="dot" />
                  <NavLink
                    title="Campus Ambassador"
                    to="https://unstop.com/internships/campus-ambassador-internship-iit-kanpur-1217973"
                    isExternal
                  />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-full h-auto translate-x-[-50%] -translate-y-1/2 rotate-90 max-w-screen-md">
              <img
                src="/images/bg-outlines.svg"
                alt="outline"
                className="relative z-2 w-full"
              />
              <img
                src="/images/bg-outlines-fill.png"
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
