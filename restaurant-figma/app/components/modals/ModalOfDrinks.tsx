"use client";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import DrinksModal from "./DrinksModal";


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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, fugit.
            </p>
          </div>
        </DrinksModal>
      </div>
    );
  }
  
  export default ModelOfDrinks;