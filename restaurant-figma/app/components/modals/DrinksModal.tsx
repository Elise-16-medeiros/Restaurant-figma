'use client'
import React, { ReactNode } from 'react';


type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function DrinksModal({ isOpen, onClose, children }: ModalProps) {
    return (
        <>
        {isOpen && (
          <div className="fixed inset-0 z-10 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white p-4 z-20">{children}</div>
          </div>
        )}
      </>
    );
}

export default DrinksModal;