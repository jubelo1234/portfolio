import Image from "next/image";
import next from "@/assets/svgs/next.svg";
import astro from "@/assets/svgs/astro.svg";
import git from "@/assets/svgs/git.svg";
import authJs from "@/assets/svgs/authJs.svg";
import vitest from "@/assets/svgs/vitest.svg";
import react from "@/assets/svgs/react.svg";
import tailwind from "@/assets/svgs/tailwind.svg";
import typescript from "@/assets/svgs/typescript.svg";
import laravel from "@/assets/svgs/laravel.svg";
import motion from "@/assets/images/motion.png";
import zustand from "@/assets/images/zustand.png";
import reactQuery from "@/assets/svgs/react-query.svg";
import redux from "@/assets/svgs/redux.svg";
import zod from "@/assets/images/zod.png";
import hookForm from "@/assets/images/hook-form.png";

export default function Skills() {
  const skillsData = [
    { image: react, name: "React" },
    { image: typescript, name: "Typescript" },
    { image: next, name: "Next js" },
    { image: astro, name: "Astro" },
    { image: laravel, name: "Laravel" },
    { image: tailwind, name: "Tailwind css" },
    { image: zod, name: "Zod" },
    { image: hookForm, name: "React hook form" },
    { image: motion, name: "Motion" },
    { image: zustand, name: "Zustand" },
    { image: redux, name: "Redux" },
    { image: reactQuery, name: "Tanstack query" },
    { image: authJs, name: "Auth js" },
    { image: vitest, name: "Vitest" },
  ];
  return (
    <div className=" w-[90vw] max-w-7xl mx-auto grid gap-3 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(210px,1fr))]">
      {skillsData.map((skill, index) => (
        <div
          key={index}
          className=" py-2.5 pl-3 pr-1  sm:px-3 rounded-[16px] bg-white  flex border border-border  items-center justify-start gap-3.5"
        >
          <div className="relative">
            {skill.name === "Zod" ? (
              <Image
                src={skill.image}
                alt="nextjs"
                className=" w-8 sm:w-10 h-fit relative z-10"
              />
            ) : (
              <Image
                src={skill.image}
                alt="nextjs"
                className=" size-8 min-w-8 min-h-8 sm:size-10 sm:min-w-10 sm:min-h-10 relative z-10"
              />
            )}
            {skill.name === "Motion" && (
              <div className="bg-black absolute z-[1] rounded-[100%] size-[29px] sm:size-[37px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            )}
          </div>
          <p className=" text-sm sm:text-base text-black font-medium truncate">
            {skill.name}
          </p>
        </div>
      ))}
      <div className="flex items-end justify-start px-3 py-1">
        <p className="text-base font-semibold text-black">
          And lot&apos;s more...
        </p>
      </div>
    </div>
  );
}
