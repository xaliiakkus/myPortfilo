
"use client"
import React, { Component } from "react";
export default class ProjectCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CartList: [],
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    let data = [
      {
        ProjectName: "RetencryptoApp",
        image:
          "https://user-images.githubusercontent.com/90987920/202919780-bb081f78-911a-4dda-84d8-b72711089f7a.PNG",
        GithupUrl: "https://github.com/xaliiakkus/RetencrptoApp",
      },
      {
        ProjectName: "Netflix-Clone",
        image:
          "https://user-images.githubusercontent.com/90987920/202921025-48c2c084-0f82-4d10-aa14-fa3c926577c2.PNG",
        GithupUrl:
          "https://github.com/xaliiakkus/Netflix-Clone-React-redux-firebase",
      },
      {
        ProjectName: "RestServices",
        image: "https://github.com/xaliiakkus/RestServices/blob/main/RestServices.jpg?raw=true",
        GithupUrl:
          "https://github.com/xaliiakkus/Rest-Api-s-Node-Js-Express-Js-Or-MongoDb",
      },
      {
        ProjectName: "Carhup",
        image: "https://github.com/xaliiakkus/caars/blob/main/carshups.jpg?raw=true",
        GithupUrl:
          "https://github.com/xaliiakkus/Rest-Api-s-Node-Js-Express-Js-Or-MongoDb",
      },
    ];
    this.setState({ CartList: data });
  };
  render() {
    return (
      <div className="lg:flex md:flex sm:grid  lg:gap-5 md:gap-5 sm:gap-2">
        {this.state.CartList.map((item) => (
          <div className="flex">
            <div class="flex grid-cols-4 gap-4">
              <a href="#" class="block">
                <img
                  alt="Signage"
                  src={item.image}
                  class="h-56 w-[600px] rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                />

                <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                  <strong class="font-medium text-white"> {item.ProjectName}</strong>

                  <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                  <p class="mt-0.5 opacity-50 sm:mt-0">
                    <div className="bg-black p-2 w-max rounded-3xl  shadow-2xl">
                      <p className=" font-bold">
                        <a className="text-cyan-700" href={item.GithupUrl}>Go Repostory</a>
                      </p>
                    </div></p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
