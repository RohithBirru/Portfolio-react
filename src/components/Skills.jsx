import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import mongodb from '../assets/mongodb.png'
import mysql from '../assets/mysql.png'
import aws from '../assets/aws.png'

const Skills = () => {
  return (
    <div name="skills" class="bg-gray-900 text-white">
      <div class="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full" >
        <div>
          <p class="text-4xl font-bold inline border-b-4 border-yellow-600" >Technical Skills</p>
        </div>
      </div>

      <div class="w-full h-full grid grid-cols-2 sm:grid-cols-4 text-center py-8 pl-12 pr-12">
        <div>
            <img class="w-20 mx-auto hover:scale-125 duration-200" src={html} alt="" />
            <p class="my-4">HTML</p>
        </div>

        <div>
            <img class="w-20 mx-auto hover:scale-125 duration-200" src={css} alt="" />
            <p class="my-4">Tailwind CSS</p>
        </div>

        <div>
            <img class="w-20 mx-auto hover:scale-125 duration-200" src={js} alt="" />
            <p class="my-4">JavaScript</p>
        </div>

        <div>
            <img class="w-20 mx-auto hover:scale-125 duration-200" src={react} alt="" />
            <p class="my-4">React</p>
        </div>

        <div>
            <img class="w-20 mx-auto hover:scale-125 duration-200" src={node} alt="" />
            <p class="my-4">Nodejs</p>
        </div>

        <div>
            <img class="w-20 mx-auto hover:scale-125 duration-200" src={express} alt="" />
            <p class="my-4">Expressjs</p>
        </div>

        <div>
            <img class="w-20 mx-auto hover:scale-125 duration-200" src={mongodb} alt="" />
            <p class="my-4">MongoDB</p>
        </div>

        <div>
            <img class="w-20 mx-auto hover:scale-125 duration-200" src={mysql} alt="" />
            <p class="my-4">MySQL</p>
        </div>

        <div>
            <img class="w-20 mx-auto hover:scale-125 duration-200" src={aws} alt="" />
            <p class="my-4">AWS</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
