// import React from 'react'

import { Button } from "./ui/button"

const cards = ({value}) => {
    // console.log(value)
  return (
    <>
    <div className="mt-6 mb-5 p-3 hover:scale-105 duration-300">
    <div className="card bg-white dark:bg-slate-800 dark:text-white  w-72 shadow-xl">
  <figure>
    <img
      src={value.image}
      alt="course" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    {value.name}
      <div className="badge badge-secondary">{value.category}</div>
    </h2>
    <p>{value.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${value.price}</div>
      {/* <div className="badge badge-outline">Products</div> */}
      <Button className="h-8 w-16 text-xs"><a href="/signup">Buy Now</a></Button>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default cards