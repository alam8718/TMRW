import {useState} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {BiCameraMovie} from "react-icons/bi";

export default function NavBar() {
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);
  const isLoggedIn = localStorage.getItem("guest_session_id") !== null;
  const handleLogout = () => {
    localStorage.removeItem("guest_session_id");
    navigate("/auth");
  };
  const handleLogin = () => {
    navigate("/auth");
  };

  return (
    <nav className="w-full h-auto bg-[#37371F] shadow ">
      <div className="justify-between px-4 mx-auto  md:items-center md:flex md:px-12">
        <div>
          <div className="flex items-center justify-between py-3 md:block">
            <Link to="/">
              <div className="flex items-center justify-center text-[#EC9A29]">
                <p className="">
                  <BiCameraMovie size={40} />
                </p>
                <h2 className="text-2xl font-bold ">TMRW</h2>
              </div>
            </Link>
            {/* for mobile navbar */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          {/* side bar for mobile  */}
          <div
            className={`flex-1  justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}>
            <ul className="py-10 md:py-0 flex gap-10 flex-col md:flex-row items-center ">
              <li className="text-lg  font-semibold hover:bg-gray-600 px-4 rounded-lg py-1 duration-300 ">
                <NavLink
                  className={({isActive}) =>
                    isActive
                      ? "text-red-500 border-b border-red-500"
                      : `text-amber-400`
                  }
                  to="/">
                  Home
                </NavLink>
              </li>
              <li className="text-lg text-amber-400 font-semibold hover:bg-gray-600 px-4 rounded-lg py-1 duration-300 ">
                <NavLink
                  className={({isActive}) =>
                    isActive
                      ? "text-red-500 border-b border-red-500"
                      : `text-amber-400`
                  }
                  to="/rated">
                  Rated
                </NavLink>
              </li>
              <li className="text-lg md:hidden text-amber-400 font-semibold  px-4 rounded-lg py-1 duration-300 ">
                <Link
                  to="/auth"
                  className="px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-amber-500/80    ">
                  {isLoggedIn ? (
                    <button onClick={handleLogout}>Log Out</button>
                  ) : (
                    <button onClick={handleLogin}>Login</button>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <Link
            to="/auth"
            className="px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-amber-500/80    ">
            {isLoggedIn ? (
              <button onClick={handleLogout}>Log Out</button>
            ) : (
              <button onClick={handleLogin}>Login</button>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
