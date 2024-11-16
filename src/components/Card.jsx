import { useState } from 'react'
import './../index.css'

export default function Card () {
      
    return(
        <>
        <section id="services">
            <div className="h-auto flex flex-col flex-1">
            <video controls className="video-frame rounded-lg relative -top-7 border-lime-700 border-y-2 border-x-2 border-opacity-70 max-[390px]:w-60 max-[390px]:h-48 max-[639px]:w-72 max-[639px]:h-64 sm:w-72 sm:h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
               <source src="/serene-video.MP4" type="video/mp4"/>
            </video>

            <div className="flex flex-col gap-3 p-2 md:mr-16 md:ml-16 xl:mr-24 xl:ml-24">
                <h1 className="font-bold text-center header-text">The Color House Of Africa 2024</h1>
                <p className="body-text text-center pr-6 pl-6 ">Capture an intimate moment with time, family and friends; see it all differently the way we do - say goodbye to the questions, finally discover <em>your</em> nirvana.</p>
            </div>

            <div className="flex flex-col gap-4 mr-7 ml-7 md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-2 md:gap-5 md:items-center lg:flex lg:flex-row">

            <div className="flex flex-col gap-2 border-lime-100 mr-7 ml-7 md:m-0 bg-white rounded-xl shadow-lg mb-2 p-4 md:max-w-2xl min-[559px]:p-6 min-[559px]:mr-8 min-[559px]:ml-8 max-[767px]:p-8 max-[767px]:mr-12 max-[767px]:ml-12">
                <span className="bg-lime-200 body-text uppercase tracking-wide text-sm text-center">'Basic' Plan</span>
                <h2 className="header-text block text-center">Envision The You of Today</h2>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores in rerum aperiam cumque vero ducimus quos illo, debitis amet sed sunt?</p>
                <a href="" className="underline text-md text-gray-800 ">Learn about the 'Basic' plan here</a>
            </div>

            <div className="flex flex-col gap-2 border-lime-100 mr-7 ml-7 md:m-0 bg-white rounded-xl shadow-lg mb-2 p-4 md:max-w-2xl min-[559px]:p-6 min-[559px]:mr-8 min-[559px]:ml-8 max-[767px]:p-8 max-[767px]:mr-12 max-[767px]:ml-12">
                <span className="bg-lime-200 body-text uppercase tracking-wide text-sm text-center">'Standard' Plan</span>
                <h2 className="header-text block text-center">Envision The You of <span className='text-lime-600'>Tommorrow</span></h2>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores in rerum aperiam cumque vero ducimus quos illo, debitis amet sed sunt?</p>
                <a href="" className="underline text-md text-gray-800 ">Learn about the 'Standard' plan here</a>
            </div>

            <div className="flex flex-col gap-2 border-lime-100 mr-7 ml-7 md:m-0 bg-white rounded-xl shadow-lg mb-2 p-4 md:max-w-2xl min-[559px]:p-6 min-[559px]:mr-8 min-[559px]:ml-8 max-[767px]:p-8 max-[767px]:mr-12 max-[767px]:ml-12 ">
                <span className="bg-lime-200 body-text uppercase tracking-wide text-sm text-center">'Amen' Plan</span>
                <h2 className="header-text block text-center">Envision The You of <span className='text-lime-600'>Everyday</span></h2>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores in rerum aperiam cumque vero ducimus quos illo, debitis amet sed sunt?</p>
                <a href="" className="underline text-md text-gray-800 ">Learn about the 'Amen' plan here</a>
            </div>
            </div>

            <div className="mt-9 m-auto">
            <a className="uppercase p-4 text-base rounded-lg bg-lime-300" href="">Read More </a>
            </div>
            </div>
        </section>

        <section>
            <div className="p-10 pb-0 bg-red flex flex-col gap-4 mt-8 m-6 md:m-12 lg:m-8">
            <h2 className="text-center text-black text-xl text-wrap poppins font-bold mb-4">The Begining Of A New You Is Waiting.</h2>
                    <div className="border border-lime-300 rounded-lg p-4 relative flex justify-between">
                        <div className="absolute -top-3 -right-3 bg-lime-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            Audit Our Service/14 Days
                        </div>
                        <div className="text-left">
                            <p className="text-lg font-semibold">Monthly</p>
                            <p className="text-gray-500">NGN85,000/yr.</p>
                        </div>
                        <div className="text-right flex items-center">
                            <p className="text-lg font-semibold">NGN7,000/mo.</p>
                        </div>
                    </div>
                    <p className="text-gray-600 mt-4">
                        NGN7,000 is automatically deducted from your account immediately after your free audit comes to a completion. You can canel your subscription any time. <a href="#" className="text-lime-400">Terms</a> <span>|</span> <a href="#" className="text-lime-400">Cancel anytime</a>
                    </p>
                    <button className="mt-6 bg-gradient-to-r from-lime-500 to-lime-300 text-white font-semibold py-2 px-4 rounded-full w-full">
                        Continue
                    </button>
                </div>


           

        </section>
        </>
    )
}