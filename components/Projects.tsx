import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { urlFor } from "../sanity";
import { Project } from "../typings";
type Props = { projects: Project[] };
export default function Projects({ projects }: Props) {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 ">
        Projects
      </h3>

      <div className="mt-8 md:mt-20 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80  ">
        {projects.map((project, i) => {
          return (
            <div
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-between p-20 md:p-44 mb-20"
              key={project?._id}
            >
              <img
                src={urlFor(project?.image).url()}
                className="w-32 h-32 object-cover rounded-full xl:w-40 xl:h-40 xl:rounded-lg "
              />

              <div className="mt-8 space-y-10 px-0 md:px-10 max-w-5xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#f7ab0a]/50">
                    Project {i + 1} of {projects.length}:
                  </span>
                  {project?.title}
                </h4>
                <div className="flex items-center justify-center space-x-3">
                  {project?.technologies.map((technology) => (
                    <img
                      key={technology._id}
                      src={urlFor(technology.image).url()}
                      alt="Tech Used"
                      className="w-10 h-10 rounded-full object-cover md:rounded-lg"
                    />
                  ))}
                </div>
                <p>{project?.summary}</p>
                <div className="text-center text-xl ">
                  <a
                    href={project.linkToBuild}
                    target="_blank"
                    className="text-gray-400/50 rounded-full transition-all duration-150 hover:text-[#f7ab0a]/60 border border-gray-500 p-3 hover:border-[#f7ab0a]/40 px-4"
                  >
                    Have a Look @Project
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7AB0A]/10 left-0 h-[300px] skew-y-[18deg] " />
    </div>
  );
}
