import React, { useEffect, useState } from "react";
import { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10 } from "assets";
import { Rating } from "@mui/material";
import { testimonials } from "store/dataTestimonials";
import Carousel from 'better-react-carousel'
import "./style.css";

const Card = ({ name, comment, time, rating, imgUrl }) => (
    <div data-aos="zoom-in" className="h-auto mr-4 mr-4 lg:mr-0 lg:ml-12 lg:w-3/4 mb-8 bg-black rounded-3xl text-white border-gray-400 border-8">
        <div className="flex flex-col text-end content-between p-4">
            <div>
                <h3 className="h-20 font-bold text-xl">" {comment} "</h3>
            </div>
            <div className="content-end">
                <p className="text-lg font-semibold">{name}</p>
                <p>{time}</p>
                <div className="py-1">
                    <Rating name="half-rating-read" defaultValue={rating} precision={0.5} className="stroke-slate-500" readOnly />
                </div>
            </div>
            <div className="absolute">
                <img src={require(`../../assets/img/testimonials/${imgUrl}.svg`)} className="relative w-3/4 top-16 right-12" alt="" />
            </div>
        </div>
    </div>
)

const Testimonials = () => {

    const [testimonial, setTestimonial] = useState(testimonials);
    // const TestiImage = { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10 }

    useEffect(() => {
        setTestimonial(testimonials);
    }, [testimonials])

    // console.log(testimonial)

    return (
        <div className="flex pt-16 flex-col lg:pt-32" id="testimonials">
            <div data-aos="fade-up" className="flex container flex-col justify-center">
                <div className="text-start pb-20">
                    <h1 className="font-bold text-2xl lg:text-4xl pb-2 lg:pb-8">Comfort and happy customers is our achievement !</h1>
                    <div className="flex justify-start py-4">
                        <hr className="w-2/4 lg:w-1/3 border-b-slate-900 border-b-4 border-t-0" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col container">
                <Carousel cols={3} rows={2} gap={0} loop autoPlay>
                    {
                        testimonial.map((testi) => {
                            return (
                                <Carousel.Item>
                                    <Card
                                        key={testi.id}
                                        name={testi.name}
                                        comment={testi.comment}
                                        rating={testi.rating}
                                        time={testi.time}
                                        imgUrl={testi.img}
                                    />
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </div>
        </div >
    )
}

export default Testimonials;