import React, { useState } from "react";

function Hero() {



    return (
        <div className="flex  justify-start px-10 pt-14 lg:px-36 lg:py-30 min-h-screen ">
            <div className="text-start">
                <h2 className="animated-gradient-text text-4xl md:text-6xl font-bold">
                    Think beyond
                </h2>
                <h2 className="animated-gradient-text text-4xl md:text-6xl font-bold">
                    Your Ads
                </h2>
                <p className="lg:text-4xl lg:py-4 py-2  md:text-2xl  text-gray-400 w-1/2">! We are driving brand success through innovation, creativity, and strategic excellence. !</p>
                <div className="my-3 md:my-6 lg:my-10">
                    <button className="px-6 py-2  font-semibold border-3 hover:text-violet-400 cursor-pointer transition-all duration-300 hover:border-gradient">
                        GET IN TOUCH
                    </button>

                </div>

            </div>
        </div>
    );
}

export default Hero;