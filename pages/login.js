import React from "react";
import Link from "next/link";

function Login() {
  return (
    <div className="w-full h-screen flex flex-col  md:flex-row">
      <div className="flex   md:flex-1 items-center justify-center">
        <div className="w-28 h-28  mt-5">
          <img
            className="w-fit"
            src="https://assets-global.website-files.com/612df93207ed978f5579a4de/6135e2344d8f804248aa579b_Exe_Logo_Henry-Wartner_Cmjn%20copie.png"
          />
        </div>
      </div>
      <div className="flex  flex-1  justify-center items-center ">
        <div className="flex  flex-col gap-3 p-4 justify-center items-center">
          <label className="font-medium ">Username</label>
          <input className="w-80 h-10 p-4 " placeholder="PlaceHolder"></input>
          <label className="font-medium ">Password</label>

          <input className="w-80 h-10 p-4" placeholder="PlaceHolder"></input>
          <Link href={`/hotels`}>
            <button className="bg-white h-10 rounded font-semibold mt-4 ">
              Enter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
