import Image from "next/image";
import Link from "next/link";
import { heroData } from "@/app/data";
import heroImage from "@/public/heroPattern.jpeg";

function Hero() {
  const { pretitle, title, btnText } = heroData;

  return (
    <section className=" bg-[#292E36] text-white pb-8 pt-8">
      <div className="flex flex-col justify-between items-center gap-16 md:flex-row">
        <div className="flex flex-col justify-center items-start md: ml-10">
          
            <h2 className="text-xl tracking-wide md:text-[30px]">{pretitle}</h2>
            <h1 className="text-[3.5rem] leading-[3rem] tracking-wide md:text-[100px] md:leading-[110px]">{title}</h1>
         

          <div className="flex flex-col justify-center items-start">
          <span className="text-sm tracking-wide leading-[30px]">We use only the finest local ingredients available</span>
            <span className="text-sm tracking-wide leading-[30px]">and offer seasonal specials throughout the year</span>
          </div>

          <div className="mt-4 link-custom-two">
            <Link href="/reservation">{btnText}</Link>
          </div>
        </div>

      <div className="w-[20rem] h-[95%] overflow-hidden rounded-t-[15rem] border-8 border-[#343942] md:w-[30rem] md:h-[100%] md:mr-10">
          <Image src={heroImage} alt="hero image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

