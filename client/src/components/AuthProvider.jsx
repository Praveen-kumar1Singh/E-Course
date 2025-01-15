import  { createContext, useContext, useState } from 'react'
// import react from 'react';
export const AuthContext = createContext()
export default function AuthProvider( { children } ) {
    const initialAuthUser = localStorage.getItem("Users");
    const [authUser,] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    )
  return (
    <AuthContext.Provider value={[authUser,]}>
        { children }
    </AuthContext.Provider>
  )
}

export const useAuths = () => useContext(AuthContext)