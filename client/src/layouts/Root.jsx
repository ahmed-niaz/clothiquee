import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Root = () => {
  return (
    <main className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] font-mono">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default Root;
