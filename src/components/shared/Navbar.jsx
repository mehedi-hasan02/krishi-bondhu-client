import { GiFallingLeaf } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { PiSignInFill, PiSignOutBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="text-green-500 hover:text-yellow-500 rounded-md ">
        <Link to="/">Home</Link>
      </li>
      <li className="text-green-500 hover:text-yellow-500 rounded-md  ">
        <Link to="/about">About</Link>
      </li>
      <li className="text-green-500 hover:text-yellow-500 rounded-md  ">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="text-green-500 hover:text-yellow-500 rounded-md  ">
        <Link to="/myCart">My Cart</Link>
      </li>
      <li className="text-green-500 hover:text-yellow-500 rounded-md  ">
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
      <div className="navbar-end flex items-center gap-4">
        {/* search modal */}
        <button
          className=" text-black hover:text-yellow-700 flex items-center"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          <CiSearch></CiSearch>
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
          <div className="modal-box flex flex-col gap-3">
            <h3 className="font-bold text-lg">Search your Keyword</h3>

            <form method="dialog">
              <input
                className="p-3 bg-black text-white w-full rounded-md"
                type="search"
                name="search"
              />
              <div className="flex justify-between mt-3">
                <button className="btn btn-success text-white">Search</button>

                <button className="btn btn-warning">X</button>
              </div>
            </form>
          </div>
        </dialog>

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
