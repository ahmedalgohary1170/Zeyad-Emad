import React from 'react'
import userData from '../userData'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16 mt-8'>
        <img src={userData.profileImage} alt={userData.name} 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>{userData.name}</span>
            , {userData.title}
        </h1>

        <div className='mt-8 space-x-4'>
            <a href={userData.contact.whatsapp} className='hover:underline' >
                <button
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
            </a>
            <a href={userData.cvFile} download="Zeyad_Emad_Rady_CV.pdf">
                <button
                className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
            </a>
        </div>

    </div>
  )
}

export default Hero