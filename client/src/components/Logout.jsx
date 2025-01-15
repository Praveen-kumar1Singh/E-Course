// import React from 'react'

import toast from "react-hot-toast"
import { useAuths } from "./AuthProvider"
import { Button } from "./ui/button"

function Logout() {
    const [authUser,setAuthUser]=useAuths();
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null,
            })
            localStorage.removeItem("Users")
            toast.success("Logout successfully")
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        
            
            
        } catch (error) {
            
            toast.error("error: "+ error.message)
            setTimeout(() => {
                
            }, 3000);
        }
    }
  return (
    <>
    <Button className="bg-red-800" onClick={handleLogout}>Logout</Button>
    </>
  )
}

export default Logout