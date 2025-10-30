import { Link } from "react-router-dom";
import { PiSignInFill, PiSignOutBold } from "react-icons/pi";
import { FaCartArrowDown, FaSearch } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { users, logOut } = useContext(AuthContext);
  
  const navLinks = (
    <>
      <li className="text-green-600 hover:text-yellow-500 rounded-md transition-colors duration-300">
        <Link to="/" className="font-medium">Home</Link>
      </li>
      <li className="text-green-600 hover:text-yellow-500 rounded-md transition-colors duration-300">
        <Link to="/about" className="font-medium">About</Link>
      </li>
      <li className="text-green-600 hover:text-yellow-500 rounded-md transition-colors duration-300">
        <Link to="/roadmap" className="font-medium">Roadmap</Link>
      </li>
      <li className="text-green-600 hover:text-yellow-500 rounded-md transition-colors duration-300">
        <Link to="/contact" className="font-medium">Contact</Link>
      </li>
      <li className="text-green-600 hover:text-yellow-500 rounded-md transition-colors duration-300">
        <Link to="/dashboard" className="font-medium">Dashboard</Link>
      </li>
      <li className="text-green-600 hover:text-yellow-500 rounded-md transition-colors duration-300">
        <Link to="/products/add" className="font-medium">Add Product</Link>
      </li>
    </>
  );
  
  return (
    <div className="navbar w-full mx-auto bg-white shadow-md sticky top-0 z-50 animate__animated animate__fadeInDown">
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <div className="navbar-start flex items-center">
          {/* Mobile device drawer */}
          <div className="drawer lg:hidden mr-5">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              <div className="navbar w-full">
                <div className="flex-none lg:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost mr-10 text-green-600"
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
                    {navLinks}
                  </ul>
                </div>
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-3"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 min-h-full w-80 p-4">
                {navLinks}
              </ul>
            </div>
          </div>
          
          <Link to="/" className="flex items-center">
            <img
              src="https://i.ibb.co/5RKgH3K/logo.png"
              className="w-32 md:w-40 mx-5 transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* Medium and large device NavLinks */}
        <div className="navbar-center hidden lg:flex justify-end">
          <ul className="menu menu-horizontal px-1 space-x-2">
            {navLinks}
          </ul>
        </div>
      </div>
      
      <div className="navbar-end flex items-center gap-4">
        {/* search modal */}
        <button
          className="text-green-600 hover:text-yellow-600 flex items-center transition-colors duration-300"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          <FaSearch className="text-xl" />
        </button>
        
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box flex flex-col gap-3">
            <h3 className="font-bold text-lg">Search Products</h3>
            <form method="dialog">
              <input
                className="p-3 bg-gray-100 text-gray-800 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                type="search"
                name="search"
                placeholder="Enter product name..."
              />
              <div className="flex justify-between mt-3">
                <button className="btn bg-green-500 hover:bg-green-600 text-white border-none">Search</button>
                <button className="btn btn-warning text-white">Close</button>
              </div>
            </form>
          </div>
        </dialog>

        <button className="text-green-600 hover:text-yellow-600 flex items-center transition-colors duration-300">
          <Link to="/myCart">
            <FaCartArrowDown className="text-xl" />
          </Link>
        </button>
        
        {users ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="avatar online">
              <div className="w-10 rounded-full ring ring-green-500 ring-offset-2">
                <img src={users.photoURL || "https://i.ibb.co/4FJ2nWy/profile.png"} alt="User" />
              </div>
            </div>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-3">
              <li><Link to="/profile" className="hover:bg-green-100">Profile</Link></li>
              <li><Link to="/dashboard" className="hover:bg-green-100">Dashboard</Link></li>
              <li>
                <button 
                  onClick={logOut}
                  className="text-red-500 hover:bg-red-100"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              className="px-4 py-2 flex justify-center items-center gap-1 rounded-md border border-green-500 text-green-600 bg-inherit hover:bg-green-50 transition-colors duration-300 font-medium"
              to="/login"
            >
              <PiSignInFill className="text-green" /> Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 flex justify-center items-center gap-1 rounded-md border border-green-500 bg-green-500 text-white hover:bg-green-600 transition-colors duration-300 font-medium"
            >
              <PiSignOutBold className="text-white" /> SignUp
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;