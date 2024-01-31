"use client";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import PizzaModal from "./PizzaModal";




function ModalOfPizza() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    return (
      <div className="link-custom-two">
        <button onClick={openModal}>Pizzas</button>
  
        <PizzaModal isOpen={modalOpen} onClose={closeModal}>
          <div className="text-black">
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Our Pizzas</h1>
              <button onClick={closeModal}>
                <HiXMark />
              </button>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, fugit.
            </p>
          </div>
        </PizzaModal>
      </div>
    );
}

export default ModalOfPizza;