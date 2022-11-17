import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-400">
        About
      </h3>

      <motion.img
        src={urlFor(pageInfo?.profileImage).url()}
        alt="about"
        className=" object-cover flex-shrink-0 flex items-center justify-center mx-auto mt-10  rounded-full w-56 h-56 -mb-20 flex-grow-0 md:mb-0    md:rounded-lg md:w-64 md:h-96 xl:w-96 xl:h-96"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      />

      <div className="space-x-10 px-0 ">
        <h4 className="text-3xl text-semibold ml-16">
          <span className="text-[#fca311] tracking-[10px] opacity-80 uppercase">
            Who
          </span>{" "}
          am I?
        </h4>

        <p className="text-center font-light tracking-wide text-base">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </div>
  );
}
