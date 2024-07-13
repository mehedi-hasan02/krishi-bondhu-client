import { GiFallingLeaf } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { PiSignInFill, PiSignOutBold } from "react-icons/pi";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="text-green-500 hover:text-white rounded-md ">
        <Link to="/">Home</Link>
      </li>
      <li className="text-green-500 hover:text-white rounded-md  ">
        <Link to="/about">About</Link>
      </li>
      <li className="text-green-500 hover:text-white rounded-md  ">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="text-green-500 hover:text-white rounded-md  ">
        <Link to="/myCart">My Cart</Link>
      </li>
      <li className="text-green-500 hover:text-white rounded-md  ">
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-white">
      {/* --------------------------------------------- */}
      <div className="navbar flex items-center justify-between">
        <div className=" navbar-start">
          {/* Mobile device dropdown */}
          <details className="dropdown lg:hidden">
            <summary className="btn bg-transparent border-none">
              <GiFallingLeaf className="text-green-700"></GiFallingLeaf>
            </summary>
            <ul className="menu dropdown-content bg-transparent rounded-box z-[1] w-52  ">
              {navLinks}
            </ul>
          </details>
          <Link to="/">
            <img src={logo} className="w-full lg:w-1/3" />
          </Link>
        </div>

        {/* Medium and large device NavLinks */}
        <div className="navbar-center hidden lg:flex justify-end">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
      </div>
      <div className="navbar-end">
        <Link
          className="btn btn-sm text-green-600 bg-inherit border-none"
          to="/login"
        >
          <PiSignInFill className="text-white"></PiSignInFill> Login
        </Link>
        <button className="btn btn-sm text-green-600 bg-inherit border-none">
          <PiSignOutBold className="text-white"></PiSignOutBold> Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
