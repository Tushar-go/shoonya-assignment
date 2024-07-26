import banner from "../assets/banner.png"

export const Banner = () => {
  return (
    <div className="bg-[#e0d9cf] mx-3 rounded-md hidden sm:block  ">
      <div className="flex justify-center py-4 ">
        <img className=" w-[1300px] rounded-md" src={banner} alt="banner" />
      </div>
      <div className=" ml-7 ">
      <h3 className=" text-xl">Discover Your Inner Peace</h3>
      <p className=" text-sm pb-6 mt-2 ">Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation.</p>
      </div>
          </div>
  )
}
