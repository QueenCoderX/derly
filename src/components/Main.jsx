import { useState } from 'react'
import './../index.css'

export default function Card () {
    return (
        <main>
            <section className="mr-7 ml-7 md:m-0 bg-white rounded-xl mb-2 mt-16 md:mt-20 ">
                <div className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:grid md:grid-flow-col md:max-w-2xl md:m-auto main-bg">
            
                {/* <img src="./src/assets/nirvana photo.JPG" alt="" className="w-full h-80 rounded-md object-cover object-right-bottom md:w-auto" /> */}

            <div className="flex flex-col mr-6 ml-6 p-4 gap-2 lg:m-16">
                
                <h2 className="mb-2 text-center poppins text-lg font-semibold tracking-tight">All you have to do is see it all in a different way - a different color, different style, and different rhythm!</h2>
                <p className="body-text text-left ">Shift your perspective to gain a new understanding or appreciation. By seeing things "in a different color, style, and rhythm," it encourages openness to alternative viewpoints, fresh approaches, and unique expressions. It implies that change or newness in perception can reveal insights or beauty you might have missed before. In essence, it's about embracing diversity in how you see, feel, or interpret something familiar.</p>
            </div>
            </div>


            </section>


            <section className=" flex flex-col justify-between items-center mt-16 m-8 rounded-xl gap-3">
              
                <div class="flex flex-col justify-between items-center">
                <div className="bg-white flex flex-col justify-between  items-center rounded-2xl border-lime-200 border-2 shadow-lg w-14 h-12 mt-2">
                <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#caf27b"><path d="M226.67-80q-27.5 0-47.09-19.58Q160-119.17 160-146.67v-422.66q0-27.5 19.58-47.09Q199.17-636 226.67-636h60v-90.67q0-80.23 56.57-136.78T480.07-920q80.26 0 136.76 56.55 56.5 56.55 56.5 136.78V-636h60q27.5 0 47.09 19.58Q800-596.83 800-569.33v422.66q0 27.5-19.58 47.09Q760.83-80 733.33-80H226.67Zm0-66.67h506.66v-422.66H226.67v422.66ZM480.11-280q32.22 0 55.06-22.52Q558-325.04 558-356.67q0-31-22.95-55.16Q512.11-436 479.89-436t-55.06 24.17Q402-387.67 402-356.33q0 31.33 22.95 53.83 22.94 22.5 55.16 22.5ZM353.33-636h253.34v-90.67q0-52.77-36.92-89.72-36.93-36.94-89.67-36.94-52.75 0-89.75 36.94-37 36.95-37 89.72V-636ZM226.67-146.67v-422.66 422.66Z"/></svg>
                </div>

                <div className="flex flex-col gap-2 p-3">
                    <h1 className="text-center font-semibold header-text">Your Privacy Is Our Responsibility</h1>
                    <p className="body-text text-center">We believe that trust is paramount in a relationship. We understand the importance of privacy when people start, continue and end with us. Your privacy, our responsibility.</p>
                </div>
                </div>
            </section>

            <section className='bg-lime-300 bg-opacity-70 flex flex-col justify-between items-center mt-16 m-8 rounded-xl border-lime-300 border-2 gap-3'>
                <div className="flex flex-col gap-2 p-3">
                    <h1 className="text-center poppins text-2xl">What Drives Us To Do The Things That We Do?</h1>
                </div>

                <div className="flex flex-col justify-between items-center gap-8 p-3 md:flex-row ">

                    <div className='flex flex-col justify-between items-center'>
                    <div className="bg-white flex flex-col justify-between  items-center rounded-2xl border-lime-200 border-2 shadow-lg w-14 h-12 mt-2">
                    <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#caf27b"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h2 className="text-center font-semibold poppins text-2xl">Inspiring New Perspectives</h2>
                        <p className="body-text text-center pr-6 pl-6">We aim to inspire people to see life from unique angles and embrace alternative viewpoints.</p>
                    </div>
                    </div>

                    <div className='flex flex-col justify-between items-center'>
                    <div className="bg-white flex flex-col justify-between  items-center rounded-2xl border-lime-200 border-2 shadow-lg w-14 h-12 mt-2">
                    <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#caf27b"><path d="M350-63q-46 0-82.5-24T211-153q-16 21-40.5 32.5T120-109q-51 0-85.5-35T0-229q0-43 28-77.5T99-346q-14-20-21.5-42.5T70-436q0-40 20.5-75t57.5-57q5 18 13.5 38.5T181-494q-14 11-22 26.5t-8 32.5q0 56 46 69t87 21l19 32q-11 32-19 54.5t-8 40.5q0 30 21.5 52.5T350-143q38 0 63-34t41-80q16-46 24.5-93t13.5-72l78 21q-9 45-22 103t-36.5 110.5Q488-135 449.5-99T350-63ZM120-189q17 0 28.5-11.5T160-229q0-17-11.5-28.5T120-269q-17 0-28.5 11.5T80-229q0 17 11.5 28.5T120-189Zm284-158q-46-41-83.5-76.5t-64.5-69q-27-33.5-41.5-67T200-629q0-65 44.5-109.5T354-783q4 0 7 .5t7 .5q-4-10-6-20t-2-21q0-50 35-85t85-35q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h14q60 0 102 38.5t50 95.5q-18-3-40.5-3t-41.5 2q-7-23-25.5-38T606-703q-35 0-54.5 20.5T498-623h-37q-35-41-54.5-60.5T354-703q-32 0-53 21t-21 53q0 23 13 47.5t36.5 52q23.5 27.5 57 58.5t74.5 67l-57 57Zm76-436q17 0 28.5-11.5T520-823q0-17-11.5-28.5T480-863q-17 0-28.5 11.5T440-823q0 17 11.5 28.5T480-783ZM609-63q-22 0-43.5-6T524-88q11-14 22-33t20-35q11 7 22 10t22 3q32 0 53.5-22.5T685-219q0-19-8-41t-19-54l19-32q42-8 87.5-21t45.5-69q0-40-29.5-58T716-512q-42 0-98 16t-131 41l-21-78q78-25 139-42t112-17q69 0 121 41t52 115q0 25-7.5 47.5T861-346q43 5 71 39.5t28 77.5q0 50-34.5 85T840-109q-26 0-50.5-11.5T749-153q-20 42-56.5 66T609-63Zm232-126q17 0 28-11.5t11-28.5q0-17-11.5-29T840-270q-17 0-28.5 11.5T800-230q0 17 12 29t29 12Zm-721-40Zm360-594Zm360 593Z"/></svg>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h2 className="text-center pr-3 pl-3 font-semibold poppins text-2xl">Emphasis on Creativity and Individualism</h2>
                        <p className="body-text text-center pr-6 pl-6">Values personal expression, with a focus on helping clients discover a sense of identity and meaning.</p>
                    </div>
                    </div>

                    <div className='flex flex-col justify-between items-center'>
                    <div className="bg-white flex flex-col justify-between items-center rounded-2xl border-lime-200 border-2 shadow-lg w-14 h-12 mt-2">
                    <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#caf27b"><path d="M280-400q-33 0-56.5-23.5T200-480q0-33 23.5-56.5T280-560q33 0 56.5 23.5T360-480q0 33-23.5 56.5T280-400Zm0 160q-100 0-170-70T40-480q0-100 70-170t170-70q67 0 121.5 33t86.5 87h352l120 120-180 180-80-60-80 60-85-60h-47q-32 54-86.5 87T280-240Zm0-80q56 0 98.5-34t56.5-86h125l58 41 82-61 71 55 75-75-40-40H435q-14-52-56.5-86T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Z"/></svg>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h2 className="text-center pr-3 pl-3 font-semibold poppins text-2xl">Encouraging Emotional Impact</h2>
                        <p className="body-text text-center pr-6 pl-6">Focuses on creating moments that are not only visually appealing but also emotionally resonant.</p>
                    </div>
                    </div>
                </div>
            </section>
            <div className='m-auto flex flex-row justify-between items-center'>
                        <a className="flex flex-row uppercase p-4 m-auto text-base gap-2 bg-lime-300"  href="">Read our story</a>
                    </div>
        </main>
    )
} 