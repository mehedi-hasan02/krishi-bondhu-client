import { Link } from "react-router-dom";
import { PiSignInFill, PiSignOutBold } from "react-icons/pi";
import { FaCartArrowDown, FaSearch } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { users, logOut } = useContext(AuthContext);
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
      <li className="text-green-500 hover:text-yellow-500 rounded-md  ">
        <Link to="/products/add">Add New Product</Link>
      </li>
    </>
  );
  return (
    <div className="navbar w-11/12 mx-auto bg-white">
      {/* --------------------------------------------- */}
      <div className="navbar flex items-center justify-between">
        <div className=" navbar-start">
          {/* Mobile device drawer */}
          <div className="drawer lg:hidden mr-5">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              {/* Navbar */}
              <div className="navbar  w-full">
                <div className="flex-none lg:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost mr-10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-6 w-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
                <div className="mx-2 flex-1 px-2"></div>
                <div className="hidden flex-none lg:block">
                  <ul className="menu menu-horizontal">
                    {/* Navbar menu content here */}
                    {navLinks}
                  </ul>
                </div>
              </div>
              {/* Page content here */}
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-3"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 min-h-full w-80 p-4">
                {/* Sidebar content here */}
                {navLinks}
              </ul>
            </div>
          </div>
          <Link to="/">
            <img
              src="https://i.ibb.co/5RKgH3K/logo.png"
              className="w-full md:w-1/3 mx-5"
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
          <Link to="/myCart">
            <FaCartArrowDown></FaCartArrowDown>
          </Link>
        </button>
        {users ? (
          <button
            onClick={logOut}
            className="px-2 py-1 flex justify-center items-center gap-1 rounded-md    border border-green-400 text-green-600 bg-inherit"
          >
            Logout
          </button>
        ) : (
          <div className="flex items-center gap-3">
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
              <PiSignOutBold className="text-green-600"></PiSignOutBold> SignUp
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
