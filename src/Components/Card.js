import React from "react";
const { BsArrowRight } = require("react-icons/bs");

export default function Card() {
  return (
    <div className="bg-black text-mercury tracking-wider p-4 rounded-2xl">
      <span className="block text-xl xl:text-base">
        Don't know how to create GITHUB PROFILE README ?
      </span>
      <span className="block mt-2 text-lg tracking-tight mb-8 xl:text-sm">
        Eddie have already created one course for you !! Here you goo !!
      </span>
      <button
        type="submit"
        className="bg-white hover:scale-105 duration-500 text-black-500  rounded-2xl flex justify-evenly items-center gap-2"
      >
        <a
          className="p-4 pl-12 pr-12 flex justify-evenly items-center gap-2 xl:text-sm"
          href="https://www.eddiejaoude.io/portal"
          target={"_blank"}
          rel="noreferrer"
        >
          WATCH NOW
          <BsArrowRight className="text-2xl xl:text-base"></BsArrowRight>
        </a>
      </button>
    </div>
  );
}
