import React from 'react'
import {useState} from 'react'
import logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navigationbar = () => {
    const [nav, setnav] = useState(false)
    const handleClick = ()=>{
        setnav(!nav)
    }
  return (
    <div class="fixed w-full h-[80px] flex justify-between items-center bg-gray-800 text-white">
      <div>                 
        <img src={logo} alt="" class="w-[80px]"  />
      </div>

      {/* menu */}
        <ul class="hidden md:flex">
            <li class="px-4 cursor-pointer hover:border-b-2 hover:border-white"><Link to="home" smooth={true} duration={500}> Home </Link></li>
            <li class="px-4 cursor-pointer hover:border-b-2 hover:border-white"><Link to="about" smooth={true} duration={500}>About </Link></li>
            <li class="px-4 cursor-pointer hover:border-b-2 hover:border-white"><Link to="skills" smooth={true} duration={500}>Skills </Link></li>
            <li class="px-4 cursor-pointer hover:border-b-2 hover:border-white"><Link to="work" smooth={true} duration={500}>Projects </Link></li>
            <li class="px-4 cursor-pointer hover:border-b-2 hover:border-white"><Link to="contact" smooth={true} duration={500}>Contact </Link></li>
        </ul>

      {/* hamburger */}
      <div onClick={handleClick} class="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile view */}
    
        <ul class={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-600 flex flex-col justify-center items-center'}>
            <li class="cursor-pointer py-6 text-white"><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
            <li class="cursor-pointer py-6 text-white"><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
            <li class="cursor-pointer py-6 text-white"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li class="cursor-pointer py-6 text-white"><Link onClick={handleClick} to="work" smooth={true} duration={500}>Projects</Link></li>
            <li class="cursor-pointer py-6 text-white"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
            <li class="cursor-pointer py-6 text-white"><Link onClick={handleClick} to="game" smooth={true} duration={500}>Game</Link></li>
        </ul>
     
      {/* social icons */}
      <div class="hidden lg:flex fixed flex-col top-[35%] left-0">
         <ul>
            <li class="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[5px] duration-300" >
                <a class="flex justify-between items-center w-full text-gray-300" href='https://www.linkedin.com/in/rohith-kumar-birru-667367260/'>LinkedIn <FaLinkedin size={30} /></a>
            </li>
            <li class="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[5px] duration-300" >
                <a class="flex justify-between items-center w-full text-gray-300" href='https://github.com/RohithBirru'>GitHub <FaGithub size={30} /></a>
            </li>
            <li class="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[5px] duration-300" >
                <a class="flex justify-between items-center w-full text-gray-300" href='/'><Link to="mail">Email</Link> <HiOutlineMail size={30} /></a>
            </li>
            <li class="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[5px] duration-300" >
                <a class="flex justify-between items-center w-full text-gray-300" href='/'><Link to="home" smooth={true}>Resume</Link>  <BsFillPersonLinesFill size={30} /></a>
            </li>
         </ul>
      </div>

    </div>
  )
}

export default Navigationbar
