import { useState } from 'react'
import './../index.css'

export default function Header(){

    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
        console.log("Hamburger menu works efficently as supposed to!");
    };

    return (
        <header id="header" className="bg-lime-300 bg-opacity-70 h-15 flex flex-row justify-between sticky top-0 p-2 z-50 w-auto border-b-lime-400 border-b">
            <div className="flex flex-col items-center p-1 mr-auto">
                <div className="font-bold text-right league-spartan text-2xl text-lime-950">derly.</div>
                {/* <div className="font-semibold text-left quicksand text-sm text-white">media</div> */}
            </div>

            <nav className="flex flex-row items-center justify-evenly gap-9 text-lime-900 max-sm:hidden">
                <a className="max-2xl:hidden" href="#home">Home</a>
                <a className="hover:text-lime-600" href="#pricing">Pricing</a>
                <a className="hover:text-lime-600" href="#services">Services</a>
                <a className="hover:text-lime-600" href="#register">Register</a>
                <a className="hover:text-lime-600" href="#blog">Blog</a>
                <a className="hover:text-lime-600" href="#imprints">Imprints</a>
            </nav>

            <div onClick={handleClick}  className="flex flex-row items-center cursor-pointer fixed right-10 ml-auto min-[640px]:hidden">
    
            <svg style={{display: toggle ? 'block' : 'none'}} className= "body-text fixed top-4 right-10 z-50 visible" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
    
            <nav style={{display: toggle ? 'flex' : 'none'}} className="flex flex-col fixed z-10 top-12 bg-lime-300 w-56 h-auto -right-0 animate-transform rounded-xl body-text rounded-t-none shadow-md p-2 items-center justify-evenly gap-6 text-lime-900 ">
                <a className="hover:text-lime-600" href="#home">Home</a>
                <a className="hover:text-lime-600" href="#pricing">Plan</a>
                <a className="hover:text-lime-600" href="#services">Services</a>
                <a className="hover:text-lime-600" href="#register">Register</a>
                <a className="hover:text-lime-600" href="#blog">Blog</a>
                <a className="hover:text-lime-600" href="#imprints">Imprints</a>
            </nav> 
            
             <svg style={{display: toggle ? 'none' : 'block'}} className="body-text fixed top-4 right-10 z-50 " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>

            </div>
        </header>

        
    )

}