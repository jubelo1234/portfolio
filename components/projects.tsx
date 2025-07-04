import prodevsImage from "@/assets/images/prodevs2.jpg";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
export default function Projects() {
  const projectsData = [
    {
      title: "Prodevs",
      description:
        "A modern, responsive website for ProDevs, a talent marketplace connecting global companies with vetted African software developers and tech professionals. The site showcases multiple hiring models (freelance, full-time, managed teams), features service pages for different talent categories, client success stories, and streamlined user flows. Built with a focus on conversion optimization and performance.",
      role: "Lead Frontend Developer",
      techStack: ["Laravel", "Tailwind CSS", "Javascript", "GSAP"],
      link: "https://prodevs.com",
      image: prodevsImage,
    },
  ];
  return (
    <div className="w-[90vw] max-w-7xl mx-auto">
      {projectsData.map((project, id) => (
        <div
          key={id}
          className="w-full flex flex-col gap-4 lg:grid grid-cols-2 laptop:gap-16"
        >
          <div className="w-full lg:h-[430px] h-[200px] relative overflow-hidden rounded-[12px] shadow-[0_0_64px_0_#0000001A] border-2 border-main">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full object-cover object-top absolute"
            />
          </div>
          <div className="lg:flex lg:flex-col lg:justify-center ">
            <h2 className="lg:text-[40px] lg:leading-tight font-bold">
              {project.title}
            </h2>
            <p className="text-text text-base mt-2.5 ">{project.description}</p>
            <div className="flex flex-wrap gap-2 my-4">
              {project.techStack.map((tech, index) => (
                <span
                  className="bg-black text-white rounded-[50px] px-3 py-1 text-xs capitalize"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mb-5 text-text font-medium text-base">
              Role: <span className="text-black">{project.role}</span>
            </p>
            {project.link && (
              <Link href={project.link}>
                <Button>Visit Live Site</Button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
