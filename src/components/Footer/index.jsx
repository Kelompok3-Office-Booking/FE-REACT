import React from "react";
import { logo, facebook, twitter, instagram } from "assets/index";
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className="bg-slate-900 py-12 flex justify-center">
            <div className="container text-white">
                <div className="flex flex-col md:flex-row lg:flex-row justify-between">
                    <div className="flex flex-col content-center">
                        <div className="flex content-center">
                            <img src={logo} alt="logo-better" />
                            <p className="items-center px-4 py-6 text-2xl font-bold">BETTER SPACE</p>
                        </div>
                        <div className="py-8">
                            <p className="text-lg md:w-60 lg:w-96 text-start">Mobile-based applications that will make your life easier for booking a workspace</p>
                        </div>
                        <div className="pt-2 pb-4 flex lg:pt-4">
                            <img src={instagram} alt="instagram" className="pr-4" />
                            <img src={twitter} alt="twitter" className="pr-4" />
                            <img src={facebook} alt="instagram" className="pr-4" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-row lg:px-12">
                        <div className="text-start flex flex-col md:pr-12 lg:px-8 2xl:px-32">
                            <h3 className="font-bold text-lg py-4">MAIN MENU</h3>
                            <Link className="my-1" to="/#home">Home</Link>
                            <Link className="my-1" to="/#testimonial">Testimonial</Link>
                            <Link className="my-1" to="/#feature">Feature</Link>
                            <Link className="my-1" to="/#about">About Us</Link>
                        </div>
                        <div className="text-start flex flex-col">
                            <h3 className="font-bold text-lg pt-8 md:py-4 lg:py-4">CONTACT</h3>
                            <Link className="my-1" to="/#">Savana street 21, Jakarta</Link>
                            <Link className="my-1" to="/#">Better.space@gmail.com</Link>
                            <Link className="my-1" to="/#">081-678-890</Link>
                        </div>
                    </div>
                </div>
                <div className="text-center pt-12">
                    Kelompok 3 Alterra Academy | 2022 Capstone Project
                </div>
            </div>
        </div>
    );
};

export default Footer;