import { FaBars } from "react-icons/fa";
import { dgtronLogo } from "../../assets/images";
import { navLinks } from "../../constants";
import ButtonCta from "./ButtonCta";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={dgtronLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-primaryFont leading-normal text-lg text-slate-gray hover:border-b">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="max-lg:hidden flex justify-center items-center gap-6 leading-normal font-primaryFont text-slate-gray">
          <button>Log in</button>
          <ButtonCta label="Sign up" />
        </div>
        <div className="hidden max-lg:block">
          <button className="hidden max-lg:block">
            <FaBars />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
