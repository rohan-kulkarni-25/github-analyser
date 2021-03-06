import React, { Component } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function MiddleBar({ state }) {
  // let data = {
  //   labels: [],
  //   datasets: [
  //     {
  //       label: "# of Votes",
  //       data: [],
  //       backgroundColor: [],
  //       borderColor: [],
  //       borderWidth: 2,
  //     },
  //   ],
  // };

  const updateData = () => {
    let labels = [];
    let data = [];
    let backgroundColor = [];
    let borderColor = [];

    state.userRepo.languages.forEach((language) => {
      labels.push(language.name);
      data.push(language.value);
      backgroundColor.push(language.color);
    });
    let dataObj = {
      labels,
      datasets: [
        {
          label: "# of Votes",
          data,
          backgroundColor,
          borderWidth: 2,
        },
      ],
    };
    return dataObj;
  };

  let data = updateData();
  return (
    <section className="p-12  h-screen  overflow-scroll flex-col flex gap-8 w-2/4 lg:w-4/5 md:w-full md:p-2">
      <div className="border-b-2 border-black flex p-4">
        <span className="text-2xl font-semibold xl:text-xl">{`HELLO, ${state.userBasic.name}`}</span>
      </div>
      <div className="flex justify-around flex-col gap-8">
        <div className="h-fit bg-buttercup-300 rounded-xl p-8 md:p-4">
          <span className="text-xl font-semibold block">USER</span>
          <div className="flex flex-wrap gap-2 items-center justify-around m-2 mt-8">
            <div className="flex flex-col items-center bg-white p-4 rounded-xl md:p-2">
              <span className="text-xl font-bold md:text-base">
                {state.userBasic.followers}
              </span>
              <span className="text-xs text-mercury-900">FOLLOWERS</span>
            </div>
            <div className="flex flex-col items-center bg-white p-4 rounded-xl md:p-2">
              <span className="text-xl font-bold md:text-base">
                {state.userBasic.following}
              </span>
              <span className="text-xs text-mercury-900">FOLLOWINGS</span>
            </div>
            <div className="flex flex-col items-center bg-white p-4 rounded-xl md:p-2">
              <span className="text-xl font-bold md:text-base">
                {state.userRepo.own_repo}
              </span>
              <span className="text-xs text-mercury-900">OWN REPOSITORY</span>
            </div>
            <div className="flex flex-col items-center bg-white p-4 rounded-xl md:p-2">
              <span className="text-xl font-bold md:text-base">
                {state.userRepo.forked_repo}
              </span>
              <span className="text-xs text-mercury-900">
                FORKED REPOSITORY
              </span>
            </div>
          </div>
        </div>
        <div className="h-fit bg-lavender-300 rounded-xl p-8 md:p-4">
          <span className="text-xl font-semibold block">REPOSITORY</span>
          <div className="flex flex-wrap gap-2 items-center justify-around m-2 mt-8 ">
            <div className="flex flex-col items-center bg-white p-4 rounded-xl md:p-2">
              <span className="text-xl font-bold md:text-base">
                {state.userRepo.star_count}
              </span>
              <span className="text-xs text-mercury-900">STAR COUNT</span>
            </div>
            <div className="flex flex-col items-center bg-white p-4 rounded-xl md:p-2">
              <span className="text-xl font-bold md:text-base">
                {state.userRepo.fork_count}
              </span>
              <span className="text-xs text-mercury-900">FORK COUNT</span>
            </div>
            <div className="flex flex-col items-center bg-white p-4 rounded-xl md:p-2">
              <span className="text-xl font-bold md:text-base">
                {state.userRepo.open_issues_count}
              </span>
              <span className="text-xs text-mercury-900">
                OPEN ISSUES COUNT
              </span>
            </div>
            <div className="flex flex-col items-center bg-white p-4 rounded-xl md:p-2">
              <span className="text-xl font-bold md:text-base">
                {state.userRepo.languages.length === undefined
                  ? ""
                  : state.userRepo.languages.length}
              </span>
              <span className="text-xs text-mercury-900">LANGUAGE COUNT</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center align-middle items-start bg-mountainmeadow-300 rounded-xl p-8 md:p-4 ">
          <span className="text-xl font-semibold block mb-8">LANGUAGES</span>
          <Doughnut className="align-center" data={data} />
        </div>
        <div className="h-fit bg-persianblue-300 text-white rounded-xl p-8 md:p-4">
          <span className="text-xl font-semibold block md:text-base">
            TIPS:
          </span>
          <div className="mt-8 md:mt-4">
            <ul className="list-disc flex flex-col gap-8 tracking-wider text-lg xl:text-base">
              {state.tips.map((tip) => (
                <li className="md:text-xs">{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
