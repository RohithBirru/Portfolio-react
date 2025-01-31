import React from 'react'

const Contact = () => {
  return (
    <div class="w-full h-screen bg-gray-900 flex justify-center items-center p-4" name="contact">
      <form action="https://getform.io/f/bqooxwqb" method="POST" class="flex flex-col max-w-[600px] w-full">
        <div class="pb-8">
           <p class="text-4xl font-bold inline border-b-4 border-yellow-600 text-white">Contact</p>
           <p class="my-3 text-white">Please Submit form below</p>
        </div>
        <input class="p-2" type="text" placeholder="Name" name="name" />
        <input class="my-4 p-2 " type="email" placeholder="email" name="email" />
        <textarea class="" rows="10" placeholder="message"></textarea>
        <button class="text-white border-2 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Get in Touch</button>

      </form>
    </div>
  )
}

export default Contact
