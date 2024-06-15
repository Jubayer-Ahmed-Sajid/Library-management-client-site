import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../components/AuthProvider/AuthProvider";
import logo from "../../../assets/library_logo.png";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdDashboardCustomize, MdLogout } from "react-icons/md";
import text_logo from "../../../assets/cooltext460147309304020.png";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const [fix, setFix] = useState(false);

  //Theme state management
  // const [theme, setTheme] = useState(
  //   localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  // );

  //dropdown menu state management
  const [dropdown, setDropdown] = useState(false);

  // dashboard dropdown
  const [dashboard, setDashboard] = useState(false);

  // Theme toggle effect
  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   const localTheme = localStorage.getItem("theme");
  //   document.querySelector("html").setAttribute("data-theme", localTheme);
  // }, [theme]);

  // navbar color change
  const setNavColor = () => {
    if (window.scrollY >= 392) {
      setFix(true);
    } else setFix(false);
  };

  window.addEventListener("scroll", setNavColor);
  // const handleToggle = (e) => {
  //   if (e.target.checked) {
  //     setTheme("dark");
  //   } else setTheme("light");
  // };
  // if (loading) {
  //   return <span className="loading loading-spinner text-error"></span>;
  // }

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
      {/* <NavLink
        className={({ isActive }) =>
          isActive
            ? "btn text-white border-none text-lg bg-[#63a3fd] px-5 py-3"
            : "btn  px-5 py-3 text-lg btn-ghost"
        }
        to="/"
      >
        Home
      </NavLink> */}
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "btn border-none text-lg bg-secondary px-5 py-3"
            : "btn  px-5 py-3 text-lg btn-ghost"
        }
        to="/addBook"
      >
        {" "}
        Add Book
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "btn border-none text-lg bg-secondary px-5 py-3"
            : "btn  px-5 py-3 text-lg btn-ghost"
        }
        to="/allBooks"
      >
        {" "}
        All Books
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "btn border-none text-lg bg-secondary px-5 py-3"
            : "btn  px-5 py-3 text-lg btn-ghost"
        }
        to="/borrowed"
      >
        Borrowed Books
      </NavLink>
    </>
  );

  return (

    <div>

    <div
      className={`flex items-center max-w-7xl fixed navbar px-4 rounded-3xl justify-around z-40 opacity-90 ${
        fix
        ? "bg-black text-white top-3 transition-all duration-500 ease-in-out"
        : "bg-black text-white top-1 transition-all duration-500 ease-in-out"
      }`}
    >
      {/* website logo */}

      <Link to={"/"}>
        <div className="flex gap-2 items-center" alt="">
          <img src={logo} className="h-10 w-10" alt="" />
          <img src={text_logo} className="lg:block hidden h-6 w-32" />
        </div>
      </Link>

      {/* menu for small device */}
      <div className="w-full ml-4 lg:hidden">
        {/* Drop down menu icon */}

        <div className="w-full ml-4 lg:hidden">
          {!dropdown ? (
            <IoMdMenu
              className="h-6 w-6"
              onClick={() => setDropdown(!dropdown)}
            />
          ) : (
            <IoMdClose
              className="h-6 w-6"
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
          } w-full m-0 dropdown-content mt-3 z-20 p-2 shadow-lg bg-white/80 rounded-box`}
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
      <div>
        {user && (
          <div className="gap-4 flex items-center">
            <label tabIndex={0} className="shadow-lg avatar">
              <div className="w-12 rounded-full">
                <img
                  className="btn btn-ghost btn-circle "
                  onClick={() => setDashboard(!dashboard)}
                  src={user.photoURL}
                />
              </div>

              {dashboard && (
                <div className="z-20 ">
                  <div className="absolute right-1 w-8 h-8 top-16 z-30 bg-secondary rotate-45 border-l-2 border-t-2 border-l-accent border-t-accent "></div>

                  <ul className="absolute w-56 text-lg bg-secondary rounded-lg text-texts -left-32 right-0 text-start top-20 shadow-lg z-20 flex flex-col gap-2 md:space-y-3 space-y-2 md:py-6 py-4 px-3 md:px-6 border-accent border-2 ">
                    <li className="mt-3 text-center  md:text-lg">
                      {user.displayName}
                    </li>

                    <hr className="border-b-2 mb-2 border-b-accent m-0 font-bold" />

                    <li className="flex items-center gap-2">
                      <CgProfile className="text-accent text-2xl selection:text-2xl"></CgProfile>
                      <p>Profile</p>
                    </li>

                    <li className="flex items-center gap-2">
                      <MdDashboardCustomize className="text-accent text-2xl"></MdDashboardCustomize>
                      <p>Dashboard</p>
                    </li>

                    <button className="flex items-center gap-2">
                      <MdLogout className="text-accent text-2xl"></MdLogout>
                      <p className="text-lg" onClick={handleLogout}>
                        Logout
                      </p>
                    </button>
                  </ul>
                </div>
              )}
            </label>
          </div>
        )}
        {!user && (
          <Link
            className="btn bg-[#63a3fd] h-16 text-white px-12 py-3 text-lg rounded-2xl"
            to="/login"
          >
            Join
          </Link>
        )}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          {/* <input type="checkbox" onChange={handleToggle} /> */}

          {/* sun icon */}
          {/* <svg
            className="swap-on fill-current w-8 h-8  mx-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg> */}

          {/* moon icon */}
          {/* <svg
            className="swap-off fill-current w-8 h-8 mx-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg> */}
        </label>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
