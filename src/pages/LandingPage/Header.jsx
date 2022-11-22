import React from "react";
import { appstore, googleplay, gambar_header } from "assets";

const Headers = () => {
    return (
        <div id="header">
            <div className="flex justify-center lg:py-32 2xl:py-48">
                <div className="container">
                    <div className="flex flex-row md:justify-center lg:px-20 lg:justify-between">
                        <div className="py-12">
                            <h1 className="font-bold text-center md:text-start text-4xl lg:text-5xl leading-snug 2xl:text-7xl">Find your best <br /> Workspace!</h1>
                            <p className="text-xl py-8 text-center md:text-start font-semibold lg:w-[460px] lg:text-base 2xl:text-xl 2xl:w-[500px]">Mobile-based applications that will make your life easier for booking a workspace</p>
                            <div className="flex justify-center lg:justify-start">
                                <img src={googleplay} alt="google-play" className="mr-4 w-32 lg:w-40 2xl:w-48" />
                                <img src={appstore} alt="google-play" className="w-32 lg:w-40 2xl:w-48" />
                            </div>
                        </div>
                        <div className="lg:py-12">
                            <img src={gambar_header} alt="gambar header" className="absolute invisible lg:visible lg:w-96 2xl:w-auto" id="image-header" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headers;