import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Button } from "../components/ui/button"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"


export function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        await axios
            .post("http://localhost:4001/user/login", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success("Login Successfull")
                    document.getElementById("my_modal_3").close()
                    // console.log(res.data)
                    
                }
                   
                        // window.location.reload();
                        localStorage.setItem("Users".JSON.stringify(res.data.user))

                   

                
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err)
                    toast.error("Invalid email or password")
                    localStorage.setItem("Users".JSON.stringify(err.response.data.user))
                    setTimeout(() => {

                    }, 2000);

                }
            })
    }
    return (
        <>
            <div>
                <Toaster
                    position="top-center"
                    reverseOrder={true}
                />
                <div className="text-white">
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                                {/* if there is a button in form, it will close the modal */}
                                <Link
                                    to="/"
                                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                    onClick={() => document.getElementById("my_modal_3").close()}
                                >✕
                                </Link>


                                <h3 className="font-bold text-lg">Login</h3>
                                <p className="py-4">Enter the email or password for login.</p>
                                <div className="space-y-4">
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
                                        {errors.email && <span className="text-red-900 ">*This field is required</span>}

                                    </label>
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
                                        <input type="password" {...register("password", { required: true })} className="grow" placeholder="Password" />
                                        {errors.password && <span className="text-red-900 ">*This field is required</span>}

                                    </label>
                                    <div className="flex justify-between items-center">
                                        <Button type="submit" className="hover:bg-white hover:text-black"
                                        >Login</Button>
                                        <h4>Not Registered? <a href="/signup" className="text-pink-700 hover:text-pink-500">Singup</a></h4>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </dialog>
                </div>
            </div>
        </>
    )
}



export default Login