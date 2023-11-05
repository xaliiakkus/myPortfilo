import React from 'react'
import Image from 'next/image'
import RTN from '../assets/Images/rtna.jpg'
import Netflix from '../assets/Images/netfilix.jpg'
import Rest from '../assets/Images/RestServices.jpg'
import CarsHup from '../assets/Images/carshups.jpg'
const ProjectCart = () => {
  return (
    <div className="lg:flex md:flex sm:grid  lg:gap-5 md:gap-5 sm:gap-2">
    <div className="flex">
      <div className="flex grid-cols-4 gap-4">
        <a  href="" className="block">
          <Image
            alt="Signage"
            src={RTN}
            className="h-56 w-[600px] rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
            width={600}
            height={224}
      
          />

          <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
            <strong className="font-medium text-white">RetencryptoApp</strong>

            <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
          </div>
        </a>
        <a  href="" className="block">
          <Image
            alt="Signage"
            src={Netflix}
            className="h-56 w-[600px] rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
            width={600}
            height={224}
     
          />

          <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
            <strong className="font-medium text-white"> </strong>

            <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
          </div>
        </a>
        <a  href="" className="block">
          <Image
            alt="Signage"
            src={Rest}
            className="h-56 w-[600px] rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
            width={600}
            height={224}
     
          />

          <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
            <strong className="font-medium text-white"> RestServices</strong>

            <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
          </div>
        </a>
        <a  href="" className="block">
          <Image
            alt="Signage"
            src={CarsHup}
            className="h-56 w-[600px] rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
            width={600}
            height={224}
     
          />

          <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
            <strong className="font-medium text-white"> Carhup</strong>

            <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
          </div>
        </a>

      </div>
    </div>
</div>
  )
}

export default ProjectCart