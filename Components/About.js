"use client";
import React from "react";
import { Skills } from ".";
const Services = () => (
  <div
    className="flex w-full justify-center items-center gradient-bg-services"
    id="About Us"
  >
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-xl sm:text-5xl py-2 text-gradient ">
          I m a life long learner and enjoy learning new stuff below are some programing languages toolkits, frameworks and libraries that I worked with and like. some of them I control better than the other.
          <br />
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          In order to get in touch, you can choose the type of communication you
          want in the Contact section. You can contact me.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <Skills  />
      </div>
    </div>
  </div>
);

export default Services;
