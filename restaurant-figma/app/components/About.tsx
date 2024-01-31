import Image from "next/image";
import Link from "next/link";
import Vector from "./Vector";
import aboutImg from "@/public/image1.png";

function About() {
  return (
    <>
      <Vector />
      <section className="bg-[#FFF8F5] w-full h-[728px] pt-5 md:h-[428px]">
        <div className="px-5 flex flex-col-reverse justify-center items-center gap-10 md:flex-row">
          <div className="col-span-2">
            <Image className="container" src={aboutImg} alt="restaurant" />
          </div>
          <div>
            <h2 className="text-xl tracking-wide font-bold pb-3">Botticelli Italian Restaurant</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              quam libero accusamus quasi quas harum! Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Nulla!
            </p>
            <div className="flex flex-row justify-center items-center mt-5 gap-10">
              <div className="flex flex-col">
                <h2 className="text-xl tracking-wide font-bold">1987</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nesciunt, alias!
                </p>
              </div>

              <div className="flex flex-col">
                <h2 className="text-xl tracking-wide font-bold">2024</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, odit.
                </p>
              </div>
            </div>
           {/*  <div className="w-[230px] pt-10">
              <Link className="link-custom-two" href="#">
                more about us
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;


