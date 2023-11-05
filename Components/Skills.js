"use client"
import React from 'react'
const ServiceCard = ({ title, subtitle }) => (
  <div className="flex flex-col justify-start items-start blue-glassmorphism p-3 m-2 cursor-pointer ">

    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);
const Skills = () => {
  return (
    <div className=" lg:flex md:flex sm:grid  lg:gap-5 md:gap-5 sm:gap-2 ">
      <ServiceCard
        color="bg-[#2952E3]"
        title="My Expert Front End Libraries"
        subtitle="JavaScript - TypeScript -React JS - Vue JS -Angular JS -Redux& -Redux@toolkit -Next JS -Nuxt JS -Imba JS -Zustand JS -  -TailwindCss-SoundJS -TweenJS -EaselJS -Axios  "

      />
      <ServiceCard
        color="bg-[#2952E3]"
        title="My Back End Libraries"
        subtitle="Laravel - Node JS - Exprees JS - CI/CD - SQL-  Mongo DB- PastoreSQL-  Firebase- NGXR -  GraphQL - Apollo Client&Server -  TypeGraphQL-  Typegoose-  TypeORM -  Prisma - Docker "

      />
      <ServiceCard
        color="bg-[#2952E3]"
        title="My Web Desinger Libraries"
        subtitle="Figma- Woldpress -Manento - Adobe XD- Adobe Photoshop- Adobe Illustrator- Adobe After Effects- Adobe Premiere Pro- Adobe InDesign - Css3-Bootstrap@5 -bootstrap-vue"

      />
    </div>
  )
}

export default Skills