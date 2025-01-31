import React from 'react'

const About = () => {
  return (
    <div name="about" class="w-full h-[500px] bg-gray-600 text-white">
      <div class="flex flex-col justify-center items-center w-full h-full">
        <div class="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
            <div class="sm:text-right pb-8 pl-4">
                <p class="text-4xl font-bold inline border-b-4 border-yellow-600">About</p>
            </div>
               <div></div>
            </div>
            <div class="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
               <div class="text-2xl font-bold hover:text-red-500 hover:scale-75 duration-500">
                 <p>Hello there, My name is Rohith kumar. Explore more features in my portfolio</p>
               </div>
               <div>
                <p>I am open to learn any additional skills as soon as possible that may benefit the company. 
                I would greatly appreciate your consideration of this message. Thank you, and I look forward to your response.</p>
               </div>
            </div>
        </div>
      </div>
  )
}

export default About
