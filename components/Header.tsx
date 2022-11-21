import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social, PageInfo } from "../typings";

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
};

export default function Header({ socials, pageInfo }: Props) {
  return (
    <header className="flex sticky top-0 items-start justify-between max-w-5xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        className="flex flex-row items-center space-x-2"
        initial={{ y: -100, scale: 0.5, opacity: 0.5 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {socials.map((social) => {
          return (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="#fff"
              bgColor="transparent"
            />
          );
        })}
      </motion.div>

      <motion.div
        className="flex flex-row items-center text-gray-300 cursor-pointer"
        initial={{ x: 20, scale: 0.5, opacity: 0.5 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SocialIcon
          network="email"
          className="cursor-pointer"
          bgColor="transparent"
          fgColor="white"
          url={`mailto://${pageInfo.email}`}
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400 ml-3">
          Contact Me
        </p>
      </motion.div>
    </header>
  );
}
