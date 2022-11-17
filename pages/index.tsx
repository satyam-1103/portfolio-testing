import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Landing from "../components/Landing";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { PageInfo, Project, SkillType, Social } from "../typings";
import { fetchPageInfo } from "../util/fetchPageInfo";
import { fetchProjects } from "../util/fetchProjects";
import { fetchSkills } from "../util/fetchSkills";
import { fetchSocials } from "../util/fetchSocials";
import Header from "../components/Header";

type Props = {
  pageInfo: PageInfo;
  skills: SkillType[];
  projects: Project[];
  socials: Social[];
};

export default function Home({ pageInfo, skills, projects, socials }: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden z-0  scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin pb-20">
      <Head>
        <title>Satyam's Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section className="snap-start" id="hero">
        <Landing pageInfo={pageInfo} />
      </section>
      <section className="snap-center" id="about">
        <About pageInfo={pageInfo} />
      </section>
      <section className="snap-center" id="skills">
        <Skills skills={skills} />
      </section>
      <section className="snap-start" id="projects">
        <Projects projects={projects} />
      </section>
      <section className="snap-start" id="contact">
        <Contact pageInfo={pageInfo} />
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: SkillType[] = await fetchSkills();
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
