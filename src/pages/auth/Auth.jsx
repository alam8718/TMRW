// import {useMutation} from "@tanstack/react-query";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
function Auth() {
  useEffect(() => {
    const guestLogin = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("guest_session_id", data.guest_session_id);
        }
      } catch (error) {
        console.log("Error:Fetching Guest Seesion ", error.message);
      }
    };
    guestLogin();
  }, []);

  const navigate = useNavigate();
  const handleLogin = async () => {
    console.log(localStorage.getItem("guest_session_id"));
    navigate("/");
  };

  return (
    <>
      <div className="h-auto flex justify-center items-baseline my-28">
        <div className=" rounded-md p-10  w-[90%] sm:w-[70%] md:w-[40%] flex flex-col items-center gap-10 shadow-xl  ">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-5xl ">Welcome!</h1>
            <p className="text-2xl "> Login Here</p>
          </div>
          <div className="w-full border-2 p-1 shadow-md shadow-purple-500 rounded-md border-purple-500">
            <button
              className=" w-full py-2 hover:bg-purple-500 duration-200  rounded-md  bg-purple-400 text-black  "
              onClick={handleLogin}>
              Login As Guest
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
