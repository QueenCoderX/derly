import React from 'react';

export default function Blog() {
    return (
      <>
      <div className='pt-4 pl-6'>
        <h3 className='text-black'>Blogs and Articles</h3>
      </div>
      <main className='m-4'>
      <swiper-container className="md:w-96"
      slides-per-view="3" 
      space-between="20" 
      loop="true"
      autoplay-delay="3000"
      style={
        {
        "--swiper-navigation-color": "#000", 
        "--swiper-pagination-color": "#9fff90",
        "--swiper-pagination-bullet-size": "10px"
        }
    }  breakpoints={
            JSON.stringify({

                640:{
                    slidesPerView: 2,
                    spaceBetween: 20,
                },

                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },

                1024: {
                    slidesPerView: 4,
                    spaceBetween: 60,
                }
            })
        }>
             <swiper-slide>
             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="./src/assets/sunset.JPG" alt="Sunset" className="w-full h-48 object-cover"/>
            <div className="p-4 overflow-scroll overflow-x-hidden">
            <span className="text-md text-gray-500">Miss Carr - Poetic Article</span>
            <h2 className="text-lg font-semibold text-gray-800 mt-2">
              A Tree In the Fog
            </h2>
            <p className="text-gray-600 mt-2 h-52">
              Written by Miss Carr, Nobel Prize Winner,"A Tree In The Fog" captures her experiences as a young writer in  an industry where she could not yet understand where her place was. She writes about how at the end of the day, the fog in her mind clears and she could finally understand her purpose.
            </p>
          </div>
        </div>
            </swiper-slide>

            <swiper-slide>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="./src/assets/rooftop.JPG" alt="Rooftop" className="w-full h-48 object-cover" />
            <div className="p-4 overflow-scroll overflow-x-hidden">
            <span className="text-sm text-gray-500">Derly Media - Article</span>
            <h2 className="text-lg font-semibold text-gray-800 mt-2">
            Dimension Of A Rooftop
            </h2>
            <p className="text-gray-600 mt-2 h-52">
              Witten by Derly's own writers, "Dimensions Of A Rooftop" is an antagozing read which intends to identify the various forms the human mind finds itself and how the average human being is affected by this.
            </p>
          </div>
            </div>
            </swiper-slide>

            <swiper-slide>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="./src/assets/lady staring at sky.JPG" alt="Sunset" className="w-full h-48 object-cover"/>
            <div className="p-4 overflow-scroll overflow-x-hidden">
            <span className="text-sm text-gray-500">Sammy Dew - Blog</span>
            <h2 className="text-lg font-semibold text-gray-800 mt-2">
              I Finally See Colors
            </h2>
            <p className="text-gray-600 mt-2 h-52">
              Take an 8-minutes read of Sammy Dew's "I Finally See Colors". Featured in Derly's Magazine November 2024, Sammy, takes the average person through her expeirnce before understanding the colors in her life and after identify them. <em>Lilac</em>, Sammy say, 'could not be a more perfect color to describe me right now, I feel like royalty each morning'.
            </p>
          </div>
            </div>
            </swiper-slide>

            <swiper-slide>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="./src/assets/nirvana photo.JPG" alt="Nirvana" className="w-full h-48 object-cover" />
            <div className="p-4">
            <span className="text-sm text-gray-500">Derly Colorists - Article</span>
            <h2 className="text-lg font-semibold text-gray-800 mt-2">
              What Are Colors?
            </h2>
            <p className="text-gray-600 mt-2 h-52">
              We are made to see the beauty of life. Through colors we understand how perfection seems perfect and how imperfection seems imperfect. Derly Colorists help us understand what colors are and why they matter in our every-day-life with this 3-minutes read.
            </p>
          </div>
            </div>
            </swiper-slide>

            <swiper-slide>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="./src/assets/woman.JPG" alt="Woman" className="w-full h-48 object-cover"/>
            <div className="p-4">
            <span className="text-sm text-gray-500">Amana Richie - <em>Featured Post</em></span>
            <h2 className="text-lg font-semibold text-gray-800 mt-2">
              The Days Aren't Numbers
            </h2>
            <p className="text-gray-600 mt-2 h-52">
              Once she saw herself just as a little girl from an orphanage, Amana Richie finally pushes herself to defy all the odds against her and wishes to tell you how she does it in this phenomenal post.
            </p>
          </div>
            </div>
            </swiper-slide>
          </swiper-container>
      </main>
      </>
    )
  }