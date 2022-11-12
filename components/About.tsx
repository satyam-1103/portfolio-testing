import React from 'react'
import {motion} from "framer-motion"
type Props = {}

export default function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400">
        About
      </h3>

      
        <motion.img src="https://cdn.sanity.io/images/wyhw4a45/production/0fdf3e0282437a91543315a118ed563be182d6f3-3888x5184.jpg" alt="about" className="w-96 h-96 object-cover flex-shrink-0 flex items-center justify-center mx-auto mt-10  rounded-full w-56 h-56 -mb-20 flex-grow-0 md:mb-0    md:rounded-lg md:w-64 md:h-96 xl:w-[200px] xl:h-[200px]" initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }} />
      

      <div className="space-x-10 px-0">
        <h4 className="text-3xl text-semibold">
          <span className="text-[#fca311] tracking-[10px] opacity-80 uppercase">
            Who
          </span>{" "}
          am I?
        </h4>

        <p>
          Hello, I'm Satyam Srivastava. I am pursuing my Bachelor's of
          Technology from Mangalmay Institute of Engineering and Technology,
          Greater Noida . I have knowledge of{""}
          <span className="text-[#fca311] tracking-[7px] mx-3">
            React.Js, Next.Js, TailwindCSS
          </span>{" "}
          and much more. Check out my{" "}
          <button className="heroButton">Projects</button> and{" "}
          <button className="heroButton">Skills</button> for more info.
        </p>
      </div>
    </div>
  )
}