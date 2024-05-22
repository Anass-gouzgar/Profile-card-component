import Image from 'next/image'
import React from 'react'
import victor from '/public/images/image-victor.jpg'
import cardPattern from '/public/images/bg-pattern-card.svg'


const index = () => {
  return (
    <div className="font-kumbh bg-white flex flex-col w-[300px] md:w-[400px] h-[400px] rounded-2xl overflow-hidden relative">

      <Image
        src={cardPattern}
        alt="bg pattern "
        className="h-36 w-full"
        width={0}
        height={0}
      />
      <div className='text-center absolute w-full flex justify-center top-24 '>
              <Image
        src={victor}
        alt="victor "
        className="rounded-full border-[6px] border-white mx-auto absoluted top-24d left-24d cursor-pointer transition duration-300 hover:scale-110 "
        width={0}
        height={0}
      />
      </div>

      <div className="flex justify-center mt-16 gap-3 items-baseline ">
        <h1 className="text-xl font-bold">Victor Crest</h1>{" "}
        <span className="text-Dark-gray">26</span>
      </div>
      <h2 className="text-center mt-3 text-Dark-gray">London </h2>
      <hr className="border-Dark-gray mt-7 opacity-35" />
      <div className="flex justify-between px-6 mt-7">
        <div className='text-center'>
          <h2 className="font-black ">80K</h2>
          <h1 className="text-xlz text-Dark-gray tracking-wider">Followers</h1>
        </div>
        <div className='text-center'>
          {" "}
          <h2 className="font-black ">803K</h2>
          <h1 className="text-xlz text-Dark-gray tracking-wider">Likes</h1>
        </div>
        <div className='text-center'>
          {" "}
          <h2 className="font-black ">1.4K</h2>
          <h1 className="text-xlz text-Dark-gray tracking-wider">Photos</h1>
        </div>
      </div>
    </div>
  );
}

export default index