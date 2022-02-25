import React, { Component } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function MiddleBar({ state }) {
  let data = {
    labels: [],
    datasets: [
      {
        label: "# of Votes",
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 2,
      },
    ],
  };

  // const updateData = () => {
  //   let labels = [];
  //   let data = [];
  //   let backgroundColor = [];
  //   let borderColor = [];

  //   state.languages.forEach((language) => {
  //     labels.push(language.name);
  //     data.push(language.value);
  //     backgroundColor.push(language.color);
  //   });
  //   data.labels = labels;
  //   data.datasets[0].data = data;
  //   data.datasets[0].backgroundColor = backgroundColor;
  //   return data;
  // };

  // const data = updateData();
  return (
    <section className="p-12  h-screen  overflow-scroll flex-col flex gap-8 w-2/4 ">
      <div className="border-b-2 border-black flex p-4">
        <span className="text-2xl font-semibold">{`HELLO, ${state.userBasic.name}`}</span>
      </div>
      <div className="flex justify-around flex-col gap-8">
        <div className="h-fit bg-buttercup-300 rounded-xl p-8 ">
          <span className="text-xl font-semibold block">USER</span>
          <div className="flex flex-wrap gap-2 items-center justify-around m-2 mt-8">
            <div className="flex flex-col items-center bg-white p-4 rounded-xl">
              <span className="text-xl font-bold">
                {state.userBasic.followers}
              </span>
              <span className="text-xs text-mercury-900">FOLLOWERS</span>
            </div>
            <div className="flex flex-col items-center bg-white p-4 rounded-xl">
              <span className="text-xl font-bold">
                {state.userBasic.following}
              </span>
              <span className="text-xs text-mercury-900">FOLLOWINGS</span>
            </div>
            <div className="flex flex-col items-center bg-white p-4 rounded-xl">
              <span className="text-xl font-bold">
                {state.userRepo.own_repo}
              </span>
              <span className="text-xs text-mercury-900">OWN REPOSITORY</span>
            </div>
            <div className="flex flex-col items-center bg-white p-4 rounded-xl">
              <span className="text-xl font-bold">
                {state.userRepo.forked_repo}
              </span>
              <span className="text-xs text-mercury-900">
                FORKED REPOSITORY
              </span>
            </div>
          </div>
        </div>
        <div className="h-fit bg-lavender-300 rounded-xl p-8 ">
          <span className="text-xl font-semibold block">REPOSITORY</span>
          <div className="flex flex-wrap gap-2 items-center justify-around m-2 mt-8">
            <div className="flex flex-col items-center bg-white p-4 rounded-xl">
              <span className="text-xl font-bold">
                {state.userRepo.star_count}
              </span>
              <span className="text-xs text-mercury-900">STAR COUNT</span>
            </div>
            <div className="flex flex-col items-center bg-white p-4 rounded-xl">
              <span className="text-xl font-bold">
                {state.userRepo.fork_count}
              </span>
              <span className="text-xs text-mercury-900">FORK COUNT</span>
            </div>
            <div className="flex flex-col items-center bg-white p-4 rounded-xl">
              <span className="text-xl font-bold">
                {state.userRepo.open_issues_count}
              </span>
              <span className="text-xs text-mercury-900">
                OPEN ISSUES COUNT
              </span>
            </div>
            <div className="flex flex-col items-center bg-white p-4 rounded-xl">
              <span className="text-xl font-bold">
                {state.userRepo.languages.length === undefined
                  ? ""
                  : state.userRepo.languages.length}
              </span>
              <span className="text-xs text-mercury-900">LANGUAGE COUNT</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center align-middle items-start bg-mountainmeadow-300 rounded-xl p-8  ">
          <span className="text-xl font-semibold block mb-8">LANGUAGES</span>
          <Doughnut className="align-center" data={data} />
        </div>
        <div className="h-fit bg-persianblue-300 text-white rounded-xl p-8 ">
          <span className="text-xl font-semibold block">TIPS:</span>
          <div className="mt-8">
            <ul className="list-disc flex flex-col gap-8 tracking-wider text-lg">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                quam nulla incidunt at delectus quos sequi officiis deserunt
                velit repellendus!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                quam nulla incidunt at delectus quos sequi officiis deserunt
                velit repellendus!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                quam nulla incidunt at delectus quos sequi officiis deserunt
                velit repellendus!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                quam nulla incidunt at delectus quos sequi officiis deserunt
                velit repellendus!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                quam nulla incidunt at delectus quos sequi officiis deserunt
                velit repellendus!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
