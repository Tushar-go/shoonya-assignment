import React from 'react'

export const Card = ({imglink,title,description,date,location,price}) => {
  return (
    <div className=" flex flex-col min-h-[300px] bg-[#e0d9cf] col-span-1 rounded-md p-3 gap-2">
      <div>
        <img className=" w-52 h-44 rounded-xl object-cover" src={imglink} alt="img" />
      </div>
      <h3 className=" text-xl font-medium">{title}</h3>
      <p className=" text-sm">{description}</p>
      <p className=" text-sm">Date: {date}</p>
      <p className=" text-sm">Location: {location}</p>
      <p className=" text-sm">Price: ${price}</p>

      </div>
  )
}
