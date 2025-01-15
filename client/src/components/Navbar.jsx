import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { ContactIcon, GraduationCapIcon, HouseIcon, MenuIcon, PersonStandingIcon, } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { useEffect, useState } from "react"
import Login from "../pages/Login"
import Logout from "./Logout"
import { useAuths } from "./AuthProvider"

// for dark mode use-- some bug occurs

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
  const element = document.documentElement
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark")
      document.body.classList.add("dark");
    }
    else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light")
      document.body.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <label className="swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" className="theme-controller" value="synthwave" />

        {/* sun icon */}
        <svg
          className="swap-off h-8 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <path
            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        {/* moon icon */}
        <svg
          className="swap-on h-8 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <path
            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
    </>
  )
}


const Navbar = () => {
  const [authUser,] = useAuths();
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      }
      else {
        setSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <div className={`dark:bg-slate-800  dark:text-white items-center z-50 flex flex-row  bg-white  p-4   fixed top-0 left-0 right-0 ${sticky ? "sticky-navbar shadow-md bg-slate-300 duration-300 transition-all ease-in-out"
        : " "
        }`}>
        <div>
          <h1 className="text-xl  md:text-3xl font-bold mr-[20px] md:mx-12 text-black dark:text-white w-full"><a href="/">E-Book</a></h1>
        </div>
        <div className=" flex md:ml-[170px] pl-[259]">
        <div className="hidden md:flex flex-row gap-x-6 font-medium items-center justify-end text-black dark:text-white pl-16 ml-10">
          <h1 className="text-black dark:text-white hover:text-yellow-400 "><a href="/">Home</a></h1>
          <h1><a href="/course">Course</a></h1>
          <h1><a href="/contact">Contact</a></h1>
          <h1><a href="/about">About</a></h1>
          <div className="flex w-full max-w-sm items-center gap-x-2">
            <div className="">
              <Input type="text" placeholder="Search..." />
            </div>
            <DarkMode />
            
            </div>
            
           
           
        </div>
        {
              authUser ? <Logout /> :
                <div className="ml-2.5">
                  <Button className=" dark:bg-slate-400  hover:dark:bg-black dark:text-white ml-[100px] md:ml-[0px]" onClick={() => document.getElementById("my_modal_3").showModal()}>Login</Button>
                  <Login />
                </div>
            }
            </div>
        

        
        <div className="flex md:hidden text-white px-4">
          {/* <MobileNavbar /> */}
          <div className={` flex gap-4 `}>
        <DropdownMenu className="m-3">
          <DropdownMenuTrigger>
            <Button><MenuIcon /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <HouseIcon />
              <a href="/">Home</a></DropdownMenuItem>
            <DropdownMenuItem><GraduationCapIcon /><a href="/course">Course</a></DropdownMenuItem>
            <DropdownMenuItem><ContactIcon /><a href="/contact">Contact</a></DropdownMenuItem>
            <DropdownMenuItem> <PersonStandingIcon /><a href="/about">About</a></DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Theme Control</DropdownMenuItem>
            <DarkMode className="justify-center" />
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
        </div>
        </div>
    

    </>
  )
}

export default Navbar


