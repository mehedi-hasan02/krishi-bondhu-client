import { GiFallingLeaf } from "react-icons/gi";
import { Link } from "react-router-dom";
import { PiSignInFill, PiSignOutBold } from "react-icons/pi";
import { FaCartArrowDown, FaSearch } from "react-icons/fa";

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
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </>
  );
  return (
    <div className="navbar w-11/12 mx-auto bg-white">
      {/* --------------------------------------------- */}
      <div className="navbar flex items-center justify-between">
        <div className=" navbar-start">
          {/* Mobile device dropdown */}
          <details className="dropdown lg:hidden">
            <summary className="btn bg-transparent border-none">
              <GiFallingLeaf className="text-green-700"></GiFallingLeaf>
            </summary>
            <ul className="menu dropdown-content bg-white rounded-box z-[1] w-52  ">
              {navLinks}
            </ul>
          </details>
          <Link to="/">
            <img
              src="https://i.ibb.co/5RKgH3K/logo.png"
              className="w-full md:w-1/3"
            />
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
          <FaSearch></FaSearch>
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

        <button className="text-black hover:text-yellow-700 flex items-center">
          <FaCartArrowDown></FaCartArrowDown>
        </button>
        <Link
          className=" px-2 py-1 flex justify-center items-center gap-1 rounded-md    border border-green-400 text-green-600 bg-inherit  "
          to="/login"
        >
          <PiSignInFill className="text-green"></PiSignInFill> Login
        </Link>
        <Link
          to="/register"
          className="px-2 py-1 flex justify-center items-center gap-1 rounded-md      border border-green-400 btn-sm text-green-600 bg-inherit text-center"
        >
          <PiSignOutBold className="text-green-600"></PiSignOutBold> Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
