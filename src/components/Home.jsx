import React from 'react'
import Resume from '../assets/Resume.pdf'
import { Link } from 'react-scroll'

function Home() {
  return (
    <div name="home" class="w-full h-[700px] bg-gray-800 left-10">
      {/* container */}
      <div class="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">

        <p class="text-red-600 mt-12"> Hello there, My name is</p>
        <p class="text-4xl sm:text-7ml font-bold text-gray-400 py-2"> Rohith kumar Birru</p>
        <h2 class="text-2xl sm:text-3xl font-bold text-white">I'm a MERN Stack developer Trainee</h2>
        <p class="text-md py-4 max-w-[700px] text-gray-300">Seeking a challenging Entry level position in a reputed organization
             where I can learn new skills, expand my knowledge and Leverage my learnings.</p>
         
         <div>
            <button class="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-red-900 hover:border-yellow-600">
              <a href={Resume} download="Resume">Download Resume</a></button>
         </div>

         <div class="my-[50px] mx-auto p-10">
          <button class="border-2 border-yellow-600 p-2 text-white text-xl hover:bg-green-300 hover:text-black"><Link to="game" smooth={true}> Click here to play Tic Tac Toe</Link></button>
         </div>
      </div>
    </div>
  )
}

export default Home
