import React from "react";
const { BsArrowRight } = require("react-icons/bs");

export default function Card() {
  return (
    <div className="bg-black text-mercury tracking-wider p-4 rounded-2xl">
      <span className="block text-xl">
        Don't know how to create GITHUB PROFILE README ?
      </span>
      <span className="block mt-2 text-lg tracking-tight mb-8">
        Eddie have already created one video for you !! Here you goo !!
      </span>
      <button
        type="submit"
        className="bg-white hover:scale-105 duration-500 text-black-500 p-4 pl-12 pr-12 rounded-2xl flex justify-evenly items-center gap-2"
      >
        WATCH NOW
        <BsArrowRight className="text-2xl"></BsArrowRight>
      </button>
    </div>
  );
}
