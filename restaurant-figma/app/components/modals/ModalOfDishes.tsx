"use client";
import { useState } from "react";
import Image from "next/image";
import { HiXMark } from "react-icons/hi2";
import DishesModal from "./DishesModal";
import dishes from "@/public/dishes.jpg";

function ModalOfDishes() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="link-custom-two">
      <button onClick={openModal}>Dishes</button>

      <DishesModal isOpen={modalOpen} onClose={closeModal}>
        <div className="text-black">
          <div className="flex justify-between">
            <h1 className="font-bold text-xl">Main Dish</h1>
            <button onClick={closeModal}>
              <HiXMark />
            </button>
          </div>
          <div className="container">
            <Image
              className="w-full h-64 rounded-lg my-5"
              src={dishes}
              alt="kitchen"
            />
          </div>

          <div className="w-full mt-10">
            <div className="flex flex-col gap-5">
              <div className="flex flex-row justify-between items-center gap-10 bg-slate-200 rounded-md px-2 py-1">
                <span>Volutpat quis tortor</span>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
                <span>€29</span>
              </div>
              <div className="flex flex-row justify-between items-center gap-10 px-2 py-1">
                <span>Consequat laoreet</span>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
                <span>€60</span>
              </div>
              <div className="flex flex-row justify-between items-center gap-10 bg-slate-200 rounded-md px-2 py-1">
                <span>In feugiat odio</span>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
                <span>€45</span>
              </div>
              <div className="flex flex-row justify-between items-center gap-10 px-2 py-1">
                <span>Sed in viverra lectus</span>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
                <span>€32</span>
              </div>
              <div className="flex flex-row justify-between items-center gap-10 bg-slate-200 rounded-md px-2 py-1">
                <span>Diam sapien</span>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
                <span>€80</span>
              </div>
            </div>
          </div>

        </div>
      </DishesModal>
    </div>
  );
}

export default ModalOfDishes;
