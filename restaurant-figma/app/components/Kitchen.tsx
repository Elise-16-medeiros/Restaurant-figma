import Image from "next/image";
import Img from "@/public/kitchen.jpg";

function Kitchen() {
  return (
    <section className="h-[906px] mt-20 px-5 md:h-[750px]">
      <div className="before:content[''] before:border-2 before:absolute before:w-[93px] before:border-[#E1B168] after:content-[''] after:border-2 after:w-[93px] after:border-[#E1B168] after:absolute">
        <h2 className="py-1 tracking-wide font-bold">Our Kitchen</h2>
        </div>

      <div className="flex flex-col-reverse justify-center items-center gap-10 mt-5 md:flex-row">

        
        <div>
          <h5 className="text-xl tracking-wide font-bold pb-3 font-title">Prepared just for you, always using fresh ingredients</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero laborum dolore amet eos numquam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.</p>
          
          <div className="flex flex-row justify-center items-center mt-5 gap-10">
              <div className="flex flex-col">
                <h2 className="text-xl tracking-wide font-bold">Our Chefs</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nesciunt, alias!
                </p>
              </div>

              <div className="flex flex-col">
                <h2 className="text-xl tracking-wide font-bold">Our Ingredients</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, odit.
                </p>
              </div>
        </div>
        </div>
     
        <Image
          className="w-[398px] h-[548px]"
          src={Img}
          alt="kitchen"
        />
        
        </div>
    </section>
  );
}

export default Kitchen;
