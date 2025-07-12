import prodevsImage from "@/assets/images/prodevs2.jpg";
import talentApplyImage from "@/assets/images/talentApply.png";
import khnlImage from "@/assets/images/khnl.png";
import wealthAppImage from "@/assets/images/wealthapp.jpg";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
export default function Projects() {
  const projectsData = [
    {
      title: "Prodevs",
      description:
        "A modern, responsive website for ProDevs, a talent marketplace connecting global companies with vetted African software developers and tech professionals. The site showcases multiple hiring models (freelance, full-time, managed teams), features service pages for different talent categories, client success stories, and streamlined user flows. Built with a focus on conversion optimization and performance.",
      role: "Lead Frontend Developer",
      techStack: ["Laravel", "Tailwind CSS", "Javascript", "GSAP"],
      link: "https://prodevs.io",
      image: prodevsImage,
    },
    {
      title: "Talent Apply",
      description:
        "An AI-powered job search platform that streamlines the entire application process with automated job matching, application tracking, resume analysis, and interview preparation tools. The comprehensive career management solution helps job seekers optimize their search with personalized insights and AI-driven recommendations for faster, more confident job applications.",
      role: "Frontend Developer",
      techStack: ["React", "Tailwind CSS", "Javascript", "Framer motion"],
      link: "https://www.talentapply.io",
      image: talentApplyImage,
    },
    {
      title: "KHNL  Management System",
      description:
        "A comprehensive web application designed and built for the KHNL travel and tour agency to manage client bookings, trip requests, and financial operations. The platform streamlines business operations by providing tools for tracking customer inquiries, handling financial transactions, managing individual client beneficiaries, and overseeing corporate client personnel in one centralized system.",
      role: "Lead Frontend Developer",
      techStack: ["Next js", "Tailwind CSS", "Typescript", "Auth js"],
      image: khnlImage,
    },
    {
      title: "WealthApp Website",
      description:
        "A marketing website for the Wealth real estate investment platform that simplifies property buying, flipping, and investment management. The site showcases the mobile app's features including property discovery, investment tracking, crowdfunding opportunities, and community engagement, designed to attract users and promote app downloads for real estate investors.",
      role: "Sole Frontend Developer",
      techStack: ["React", "Tailwind CSS", "Javascript", "Framer motion"],
      link: "https://wealthapp.live/",
      image: wealthAppImage,
    },
  ];
  return (
    <div className="w-[90vw] max-w-7xl mx-auto space-y-10 md:space-y-14 lg:space-y-16 laptop:space-y-[100px]">
      {projectsData.map((project, id) => (
        <div
          key={id}
          className={`w-full flex flex-col gap-4 md:gap-7 laptop:odd:flex-row laptop:even:flex-row-reverse laptop:gap-16`}
        >
          <div className="w-full laptop:w-[47.5%] laptop:min-w-[47.5%] sm:h-[300px] md:h-[350px] laptop:h-[430px] h-[220px] relative overflow-hidden rounded-[12px] shadow-[0_0_64px_0_#0000001A] border-2 border-main">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full object-cover object-top absolute"
            />
          </div>
          <div className="lg:flex lg:flex-col lg:justify-center laptop:flex-grow ">
            <h2 className=" text-[27px] md:text-[33px] md:leading-[39px] lg:text-[40px] lg:leading-tight font-bold">
              {project.title}.
            </h2>
            <p className="text-text text-base mt-0.5 md:mt-2.5 ">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 my-3.5 sm:my-4">
              {project.techStack.map((tech, index) => (
                <span
                  className="bg-black text-white rounded-[50px] px-3 py-1 text-xs capitalize"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className=" mb-3.5 sm:mb-5 text-text font-medium text-base">
              Role: <span className="text-black">{project.role}</span>
            </p>
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  effect="gooeyLeft"
                  className="bg-main hover:bg-main w-[160px]"
                >
                  <span>See It Live</span>
                  <ExternalLink />
                </Button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
