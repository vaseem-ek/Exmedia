import React from 'react'
import Dash from './Dash'

function Services() {
    return (
        <div>
            <Dash />
            <div className='my-5 lg:m-20 lg:px-20 md:m-10'>
                <div className='grid md:grid-cols-[1fr_2fr]   grid-cols-1    '>
                    <div className='px-5 flex-col flex  '>
                        <h1 className='text-xl lg:text-3xl font-extrabold'>How We Help You For Brand Positioning & Empower the Business</h1>
                        <p className='text-gray-500 text-justify'>!!Unlock untapped potential and accelerate business with tailored strategies, Dominate the market and leave competitors in the dust !!</p>
                    </div>
                    <div className='  '>
                        <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                            <div className='px-5'>
                                <h1 className='text-xl py-3 lg:text-2xl font-extrabold'>Branding strategies
                                </h1>
                                <p className='text-gray-900 text-justify'>Identities come to life, our expertise lies in shaping brands that resonate deeply and endure. With a keen understanding of market dynamics, we craft strategic brand identities that leave lasting imprints.</p>
                            </div>
                            <div  className='px-5'>
                                <h1 className='text-xl py-3 lg:text-2xl font-extrabold'>Product photography/ video

                                </h1>
                                <p className='text-gray-900 text-justify'>We Craft Captivating Visuals, In Photography or Videography, We Transform Concepts Into Breathtaking Realities That Leave Lasting Impressions & Deliver each frame and note with excellence.</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                            <div  className='px-5'>
                                <h1 className='text-xl py-3 lg:text-2xl font-extrabold'>Al Web, Mobile App

                                </h1>
                                <p className='text-gray-900 text-justify'>Delivering services harness the power of AI to deliver customized, efficient, and user-friendly digital solutions, which will help the rapid growth of businesses and operational productivity with transformative technology.</p>
                            </div>
                            <div  className='px-5'>
                                <h1 className='text-xl  py-3 lg:text-2xl font-extrabold'>Social media


                                </h1>
                                <p className='text-gray-900 text-justify'>Embrace digital transformation, reach global audiences, and drive growth effortlessly. Enhance customer engagement, streamline operations, and stay ahead of the competition. With ex technology, We will design your business profile so that your customers know you well on the Google platform, Meta platforms, and other leading web handles..</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Services
