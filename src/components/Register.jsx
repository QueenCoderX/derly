
import './../index.css'

export default function Card () {
    return (
        <section>
            <div className='shadow-sm m-5 p-5'>
                <img className='rounded-full w-16 h-16 border border-lime-200 object-cover' src="./src/assets/woman.JPG" alt="" />
                <figure class="my-12">
                <blockquote class="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                    <p class="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-0 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
                    Marcus, my best friend at the time, pushed for something revolutionary, a kind of system where we could try to help people see a different color. One way or another, he identified the real reason why people were found unhappy. He said, "they are unhappy because they haven't tried invoking their other emotions. What better way to help do that than with colors".
                    </p>
                    
                </blockquote>
                <figcaption class="italic text-xl sm:text-2xl text-right mt-2 text-black">
                    &#8212; Tolulope Adeyeni, Founder
                </figcaption>
            </figure>
            </div>
        </section>
    )
}    