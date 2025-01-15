// import React from 'react'
import Cards from "./cards"
import { Button } from "./ui/button"
import { Separator } from "@radix-ui/react-dropdown-menu"
import { useEffect, useState } from "react"
import axios from "axios"



const Course = () => {
    const[book,setBook]=useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try {
             const res = await axios.get("http://localhost:4001/book");
             setBook(res.data)
            } catch (error) {
                console.log("error :",error)
            }
        }
        getBook();
    },[])
    return (
        <>
            <div className="min-h-screen max-w-screen-2xl container mx-auto bg-white md:px-20 px-4 dark:bg-slate-800 dark:text-white">
          <div className="pt-24 space-y-5 md:pt-28 items-center justify-center text-center">
                    <h1 className="text-left font-bold md:text-4xl text-2xl underline">Courses</h1>
                    <Separator/>
                    <h1 className="text-xl md:text-4xl font-semibold">we are delighted to have you <span className="text-pink-700">here! :)</span>
                    </h1>
                    <p className="text-center">Discover the power of knowledge with our comprehensive IT courses. 
          Whether you're just starting or looking to advance your skills, we’ve got the perfect learning path for you. 
          Let’s turn your tech dreams into reality!</p>
                    <Button className="w-1/6 dark:bg-slate-400 hover:dark:bg-black hover:text-white"><a href="/">Back</a></Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {
                        book.map((item) => (
                            <Cards value={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course