import React from 'react'
import Link from "next/link";
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

type Props = {}

export default function Landing({}: Props) {
    const [text, count] = useTypewriter({words: [
        "Hello, I' am Satyam Srivastava.",
        "Front-end Developer",
        "UI Designer",
      ],
      loop: true,
      delaySpeed: 2000,})
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        src="https://cdn.sanity.io/images/wyhw4a45/production/53fb6c3c9a22ea0235b03a0f593d66e878106a86-3888x5184.jpg"
        alt="profile pic"
        
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h1 className="tracking-[10px] uppercase text-gray-600 text-lg opacity-60">
          Software Developer
        </h1>
        <h1>
          <span>{text}</span>
          <Cursor cursorColor="#fca311" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  )
}