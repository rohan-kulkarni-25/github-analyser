import React from "react";
import logo from "./../assets/logo.svg";
import Card from "./Card";
const { AiFillCloseSquare } = require("react-icons/ai");

export default function LeftBar({ updateUser, setState, openLeftBar }) {
  const updateState = (e) => {
    e.preventDefault();
    const name = document.getElementById("uname").value;
    setState({ username: name }, () => updateUser());
  };

  return (
    <section
      id="lf"
      className="border-r-2 border-black-100 min-h-screen flex-col flex gap-24  p-4 overflow-y-auto lg:bg-white lg:p-8 lg:w-2/4 w-1/4 lg:absolute lg:hidden"
    >
      <AiFillCloseSquare
        className="absolute right-4 top-4 text-3xl lg:block hidden"
        onClick={openLeftBar}
      ></AiFillCloseSquare>
      <div className="border-b-2 border-black flex  items-center">
        <img src={logo} alt="" srcset="" className="h-8" />
        <span className="text-xl xl:text-base">GITHUB PROFILE ANALYZER</span>
      </div>

      <div className="flex items-center justify-center">
        <label className="flex items-center 2xl:flex-col rounded-2xl shadow-sm shadow-black w-fit">
          <input
            type="text"
            placeholder="username"
            className="  border-black-100 placeholder:text-xl rounded-2xl p-4 xl:text-base xl:p-2 xl:placeholder:text-base"
            name=""
            id="uname"
          />
          <button
            type="submit"
            onClick={(e) => updateState(e)}
            className="bg-black font-semibold text-xl p-4 w-full rounded-2xl -ml-12 2xl:ml-0 text-white xl:text-base xl:p-2"
          >
            SEARCH
          </button>
        </label>
      </div>
      <div className="flex flex-col items-start gap-4">
        <span className="text-xl border-b-2 border-black w-full xl:text-lg">
          ABOUT ME
        </span>
        <p className="text-xl tracking-tight xl:text-base">
          Hey Rohan here !! Creating this project to improve your GITHUB
          profile. Want to check my more projects ? Let's get connected I keep
          creating such projects.
          <a
            className="bg-black hover:scale-105 hover:duration-500 text-white p-2 pl-8 pr-8 rounded-2xl flex justify-evenly items-center gap-2 text-2xl mt-8 font-semibold xl:text-base"
            href="https://rohankulkarni.tech"
            target={"_blank"}
            rel="noreferrer"
          >
            CONNECT
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-xl border-b-2 border-black xl:text-lg">
          RESOURCES
        </span>
        <Card></Card>
      </div>
    </section>
  );
}
