import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
  const { user, handleLogOut } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink
          className="text-gray-800 font-medium mr-2 px-4 py-2 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-all duration-200"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-gray-800  mr-2 font-medium px-4 py-2 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-all duration-200"
          to="/MyApplications"
        >
          My Applications
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-gray-800 font-medium mr-2 px-4 py-2 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-all duration-200"
          to="/addJob"
        >
          Add Job
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-gray-800 font-medium mr-2 px-4 py-2 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-all duration-200"
          to="/myPostedJob"
        >
          My Posted Job
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <div className="w-8">
              <img
                src="https://i.ibb.co.com/YcnTGH5/office-suitcase-profession-work-job-briefcase-business-icon-232665.png"
                alt=""
              />
            </div>
            Job-Portal
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end"></div>
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex="0"
              role="button"
              className="btn btn-ghost btn-circle avatar hover:scale-110 transition-all duration-300"
            >
              <div className="w-10 rounded-full border-2 border-blue-500">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="Profile" />
                ) : (
                  <img
                    alt="Default Profile"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                )}
              </div>
            </div>

            <div
              className="tooltip tooltip-bottom"
              data-tip={user.displayName || "User"}
            ></div>

            <ul
              tabIndex="0"
              className="menu menu-sm z-[1000] absolute dropdown-content bg-white rounded-lg mt-3 w-48 p-2 shadow-lg transition-all duration-300"
            >
              <li className="font-semibold">{user.displayName}</li>
              <li className="font-semibold">
                <button
                  onClick={handleLogOut}
                  className="w-full py-2 px-4 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="space-x-3 flex">
            <Link
              to="/auth/login"
              className="py-2 px-4 text-sm font-medium text-gray-800 bg-yellow-400 rounded-lg shadow-md border border-yellow-500 hover:bg-yellow-500 hover:text-white transition-all duration-200"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-md border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all duration-200"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
