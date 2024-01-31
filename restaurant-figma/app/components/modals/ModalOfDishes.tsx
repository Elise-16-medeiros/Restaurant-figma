"use client";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import DishesModal from "./DishesModal";

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
            <h1 className="font-bold text-xl">Our Dishes</h1>
            <button onClick={closeModal}>
              <HiXMark />
            </button>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, fugit.
          </p>
        </div>
      </DishesModal>
    </div>
  );
}

export default ModalOfDishes;
