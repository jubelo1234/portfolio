"use client";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";
import gmailImg from "@/assets/svgs/gmail.svg";

export default function EmailLink() {
  const handleClick = async () => {
    const email = "ohootuberecaiah@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy email to clipboard:", error);
      toast.error("Failed to copy email to clipboard");
    }
  };

  return (
    <Link
      href="mailto:ohootuberecaiah@gmail.com"
      onClick={handleClick}
      className=" py-2.5 pl-3 pr-1  sm:px-3 rounded-[16px] bg-white  flex border border-border  items-center justify-center gap-3.5 md:gap-4"
    >
      <div className="relative">
        <Image
          src={gmailImg}
          alt="nextjs"
          className=" size-8 sm:size-10 md:size-[50px] lg:size-14  relative z-10"
        />
      </div>
      <p className=" text-sm sm:text-base md:text-lg lg:text-xl text-black font-medium truncate">
        Email Me
      </p>
    </Link>
  );
}
