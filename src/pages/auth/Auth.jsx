import {useMutation} from "@tanstack/react-query";
import React from "react";
import {useNavigate} from "react-router-dom";
import {mutationLogin} from "./mutationLogin";
function Auth() {
  const {data, mutate} = useMutation({
    mutationKey: ["login"],
    mutationFn: mutationLogin,
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    await mutate();
    localStorage.setItem("guest_session_id", data.guest_session_id);
    navigate("/");
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center ">
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
