import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Social = () => {
  return (
    <div class="w-full h-screen bg-gray-600">
      <div class="w-full h-[350px] mx-auto flex justify-center items-center gap-6">
       < FaLinkedin class="cursor-pointer" size={30} />
       <FaInstagram class="cursor-pointer" size={30} />
       <FaYoutube class="cursor-pointer" size={30} />
      </div>
      <div class="max-w-[1000px] flex flex-col justify-center items-center mx-[50px] sm:ml[200px] gap-6">
         <IoIosCall size={30} />
         <p class="text-2xl hover:font-bold">8897820404</p>
         <MdEmail size={30} class="md:ml-2" />
         <p name="mail" class="text-2xl hover:font-bold">rohithkumar.birru@gmail.com</p>
      </div>
    </div>
  )
}

export default Social
