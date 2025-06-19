import type { FC, ReactNode } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const projectsData: Project[] = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing my skills, projects and experience.",
    sourceCode: "https://github.com/coder-peris/portfolio/",
    demo: null,
    technologies: "NextJS, Tailwind CSS, TypeScript, Git",
    image: "/projects/portfolio.png",
  },
  {
    title: "Currency Converter App",
    description: "Currency converter helps convert currency of one country into another.",
    sourceCode: "https://github.com/coder-peris/Currency_converter/",
    demo: "https://coder-peris.github.io/Currency_converter/",
    technologies: "JavaScript, HTML, CSS, API Integration, Git",
    image: "/projects/currency_converter.png",
  },
  {
    title: "Grocery List",
    description: "A web app that helps users to keep notes of grocery list.",
    sourceCode: "https://github.com/coder-peris/grocery_list/",
    demo: "https://coder-peris.github.io/grocery_list/",
    technologies: "ReactJS, CSS, LocalStorage, Git",
    image: "/projects/grocery_list.png",
  },
  {
    title: "React JS Blog App",
    description: "It’s a frontend multipage blog app built with React JS.",
    sourceCode: "https://github.com/coder-peris/blog_app/",
    demo: "https://coder-peris.github.io/blog_app/",
    technologies: "React JS, CSS, Axios API, Context API, Easy-Peasy-Redux, Git",
    image: "/projects/react_blog.png",
  },
  {
    title: "Django Blog App",
    description: "A blog app built with Django, allowing users to sign up, login and post articles.",
    sourceCode: "https://github.com/coder-peris/Django-blog_app",
    demo: null,
    technologies: "Django, Python, SQLite, HTML, CSS, Git",
    image: "/projects/django_blog.png",
  },
  {
    title: "Online Suggestion Box",
    description: "A web application that allows users to submit suggestions and feedback.",
    sourceCode: "https://github.com/coder-peris/online_suggestion_box",
    demo: null,
    technologies: "Django, Python, HTML, CSS, SQLite, Git",
    image: "/projects/suggestion_box.png",
  },
];

const Projects: FC = (): ReactNode => {
  return (
    <section id="projects" className="scroll-mt-12 w-full pt-5 bg-muted/30 px-6 pb-16">
      <div className="space-y-6 text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects</h2>
        <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
          An overview of some projects demonstrating my skill in web development.
        </p>
      </div>
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {projectsData.map((project, idx) => (
          <article
            key={idx}
            className="bg-background flex flex-col rounded-xl border border-border p-5 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group"
          >
            <div className="relative h-[220px] w-full rounded-md overflow-hidden border-2 border-muted-foreground shadow-xl">
              <Image
                src={project.image}
                alt={project.title}
                className="object-top-left w-full"
                width={500}
                height={0}
                priority={idx < 3}
              />
              <div className="absolute inset-0 bg-imgmask pointer-events-none" />
            </div>

            <div className="mt-5 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-card-foreground">{project.title}</h3>
              <p className="text-muted-foreground mt-2 flex-grow leading-relaxed">
                {project.description}
              </p>
              <p className="mt-3 text-md italic text-muted-foreground">
                Technologies Used: <span className="bg-primary/10 rounded-full px-3 py-1 self-start">{project.technologies}</span>
              </p>
              <div className="mt-6 flex gap-3">
                <Button asChild size="sm" variant="outline">
                  <Link href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="mr-2 h-5 w-5" />
                    Code
                  </Link>
                </Button>
                {project.demo && (
                  <Button asChild size="sm">
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <BiLinkExternal className="mr-2 h-5 w-5" />
                      Demo
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;