import linkedInImg from "@/assets/svgs/linkedin2.svg";
import githubImG from "@/assets/svgs/github2.svg";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className=" py-3.5 sm:py-4">
        <nav className="w-[90vw] mx-auto max-w-web-max flex justify-between">
          <div className="flex justify-start items-center gap-2">
            <Link href="#">
              <Image
                src={linkedInImg}
                alt="checkout my linkedin profile"
                className=" w-10 sm:w-12"
              />
            </Link>
            <Link href="#">
              <Image
                src={githubImG}
                alt="checkout my github profile"
                className=" w-10 sm:w-12"
              />
            </Link>
          </div>

          <button className="bg-main text-white font-semibold text-sm sm:text-base h-[42px] sm:h-[46px] rounded-[10px] text-center px-5 sm:px-7">
            Download resume
          </button>
        </nav>
      </header>
    </>
  );
}
