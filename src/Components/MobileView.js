import React from "react";
import { Doughnut } from "react-chartjs-2";
export default function MobileView({ setState, updateUser, state }) {
  const updateState = (e) => {
    e.preventDefault();
    const name = document.getElementById("uname").value;
    setState({ username: name }, () => updateUser());
  };

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

  const updateData = () => {
    let labels = [];
    let data = [];
    let backgroundColor = [];

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

  data = updateData();

  return (
    <div className="border-r-2 border-black-100 min-h-screen flex-col flex gap-4  p-4 overflow-y-auto md:w-full">
      <div className="flex items-center justify-center m-4">
        <label className="flex items-center flex-col rounded-2xl shadow-sm shadow-black w-fit">
          <input
            type="text"
            placeholder="username"
            className="  border-black-100 placeholder:text-xl rounded-2xl p-4 xl:text-base xl:p-2 xl:placeholder:text-base md:text-sm"
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
      <div className="border-b-2 border-black flex p-4">
        <span className="text-2xl font-semibold xl:text-xl">{`HELLO, ${state.userBasic.name}`}</span>
      </div>
      <div className="flex justify-around flex-col gap-8">
        <div className="h-fit bg-buttercup-300 rounded-xl p-8 md:p-4 mt-4">
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
    </div>
  );
}
