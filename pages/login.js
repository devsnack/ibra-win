import React from "react";

function Login() {
  return (
    <div className="w-full h-screen flex">
      <div className="flex flex-1 items-center justify-center">
        <h1>LOGO</h1>
      </div>
      <div className="flex flex-1 bg-green-500 justify-center items-center ">
        <div className="flex  flex-col gap-3 p-4">
          <label className="font-medium ">Username</label>
          <input className="w-96 h-10 p-4 " placeholder="PlaceHolder"></input>
          <label className="font-medium ">Password</label>

          <input className="w-96 h-10 p-4" placeholder="PlaceHolder"></input>
          <button className="bg-white h-10 rounded font-semibold mt-4 ">
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
