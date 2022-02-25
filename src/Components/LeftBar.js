import React from "react";
import logo from "./../assets/logo.svg";
import Card from "./Card";
const { AiOutlineSearch } = require("react-icons/ai");

export default function LeftBar() {
  return (
    <section className="border-r-2 border-black-100 min-h-screen flex-col flex gap-24 w-1/4 p-4 overflow-y-auto">
      <div className="border-b-2 border-black flex  items-center">
        <img src={logo} alt="" srcset="" className="h-8" />
        <span className="text-xl">GITHUB PROFILE ANALYZER</span>
      </div>

      <div className="flex items-center justify-center">
        <label
          htmlFor=""
          className="flex items-center  rounded-2xl shadow-sm shadow-black"
        >
          <input
            type="text"
            placeholder="username"
            className="  border-black-100 placeholder:text-xl rounded-2xl p-4"
            name=""
            id=""
          />
          <button
            type="submit"
            className="bg-black text-xl p-4 rounded-2xl -ml-12 text-white"
          >
            SEARCH
          </button>
        </label>
      </div>
      <div className="flex flex-col items-start gap-4">
        <span className="text-xl border-b-2 border-black w-full">ABOUT ME</span>
        <p className="text-xl tracking-tight">
          Hey Rohan here !! Creating this project to improve your GITHUB
          profile. Want to check my more projects ? Let's get connected I keep
          creating such projects.
          <a
            className="bg-black hover:scale-105 hover:duration-500 text-white p-2 pl-8 pr-8 rounded-2xl flex justify-evenly items-center gap-2 text-2xl mt-8 font-semibold"
            href="./"
          >
            CONNECT
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-xl border-b-2 border-black">RESOURCES</span>
        <Card></Card>
      </div>
    </section>
  );
}
