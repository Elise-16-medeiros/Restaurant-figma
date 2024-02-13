"use client";
import { useState } from "react";
import Image from "next/image";
import { HiXMark } from "react-icons/hi2";
import DessertsModal from "./DessertsModal";
import dessert from '@/public/dessert.jpg'

function ModelOfDesserts() {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    return (
        <div className="link-custom-two">
          <button onClick={openModal}>Desserts</button>

          <DessertsModal isOpen={modalOpen} onClose={closeModal}>
            <div className="text-black">
                    <div className="flex justify-between">
                    <h1 className="font-bold text-xl">Our Desserts</h1>
            <button onClick={closeModal}><HiXMark /></button>
                    </div>
                    <div className="container">
            <Image
              className="w-full h-64 rounded-lg my-5"
              src={dessert}
              alt="kitchen"
            />
          </div>

          <div className="w-full mt-10">
            <div className="flex flex-col gap-5">
              <div className="flex flex-row justify-between items-center gap-10 bg-slate-200 rounded-md px-2 py-1">
                <span>Ante habitant</span>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
                <span>€12</span>
              </div>
              <div className="flex flex-row justify-between items-center gap-10 px-2 py-1">
                <span>Non placerat platea</span>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
                <span>€21</span>
              </div>
              <div className="flex flex-row justify-between items-center gap-10 bg-slate-200 rounded-md px-2 py-1">
                <span>Cursus aliquet</span>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
                <span>€33</span>
              </div>
              <div className="flex flex-row justify-between items-center gap-10 px-2 py-1">
                <span>Nibh libero sodales</span>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
                <span>€8</span>
              </div>
              <div className="flex flex-row justify-between items-center gap-10 bg-slate-200 rounded-md px-2 py-1">
                <span>Tellus viverra</span>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
                <span>€29</span>
              </div>
            </div>

            
          </div>
            </div>
          </DessertsModal>
        </div>
    );
}

export default ModelOfDesserts;