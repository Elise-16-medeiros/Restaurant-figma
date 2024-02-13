"use client";
import { useState } from "react";
import Image from "next/image";
import { HiXMark } from "react-icons/hi2";
import DrinksModal from "./DrinksModal";
import wine from '@/public/wine.jpg'


function ModelOfDrinks() {
    const [modalOpen, setModalOpen] = useState(false);
  
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    return (
      <div className="link-custom-two">
        <button onClick={openModal}>Drinks and Wines</button>
  
        <DrinksModal isOpen={modalOpen} onClose={closeModal}>
          <div className="text-black">
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Our Drinks</h1>
              <button onClick={closeModal}>
                <HiXMark />
              </button>
            </div>
            <div className="container">
            <Image
              className="w-full h-64 rounded-lg my-5"
              src={wine}
              alt="kitchen"
            />
          </div>

          <div className="w-full mt-10">
            <div className="flex flex-col gap-5">
              <div className="flex flex-row justify-between items-center gap-10 bg-slate-200 rounded-md px-2 py-1">
                <span>Auctor id tortor eget</span>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
                <span>€450</span>
              </div>
              <div className="flex flex-row justify-between items-center gap-10 px-2 py-1">
                <span>Purus elementum orci</span>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
                <span>€95</span>
              </div>
              <div className="flex flex-row justify-between items-center gap-10 bg-slate-200 rounded-md px-2 py-1">
                <span>Sit non etiam ut dui</span>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
                <span>€600</span>
              </div>
              <div className="flex flex-row justify-between items-center gap-10 px-2 py-1">
                <span>Nibh libero sodales</span>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
                <span>€79</span>
              </div>
              <div className="flex flex-row justify-between items-center gap-10 bg-slate-200 rounded-md px-2 py-1">
                <span>Tellus viverra</span>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
                <span>€100</span>
              </div>
            </div>
          </div>
          </div>
        </DrinksModal>
      </div>
    );
  }
  
  export default ModelOfDrinks;