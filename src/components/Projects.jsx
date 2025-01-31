import React from 'react'
import register from '../assets/register.png'
import auth from '../assets/auth.png'
import chatbot from '../assets/chatbot.png'
import url from '../assets/url.png'

const Projects = () => {
  return (
    <div name="work" class="w-full h-[700px] bg-gray-600">
      <div class="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full">
        <div class="pb-8">
            <p class="text-4xl font-bold inline border-b-4 border-yellow-600 text-white">Projects</p>
        </div>

        <div class="w-full h-[350px] grid grid-cols-2 gap-4 sm:grid-cols-4 text-center py-8 pl-12 pr-12 mt-10">
          <div>
            <img src={register} alt="" />
            <p>Register Form</p>
          </div>
          <div>
            <img src={auth} alt="" />
            <p class="text-black">User Authentication</p>
          </div>
          <div>
            <img src={chatbot} alt="" />
            <p>AI Chatbot</p>
          </div>
          <div>
            <img src={url} alt="" />
            <p>URL Shortener</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Projects
