import React from 'react'
import {backgroundImageTopLeft, backgroundImageTopRight} from '../assets/styles/globalBackgroundStyles'


const Home = () => {
   
  return (
    
    <main className='w-full h-full bg-[#ffffff]'>
        <section className='w-[full] h-[40em] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2' >
            <div className='w-[100%]' style={backgroundImageTopLeft}>
                <div className='bg-[rgba(0,122,186,0.3)] w-[100%] h-[100%] flex text-center items-center'>
                <p className='text-2xl md:text-2xl lg:text-7xl text-[white]'  style={{ fontFamily: "'Henny Penny', cursive"}}>Web Design + Security & Product Management</p>

                </div>
            </div>

            <div style={backgroundImageTopRight} className=' bg-blue-600 flex items-center flex-col w-[100%]'>
<p className='w-[10em] text-2xl md:text-2xl lg:text-4xl  text-center pt-36 text-[#ff1e00]'  style={{ fontFamily: "'Henny Penny', cursive"}}>Love what i do and like to learn more..</p>
<button className='text-1xl px-4 md:px-4 lg:px-8 py-2 md:py-2 lg:py-4 rounded-full bg-[#007aba] text-[#ffaf00] font-bold mt-5 font-mono'>View My Projects</button>
            </div>

        </section>
    </main>
  )
}

export default Home