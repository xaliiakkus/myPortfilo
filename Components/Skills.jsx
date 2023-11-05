
"use client"
import React, { Component } from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
const ServiceCard = ({ color, title, subtitle }) => (
  <div className="flex flex-col justify-start items-start blue-glassmorphism p-3 m-2 cursor-pointer ">
  
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

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
        Title: "My Expert Front End Libraries",
        MySkills:"JavaScript , TypeScript ,React JS , Vue JS ,Angular JS ,Redux& ,Redux@toolkit ,Next JS ,Nuxt JS ,Imba JS ,Zustand JS ,  ,TailwindCss,SoundJS -TweenJS ,EaselJS ,Axios  ", 
      },
      {
        Title: "My Back End Libraries",
        MySkills:"Laravel Node JS Exprees JS CI/CD , SQL,  Mongo DB, PastoreSQL,  Firebase, NGXR ,  GraphQL , Apollo Client&Server ,  TypeGraphQL,  Typegoose,  TypeORM ,  Prisma , Docker ", 
      },
      {
        Title: "My Web Desinger Libraries",
        MySkills:"Figma, Woldpress ,Manento , Adobe XD, Adobe Photoshop, Adobe Illustrator, Adobe After Effects, Adobe Premiere Pro, Adobe InDesign , Css3,Bootstrap@5 ,bootstrap-vue  ", 
      },
      
    ];
    this.setState({ CartList: data });
  };
  render() {
    return (
      <div className="lg:flex md:flex sm:grid  lg:gap-5 md:gap-5 sm:gap-2">
        {this.state.CartList.map((item) => (
              <div className="flex-1 flex justify-center items-center ">
              <ServiceCard
                color="bg-[#2952E3]"
                title={item.Title}
                subtitle={item.MySkills}
              />

          </div>
          
        ))}
      </div>
    );
  }
}
