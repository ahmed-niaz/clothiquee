import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  ArrowBigLeftDash,
  BaggageClaim,
  PanelsTopLeft,
  Search,
  UserRoundPen,
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "horizontal" : "uppercase")}
      >
        home
      </NavLink>
      <NavLink
        to="/collection"
        className={({ isActive }) => (isActive ? "horizontal" : "uppercase")}
      >
        collection
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "horizontal" : "uppercase")}
      >
        about
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "horizontal" : "uppercase")}
      >
        contact
      </NavLink>
    </>
  );
  return (
    <main className="flex items-center justify-between py-5 font-medium">
      <img src={logo} className="w-36" alt="Logo" />
      <ul className="sm:flex gap-5 text-sm hidden">{links}</ul>
      <div className="flex items-center gap-6 cursor-pointer ">
        <Search color="#000000" size={24} />
        <div className="group relative">
          <UserRoundPen color="#000000" size={24} />
          <div className="drop-down">
            <div className="drop-down-menu">
              <p className="hover:text-blue">Profile</p>
              <p className="hover:text-blue">Orders</p>
              <p className="hover:text-blue">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <BaggageClaim color="#000000" size={24} />
          <p className="absolute right-[-5px] bottom-[-1px] w-4 text-center leading-4 bg-blue text-white aspect-square rounded-full text-[8px]">
            12
          </p>
        </Link>
        <PanelsTopLeft
          onClick={() => setIsVisible(true)}
          color="#000000"
          size={24}
          className="sm:hidden cursor-pointer"
        />
      </div>
      {/* sidebar menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          isVisible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-blue ">
          <div
            onClick={() => setIsVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <div className="flex gap-4 items-center justify-center">
              <ArrowBigLeftDash color="#010f80" size={24} />
              <span className="-ml-4 text-center">Back</span>
            </div>
          </div>
          <NavLink
            onClick={() => setIsVisible(false)}
            to="/"
            className="py-2 pl-6 border uppercase"
          >
            home
          </NavLink>
          <NavLink
            onClick={() => setIsVisible(false)}
            to="/about"
            className="py-2 pl-6 border uppercase"
          >
            about
          </NavLink>
          <NavLink
            onClick={() => setIsVisible(false)}
            to="/collection"
            className="py-2 pl-6 border uppercase"
          >
            collection
          </NavLink>
          <NavLink
            onClick={() => setIsVisible(false)}
            to="/contact"
            className="py-2 pl-6 border uppercase"
          >
            contact
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
