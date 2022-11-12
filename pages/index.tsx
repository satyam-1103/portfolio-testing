import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Landing from "../components/Landing";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../util/fetchPageInfo";
import { fetchProjects } from "../util/fetchProjects";
import { fetchSkills } from "../util/fetchSkills";
import { fetchSocials } from "../util/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({ pageInfo, skills, projects, socials }: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 ">
      <Head>
        <title>Satyam's Portfolio</title>
      </Head>

      <section className="snap-start" id="hero">
        <Landing />
      </section>
      <section className="snap-center" id="about">
        <About />
      </section>
      <section className="snap-center" id="skills">
        <Skills />
      </section>
      <section className="snap-start" id="projects">
        <Projects />
      </section>
      <section className="snap-start" id="contact">
        <Contact />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              src="https://i.imgur.com/e2y06A.png"
              alt=""
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      skills,
      projects,
      socials,
    },
  };
};
