import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../components/AuthProvider/AuthProvider";
import logo from "../../../assets/library_logo.png";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
  const { user, LogOut, loading } = useContext(AuthContext);

  //Theme state management
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  //dropdown menu state management
  const [dropdown, setDropdown] = useState(false);

  // Theme toggle effect
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else setTheme("light");
  };
  if (loading) {
    return <span className="loading loading-spinner text-error"></span>;
  }

  const handleLogout = () => {
    LogOut()
      .then(() => {
        console.log("Logged Out");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // Nav menu content
  const navLink = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "btn text-sm text-texts border-none  bg-secondary px-5 py-3"
            : "btn text-sm  px-5 py-3 text-white btn-ghost"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "btn text-sm text-texts border-none  bg-secondary px-5 py-3"
            : "btn text-sm  px-5 py-3 text-white btn-ghost"
        }
        to="/addBook"
      >
        {" "}
        Add Book
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "btn text-sm border-none text-texts  bg-secondary px-5 py-3"
            : "btn text-sm  px-5 py-3 text-white btn-ghost"
        }
        to="/allBooks"
      >
        {" "}
        All Books
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "btn text-sm border-none text-texts bg-secondary px-5 py-3"
            : "btn text-sm  px-5 py-3 text-white btn-ghost"
        }
        to="/borrowed"
      >
        Borrowed Books
      </NavLink>
    </>
  );

  return (
    <div className="flex navbar justify-around bg-primary">
      {/* website logo */}
      <img src={logo} className="h-12 md:ml-12 md:h-16 w-12 md:w-16" alt="" />

      {/* menu for small device */}
      <div className="w-full ml-4 lg:hidden">
        {/* Drop down menu icon */}

        <div className="w-full ml-4 lg:hidden">
          {!dropdown ? (
            <IoMdMenu
              className="text-white h-6 w-6"
              onClick={() => setDropdown(!dropdown)}
            />
          ) : (
            <IoMdClose
              className="text-white h-6 w-6"
              onClick={() => setDropdown(!dropdown)}
            />
          )}
        </div>

        {/* dropdown menu */}
        <div
          className={`menu absolute right-0 left-0 top-12 transition-all transform ${
            dropdown
              ? "translate-y-0 opacity-100  "
              : "translate-y-[-20%] opacity-0"
          } w-full m-0 dropdown-content mt-3 z-20 p-2 shadow-lg bg-black/80 rounded-box`}
        >
          {dropdown && (
            <ul tabIndex={0} className="flex-col flex">
              {navLink}
            </ul>
          )}
        </div>

      </div>

      {/* Menu for large device */}
      <div className="mx-auto  hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>

      {/* Profile information */}
      <div className="">
        {user ? (
          <div className="gap-4 flex items-center">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn bg-accent border-texts text-white mx-6">
              Login
            </button>
          </Link>
        )}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onChange={handleToggle} />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-8 h-8 text-white mx-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-8 text-white h-8 mx-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
