import React from "react";

function Hero() {
    return (
        <div className="relative min-h-screen flex items-center px-10 lg:px-36">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/035/327/366/small/ai-generated-peaceful-lush-greenery-in-natural-environment-photo.jpeg')" }}></div>
            
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="relative text-start text-white">
                <h2 className="animated-gradient-text text-4xl md:text-6xl font-bold">
                    Think beyond
                </h2>
                <h2 className="animated-gradient-text text-4xl md:text-6xl font-bold">
                    Your Ads
                </h2>
                <p className="lg:text-4xl lg:py-4 py-2 md:text-2xl text-gray-300 w-1/2">
                    We are driving brand success through innovation, creativity, and strategic excellence.
                </p>
                <div className="my-3 md:my-6 lg:my-10">
                    <button className="px-6 py-2 font-semibold border-2 hover:text-violet-400 cursor-pointer transition-all duration-300 hover:border-gradient">
                        GET IN TOUCH
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
