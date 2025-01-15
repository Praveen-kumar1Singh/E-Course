// import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import Cards from "./cards"
import axios from "axios";
import { useEffect, useState } from "react";
const FreeCourses = () => {
    // const filterData = list.filter((data) => data.category === "free");
    // var settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };
    const[book,setBook]=useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try {
             const res = await axios.get("http://localhost:4001/book");
             setBook(res.data.filter((data)=>data.price === 0))
            // setBook(res.data)
            } catch (error) {
                console.log("error :",error)
            }
        }
        getBook();
    },[])
    
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-10 px-4 mt-9">
                <div>
                    <h1 className="text-3xl font-extrabold mb-2 mt-5 md:mt-2">Offered Courses</h1>
                    <p className="mb-5">
  Learn the basics of IT, including coding, networking, and cybersecurity, with flexible, hands-on modules designed for all skill levels. No fees, just knowledge start your tech journey today :) </p>
                </div>
                <div className="">
                    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
                    // {...settings}
                    
                    >
                        
                            {book.map((item)=>(
                                <Cards value={item} key={item.id}/>
                            ))}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default FreeCourses