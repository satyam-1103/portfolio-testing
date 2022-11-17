import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { SkillType } from "../typings";
type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w[[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center xl:justify-center xl:items-center xl:py-96"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-8 text-2xl uppercase tracking-[20px] text-gray-400 md:text-left ">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm ">
        Hover over a skill to see profiency
      </h3>

      <div className="grid grid-cols-3 gap-5 mt-32 md:mt-52 xl:grid-cols-4 xl:gap-3">
        {skills.slice(0, skills.length / 2)?.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills.slice(skills.length / 2, skills.length)?.map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}
