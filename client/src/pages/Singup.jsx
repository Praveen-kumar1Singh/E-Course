// import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
// import Login from "./Login"
import Footer from "../components/Footer"
import axios from "axios";
import toast, { Toaster } from "react-hot-toast"
import { Loader } from "lucide-react";


const Singup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password
        }
        await axios
            .post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success("Signup Successfull")
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                }

                localStorage.setItem("Users".JSON.stringify(res.data.user))
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err)
                    toast.error("user already register")
                }
            })
    }
    return (
        <>
            <div className="h-screen">
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
               
                    <div className=" pt-24  h-[500px]  bg-white">

                        <div className="modal-box mx-auto text-white">
                            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                                {/* if there is a button in form, it will close the modal */}
                                <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                                <h3 className="font-bold text-lg">Create a new account</h3>
                                <p className="py-4">Its quick and easy. </p>
                                <div className="space-y-4">
                                    <label className="input input-bordered flex items-center gap-2 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                                            className="h-4 w-4 opacity-70"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                                        <input type="text" {...register("name", { required: true })} className="grow" placeholder="Username" />
                                        {errors.name && <span className="text-red-900 ">*This field is required</span>}                        </label>
                                    <label className="input input-bordered flex items-center gap-2 ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="h-4 w-4 opacity-70">
                                            <path
                                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                            <path
                                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                        </svg>
                                        <input type="email" {...register("email", { required: true })} className="grow" placeholder="Email" />
                                        {errors.email && <span className="text-red-900 ">*This field is required</span>}                        </label>
                                    <label className="input input-bordered flex items-center gap-2 ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="h-4 w-4 opacity-70">
                                            <path
                                                fillRule="evenodd"
                                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                                clipRule="evenodd" />
                                        </svg>
                                        <input type="password" {...register("password", { required: true })} className="grow" placeholder="password" />
                                        {errors.password && <span className="text-red-900">*This field is required</span>}                        </label>
                                    <div className="flex justify-between items-center">
                                        <Button type="submit" className="hover:bg-slate-500 hover:text-black"
                                        >Signup </Button>
                                        <h4>
                                            {/* <a href="" className="text-pink-700 hover:text-pink-500">Login</a> */}
                                            <Link to="/"
                                                className=" dark:bg-slate-400  text-pink-600  hover:text-pink-400  dark:text-white">Already have an Account?</Link>
                                            

                                        </h4>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="mt-36">
                        <Footer />
                    </div>
                
            </div>
        </>
    )
}

export default Singup