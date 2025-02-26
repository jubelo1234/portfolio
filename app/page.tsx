import linkedInImg from "@/assets/svgs/linkedin2.svg";
import githubImG from "@/assets/svgs/github2.svg";
import profileImg from "@/assets/images/profile-img.png";
import profilebg from "@/assets/images/profile-bg.jpg";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/images/abt-side.png";

export default function Home() {
  return (
    <>
      <main>
        <section className="relative h-fit laptop:h-[100dvh] laptop:min-h-[600px] laptop:max-h-[750px] pt-[120px] sm:pt-[150px] md:pt-[130px] nine:pt-[150px] laptop:pt-[80px] w-[90vw] mx-auto max-w-web-max laptop:flex justify-center items-center">
          <div className=" py-3.5 sm:py-4 absolute top-0 w-full">
            <nav className=" flex justify-between ">
              <div className="flex justify-start items-center gap-2">
                <Link href="#">
                  <Image
                    src={linkedInImg}
                    alt="checkout my linkedin profile"
                    className=" w-10 sm:w-12"
                    priority={true}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={githubImG}
                    alt="checkout my github profile"
                    className=" w-10 sm:w-12"
                    priority={true}
                  />
                </Link>
              </div>
              <Button
                effect="gooeyLeft"
                className="bg-main group-hover:bg-main hover:bg-main text-light font-semibold text-sm sm:text-base h-[42px] sm:h-[46px] rounded-[10px] text-center px-5 sm:px-8"
              >
                My Resume
              </Button>
            </nav>
          </div>

          {/* Hero section */}
          <div className="flex flex-col-reverse gap-6 sm:gap-10 laptop:gap-16 md:flex-row md:justify-between items-center w-full">
            <div className="text-center md:text-left md:max-w-[50%]">
              <h1 className="text-[32px] leading-10 five:text-4xl sm:text-[44px] sm:leading-tight lg:text-5xl lg:leading-[1.3] font-bold text-black font-funnel ">
                Hey there!, <br className=" sm:hidden" />
                <span className="gradient-text">I&apos;m Berechiah</span>
              </h1>
              <p className="pt-3 sm:pt-4 text-text text-base sm:text-lg max-w-[620px] laptop:max-w-[576px] font-medium">
                A passionate{" "}
                <span className="font-semibold text-black ">
                  frontend developer
                </span>
                {"  "}
                who loves turning designs into user-friendly, sleek, responsive,
                and interactive digital experiences. Let’s build something
                amazing together.
              </p>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4 five:grid-cols-2 mt-5 sm:mt-7 max-w-[620px] laptop:max-w-[565px]">
                <Link href="#">
                  <Button
                    effect="shineHover"
                    className="bg-main  hover:bg-main text-light font-semibold w-full text-sm sm:text-base h-[46px] rounded-[10px] text-center px-2"
                  >
                    View My Work
                  </Button>
                </Link>
                <Link href="#">
                  <Button
                    effect="shineHover"
                    className="bg-black hover:bg-black text-light font-semibold w-full text-sm sm:text-base h-[46px] rounded-[10px] text-center px-2"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className=" size-[170px] sm:size-[200px] md:size-[280px] nine:size-[300px] laptop:size-[420px] relative rounded-[100%] overflow-hidden outline outline-2 outline-main outline-offset-[6px] sm:outline-offset-[8px] ">
              <Image
                src={profileImg}
                alt="my photo"
                className="absolute w-full h-full inset-0 object-cover object-center z-10 "
                priority={true}
              />
              <div className="absolute top-0 bg-black size-full z-[3] opacity-10"></div>
              <Image
                src={profilebg}
                alt="my photo"
                className="absolute w-full h-full inset-0 object-cover object-center z-[1]"
                priority={true}
              />
            </div>
          </div>
        </section>
        <section className="relative laptop:h-[100dvh] mt-16 sm:mt-[84px] lg:mt-[108px] laptop:mt-0 laptopmin-h-[600px] laptop:max-h-[750px] place-items-center w-[90vw] max-w-7xl grid grid-cols-1 laptop:grid-cols-2 gap-10 mx-auto">
          <Image
            src={aboutImg}
            alt="curved background svg"
            className="hidden laptop:inline-block"
          />
          <div className="  ">
            <h1 className="text-[32px] text-center sm:text-left leading-10 five:text-4xl sm:text-[44px] sm:leading-tight lg:text-5xl lg:leading-[1.3] font-bold text-black font-funnel ">
              About me
            </h1>
            <p className="pt-3 sm:pt-4 text-text text-base sm:text-lg  laptop:text-left">
              I’m a dedicated frontend developer with a sharp eye for detail and
              <span className="font-semibold text-orange-500">
                {" "}
                years of experience working with React.
              </span>{" "}
              I specialize in building{" "}
              <span className="font-semibold text-orange-500">
                {" "}
                scalable, high-performance web applications
              </span>{" "}
              that are both visually appealing and highly functional. <br />{" "}
              <br /> Over the years, I’ve worked with{" "}
              <span className="font-semibold text-orange-500">
                {" "}
                various companies,
              </span>{" "}
              helping them create seamless user experiences through clean,
              maintainable code, intuitive interfaces, and optimized
              performance. I take pride in refining every detail, ensuring that
              the applications I build are not only efficient but also engaging
              and accessible. <br /> <br />
              Always eager to learn, I stay up to date with the{" "}
              <span className="font-semibold text-orange-500">
                {" "}
                latest technologies
              </span>{" "}
              and best practices to continually enhance my work. Let’s build
              impactful experiences together!🚀🚀
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
