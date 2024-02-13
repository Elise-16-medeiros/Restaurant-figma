import Background from "@/public/ImageTwo.png";

function Reservation() {
  return (
    <section
      style={{ backgroundImage: `url(${Background.src})` }}
      className="w-full h-[977px] p-5 mt-[700px] bg-cover bg-center"
    >
      <div className=" container flex flex-row justify-center items-center z-10">
        <div className="w-[920px] h-[697px] bg-gray-700/70 text-white my-36 mx-10">
          <span className="flex flex-col justify-center items-center my-20">
            <div className="before:content[''] before:border-2 before:absolute before:w-[138px] before:border-[#E1B168] after:content-[''] after:border-2 after:w-[138px] after:border-[#bc9458] after:absolute">
              <h3 className="py-1 tracking-widest px-3 text-sm uppercase">
                Reservations
              </h3>
                      </div>
                      <h1 className="text-3xl tracking-wide pb-3 font-title my-10">Book Your Table</h1>
          </span>
                  
                  <div className="w-full flex flex-col justify-center items-center">
                      <form action="" className="grid grid-cols-2 ">
                      <input placeholder="Name" className="w-64 h-8 bg-transparent text-slate-950 border border-white p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-[#bc9458] transition ease-in-out duration-150"/>
                          <input placeholder="Phone" className="w-52 h-8 bg-transparent text-slate-950 border border-white p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-[#bc9458] transition ease-in-out duration-150" />
                          <span className="grid grid-cols-3 gap-4">
                          <input type="number" name="people" id="" />
                          <input type="time" name="hours" id="" />
                              <input type="date" name="date" id="" />
                              </span>
                          </form>
                          </div>
         
        </div>
      </div>
    </section>
  );
}

export default Reservation;



