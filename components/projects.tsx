import prodevsImage from "@/assets/images/prodevs.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
export default function Projects() {
  const projectsData = [
    {
      title: "Prodevs",
      description:
        "A modern, responsive website for ProDevs, a comprehensive talent marketplace that connects global companies with vetted African software developers, designers, and tech professionals. The site showcases multiple hiring models (freelance gigs, full-time placements, managed teams), features detailed service pages for different talent categories, client success stories, and streamlined user flows. Built with a focus on conversion optimization, intuitive navigation, and performance to effectively communicate ProDevs' mission of connecting 1 million talents to opportunities by 2030.",
      role: "Lead Frontend Developer",
      techStack: ["Laravel", "Tailwind CSS", "Javascript", "GSAP"],
      link: "https://prodevs.com",
      image: prodevsImage,
    },
  ];
  return (
    <div>
      {projectsData.map((project, id) => (
        <div key={id}>
          <div>
            <Image src={project.image} alt={project.title} />
          </div>
          <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div>
              {project.techStack.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <p>
              Role: <span>{project.role}</span>
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
