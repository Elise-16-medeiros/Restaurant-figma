import Image from "next/image";
import Pin from "@/public/pin_vector.png";
import Clock from "@/public/clock_vector.png";
import Devices from "@/public/devices_vector.png";

function Vector() {
  return (
    <section className="container bg-[#FFF8F5] w-full h-[340px] md:h-[230px] px-10">

      <div className="pt-20 flex flex-col justify-center items-center gap-y-10 md:flex-row md:gap-x-20">
        <div className="flex gap-2">
           <Image
            className="h-[50px] w-[50px] rounded-lg"
            src={Pin}
            alt="pin image"
          /> 
          <div className="flex flex-col">
            <h3 className="text-xl tracking-wide">Locate Us</h3>
            <p className="text-[14px]">Via Cavour 25, Florence, Tuscany</p>
          </div>
        </div>


        <div className="flex gap-2">
           <Image
            className="h-[50px] w-[50px] rounded-lg"
            src={Clock}
            alt="clock image"
          /> 
          <div className="flex flex-col">
            <h3 className="text-xl tracking-wide">Open Hours</h3>
            <p className="text-[14px]">Mon To Sat 18:00 PM - 23:00 PM</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Image
            className="h-[50px] w-[50px] rounded-lg"
            src={Devices}
            alt="pin image"
          /> 
          <ul className="list-none">
<li><h3 className="text-xl tracking-wide">Reservation</h3></li>
            <li><p className="text-[14px]">restaurant@gmail.com</p></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Vector;


