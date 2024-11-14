import { useEffect, useState } from 'react'
import './../index.css'

export default function Banner(){
    const [text, setText] = useState('Hello, World!');
    const texts = ['annoyed', 'hopeless', 'disappointed', 'drained', 'overwhelmed', 'worried', 'scared'];
    let index = 0;
    
  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % texts.length; 
      setText(texts[index]);
    }, 2000);
    console.log("Text Automation Works Accordingly!");
        
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="bg-lime-300 bg-opacity-70 border-b-2 ">

        <div className="p-14 flex flex-col gap-4 md:pr-40 md:pl-40 md:pt-10 xl:pr-56 xl:pl-56 2xl:pr-64 2xl:pl-64">
        <h1 className="text-center text-xl h-26 min-[390px]:h-28 sm:p-6">Here At Derly, We Know Exactly What You Feel Everytime You Wake up Each Morning — <span className="automatic-text">{text}!</span></h1>

        <h5 className="body-text text-center">We know cause we feel it too, yet, we are not alike. We hate to admit it but its the truth and its better you know that you're definitely not going to feel and different from now. What makes  us better is that we are better at seeing it the other way. The way that won't make us go nuts. </h5>

        <a className="flex flex-row uppercase p-4 m-auto text-base gap-2 bg-lime-300" href="">See our services <svg className="animate-pulse" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0000000"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg> </a>
        </div>
    </section>
);

}