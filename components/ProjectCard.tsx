import React from "react";
import {motion} from "framer-motion"
import Link from "next/link"
type Props = {}
export default function ProjectCard ({} : Props) {
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] h-[600px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden cursor-pointer">
      
        
      
        <motion.img
          src="https://cdn.sanity.io/images/wyhw4a45/production/070101688abc47bc9df748cfc22bdb1d68bfc5f3-500x500.png"
          alt="projectLogo"
          initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
          className="w-32 h-32 rounded-full object-cover xl:w-[200px] xl:h-[200px] object-center"
        />
      
      <div className="px-2 md:px-10">
        <h4 className="text-3xl font-light">NewsHub</h4>
        <div className="flex items-center justify-center space-x-2 my-2">
          {/* Technologies Used */}
          <motion.img
            src="https://cdn.sanity.io/images/wyhw4a45/production/0b5634b00998cd9c85c300ebd66962b4555d6b84-1200x630.png"
            alt="react-js"
            
            className="w-8 h-8 object-cover"
          />
          <motion.img
            src="https://cdn.sanity.io/images/wyhw4a45/production/fcbbe76ecaabf7c9750628acfbd991ba246bb9b2-1200x956.png"
            alt="bootstrap"
            
            className="w-8 h-8 object-cover"
          />
        </div>
        <p className="text-lg mt-1">
          NewsHub is an web Application built using ReactJS, and
          React-bootstrap. It uses NewsApi to fetch latest news.
        </p>
        <div className="mt-8">
          <Link href="" className="heroButton">
            Check Project Here
          </Link>
        </div>
      </div>
    </article>
}