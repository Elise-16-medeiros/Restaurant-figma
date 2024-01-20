import Image from "next/image";
import Pin from "@/public/pin_vector.png";
import Clock from "@/public/clock_vector.png";
import Devices from "@/public/devices_vector.png";

function Vector() {
  return (
    <section className="bg-[#FFF8F5] w-full h-[330px]">
      <div className="pt-20 flex flex-col justify-around items-center gap-10 md:flex-row">
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

        <div className="pr-4 flex gap-2">
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

        <div className="pr-10 flex gap-2">
          <Image
            className="h-[50px] w-[50px] rounded-lg"
            src={Devices}
            alt="pin image"
          />
          <div className="flex flex-col">
            <h3 className="text-xl tracking-wide">Reservation</h3>
            <p className="text-[14px]">restaurant@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vector;

