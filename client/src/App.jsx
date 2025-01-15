import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import Contact from "./pages/Contact"
import About from "../src/pages/About"
import Singup from "./pages/Singup"
import { useAuths } from "./components/AuthProvider"

const App = () => {
  const [authUsers,]=useAuths();
console.log(authUsers);
  return (
    <>
      {/* <Home /> */}
      <div className="dark:bg-slate-800 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses /> } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Singup />} />

        
        </Routes>
      </div>
    </>
  )
}

export default App