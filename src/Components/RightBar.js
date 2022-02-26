import React from "react";

const { VscFeedback } = require("react-icons/vsc");
export default function RightBar({ state }) {
  return (
    <section className=" bg-white flex-col flex gap-8 w-1/4 border-l-2 border-black-100 p-4">
      <div className="border-b-2 border-black flex justify-evenly items-center p-2 ">
        <a href="mailto:rohank2502@gmail.com">
          <VscFeedback className="text-2xl cursor-pointer"></VscFeedback>
        </a>
      </div>
      <div className="flex flex-col font-normal text-xl  gap-4 items-center text-center p-4">
        <div className="relative flex flex-col items-center">
          <p className="rounded-full border-2 border-lavender-500 p-4 relative">
            <img
              className="rounded-full h-24 border-2 border-mountainmeadow-500"
              src={state.userBasic.avatar_url}
              alt=""
              srcset=""
            />
            <p className="w-4 h-4 absolute bg-persianblue-500 rounded-full translate-x-20 -translate-y-1"></p>
          </p>
          <span className="block text-lg mt-2">{state.userBasic.name}</span>
          <span className="block text-sm -mt-1">@{state.userBasic.login}</span>
        </div>
      </div>
      <div className="flex flex-col font-normal text-xl  gap-4 p-4 pt-0 overflow-y-scroll pb-20">
        <span className="text-2xl xl:text-lg">ORGANISATIONS</span>
        <div className="flex flex-wrap justify-around gap-4 ">
          {state.orgData.map((org) => {
            return (
              <a
                href={`https://github.com/${org.name}`}
                className="flex items-center bg-white gap-4  w-fit rounded-2xl  h-fit  shadow-black shadow-sm "
              >
                <img
                  src={org.avatar_url}
                  className="h-16 rounded-2xl xl:h-12"
                  alt=""
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
