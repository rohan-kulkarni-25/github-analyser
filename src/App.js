import axios from "axios";
import React, { Component } from "react";
import LeftBar from "./Components/LeftBar";
import MiddleBar from "./Components/MiddleBar";
import RightBar from "./Components/RightBar";
import "./App.css";
const { FaSpinner } = require("react-icons/fa");
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      username: "rohan-kulkarni-25",
      userBasic: {
        name: null,
        login: null,
        avatar_url: null,
        bio: null,
        followers: null,
        following: null,
        public_repos: null,
        repos_url: null,
      },
      orgData: [],
      userRepo: {
        star_count: null,
        own_repo: null,
        forked_repo: null,
        fork_count: null,
        languages: [],
        open_issues_count: null,
        Profilereadme: false,
      },
      tips: [],
    };
    this.setState = this.setState.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.updateUser();
  }

  updateUser = () => {
    this.getUserData()
      .then(async () => await this.getUserRepo())
      .then(async () => await this.getOrgData())
      .then(() => this.getTipsReady())
      .then(() => {
        setTimeout(() => {
          this.setState({ loading: false });
        }, 5000);
      });
  };

  getOnePage = async (page, per_page) => {
    const response = await axios.get(
      `https://api.github.com/users/${this.state.username}/repos?page=${page}&per_page=${per_page}`,
      {
        headers: {
          authorization: process.env.TOKEN,
        },
      }
    );
    return response.data;
  };

  getUserRepo = async () => {
    let result = [];
    let page = 1;
    const per_page = 100;
    let responseCount = 100;
    while (responseCount >= per_page) {
      const response = await this.getOnePage(page, per_page);
      responseCount = response.length;
      result = [...result, ...response];
      this.setState({ userRepo: result });
      page = page + 1;
    }
    let star_count = 0;
    let own_repo = 0;
    let forked_repo = 0;
    let fork_count = 0;
    let languages = [];
    let open_issues_count = 0;
    let Profilereadme = false;
    result.forEach((repo) => {
      star_count = star_count + repo.stargazers_count;
      fork_count = fork_count + repo.forks_count;
      open_issues_count = open_issues_count + repo.open_issues_count;
      if (repo.fork) {
        forked_repo = forked_repo + 1;
      } else {
        own_repo = own_repo + 1;
      }
      // CHecking readme
      if (repo.name === this.state.userBasic.login) {
        Profilereadme = true;
      }
      // Filling language array
      if (repo.language !== null) {
        const foundAt = languages.findIndex(
          (lang) => lang.name === repo.language
        );
        if (foundAt === -1) {
          const r = Math.trunc(Math.random() * 256);
          const g = Math.trunc(Math.random() * 256);
          const b = Math.trunc(Math.random() * 256);
          const obj = {
            name: repo.language,
            value: 1,
            color: `rgb(${r},${g},${b})`,
          };
          languages.push(obj);
        } else {
          languages[foundAt].value = languages[foundAt].value + 1;
        }
      }
    });
    this.setState({
      userRepo: {
        star_count,
        own_repo,
        forked_repo,
        fork_count,
        languages,
        open_issues_count,
        Profilereadme,
      },
    });
  };

  getUserData = async () => {
    this.setState({ loading: true });
    const userDataObj = await axios.get(
      `https://api.github.com/users/${this.state.username}`,
      {
        headers: {
          authorization: process.env.TOKEN,
        },
      }
    );
    const {
      name,
      login,
      avatar_url,
      bio,
      followers,
      following,
      organizations_url,
      public_repos,
      repos_url,
    } = userDataObj.data;
    this.setState({
      userBasic: {
        name,
        login,
        avatar_url,
        bio,
        followers,
        following,
        organizations_url,
        public_repos,
        repos_url,
      },
    });
  };

  getOrgData = async () => {
    let orgDataObj = await axios.get(
      `https://api.github.com/users/${this.state.username}/orgs`,
      {
        headers: {
          authorization: process.env.TOKEN,
        },
      }
    );
    orgDataObj = orgDataObj.data;
    let OrgData = [];
    orgDataObj.forEach((org) => {
      const obj = {
        name: org.login,
        avatar_url: org.avatar_url,
      };
      OrgData.push(obj);
    });
    this.setState({ orgData: OrgData });
    // this.getTipsReady();
  };

  getTipsReady = () => {
    let tips = [];

    if (!this.state.userBasic.bio) {
      const tip =
        "Please add bio to your profile that will help in defining about you.";
      tips.push(tip);
    }
    if (!this.state.userRepo.Profilereadme) {
      const tip =
        "You have not created profile readme.Readme profile is feature provided by github which helps us to display one markdown file on our profile.You can create new repository same as your username and readme in that repository will be considered as profile readme.For more information please look at video provided in resources section.";
      tips.push(tip);
    }
    if (this.state.userRepo.forked_repo < 5) {
      const tip =
        "You have less than 5 forked repository. I suggest you to please explore more repository and give your best contribution.";
      tips.push(tip);
    } else {
      const tip =
        "You have more than 5 forked repository. Its great that you are contributing into projects.Keep the good work going on.";
      tips.push(tip);
    }
    if (this.state.userRepo.languages.length < 3) {
      const tip =
        "You have worked on 3 languages so far. I will suggest you to expand your tech stack so you can get more experience and choices.If you have just started then it's ok";
      tips.push(tip);
    }
    if (this.state.userRepo.open_issues_count > 5) {
      const tip =
        "On your projects you have more than 5 open issues.Please visit them back and check their status. This will help in keeping projects active.";
      tips.push(tip);
    }
    if (this.state.userRepo.own_repo < 5) {
      const tip =
        "You have only created less than 5 repository by your own. I will suggest you to showcase your projects on github.";
      tips.push(tip);
    } else {
      const tip =
        "You have created more than 5 projects.That's great you are learning in public.You can try to help new folks to get their contribution done in your projects.";
      tips.push(tip);
    }
    if (this.state.orgData.length < 1) {
      const tip =
        "You can get involved in communities as that will help you to gain experience and build network.";
      tips.push(tip);
    }
    this.setState({ tips: [...tips] });
  };

  render() {
    return (
      <div className="font-sans-serif flex   rounded-2xl shadow-sm shadow-black">
        <LeftBar
          setState={this.setState}
          updateUser={this.updateUser}
        ></LeftBar>
        {this.state.loading ? (
          <FaSpinner
            className={`text-4xl absolute left-2/3 top-1/4 animate-spin ${
              this.state.loading ? "" : "hidden"
            }`}
          ></FaSpinner>
        ) : (
          <>
            <MiddleBar state={this.state}></MiddleBar>
            <RightBar state={this.state}></RightBar>
          </>
        )}
      </div>
    );
  }
}
