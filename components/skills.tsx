import type { FC, ReactNode } from 'react';

import { SiC, SiCplusplus, SiTypescript, SiDjango, SiExpress, SiMysql, SiTailwindcss, SiPostman, SiJsonwebtokens } from "react-icons/si";
import { FaPython, FaPhp, FaNode, FaReact, FaCss3Alt, FaGit, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiCodeBlock } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { TiHtml5 } from "react-icons/ti";
import { RiNextjsFill } from "react-icons/ri";
import { TbBinaryTree, TbRegex } from 'react-icons/tb';
import { PiMathOperationsBold } from 'react-icons/pi';

const Skills: FC = (): ReactNode => {

  const languages: skill[] = [
    { name: "C", icon: <SiC className="text-[#8fbbee]" /> },
    { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
    { name: "JavaScript", icon: <IoLogoJavascript className="text-[#F7DF1E]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "PHP", icon: <FaPhp className="text-[#8892BE]" /> },
  ];

  const frontendSkills: skill[] = [
    { name: "HTML", icon: <TiHtml5 className="text-[#E34F26]" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "JavaScript", icon: <IoLogoJavascript className="text-[#F7DF1E]" /> },
    { name: "React JS", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Next JS", icon: <RiNextjsFill className="text-foreground" /> },
  ];

  const backendSkills: skill[] = [
    { name: "Django", icon: <SiDjango className="text-[#1a6348]" /> },
    { name: "Node JS", icon: <FaNode className="text-[#339933]" /> },
    { name: "Express JS", icon: <SiExpress className="text-muted-foreground" /> },
    { name: "JWT Auth", icon: <SiJsonwebtokens className="text-[#dc1818]" /> },
    { name: "PHP", icon: <FaPhp className="text-[#8892BE]" /> },
    { name: "REST API", icon: <BiCodeBlock className="text-[#cbce44]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#00758F]" /> },
  ];

  const problemSolving: skill[] = [
    { name: "Regular Expressions", icon: <TbRegex className="text-[#64B5F6]" /> },
    { name: "DSA", icon: <TbBinaryTree className="text-[#4CAF50]" /> },
    { name: "Numerical Methods", icon: <PiMathOperationsBold className="text-[#9C27B0]" /> },
  ];

  const tools: skill[] = [
    { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
    { name: "Git", icon: <FaGit className="text-[#F05032]" /> },
    { name: "GitHub", icon: <FaGithub className="text-foreground" /> },
    { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> }
  ];

  const skillCategory = (title: string, skills: skill[]): ReactNode => (
    <article className="flex-1 space-y-6 md:space-y-8 p-4 sm:p-6 bg-card rounded-lg border border-border shadow-sm">
      <h3 className="text-2xl sm:text-3xl font-semibold text-center text-card-foreground">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-10">
        {skills.map((x, idx) => (
          <div key={idx} className="flex flex-col items-center text-center group">
            <div className="text-5xl sm:text-6xl text-primary group-hover:scale-110 transition-transform duration-200 ease-in-out">
              {x.icon}
            </div>
            <span className="mt-2 cursor-default text-base sm:text-lg font-medium text-muted-foreground transition-colors duration-200 ease-in-out">
              {x.name}
            </span>
          </div>
        ))}
      </div>
    </article>
  );

  return (
    <section id="skills" className="scroll-mt-12 w-full bg-background pt-5 pb-16 px-6">
      <div className="space-y-6 text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
          Skills & <span className="text-primary">Technologies</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A comprehensive overview of the technical expertise and tools I leverage to build robust and innovative solutions.
        </p>
      </div>

      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {skillCategory("Programming Languages", languages)}
        {skillCategory("Frontend Development", frontendSkills)}
        {skillCategory("Backend Development", backendSkills)}
        {skillCategory("Problem Solving", problemSolving)}
        <div className="md:col-span-2 flex justify-center">
          <div className="w-full md:w-[calc(50%-1rem)]">
            {skillCategory("Development Tools", tools)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
