"use client";

import React, { useState } from "react";
import Modal from "./Modal"; 

const BotonEliminarInvernadero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = () => {
        console.log("Invernadero eliminado."); 
        setIsModalOpen(false);
    };

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-md transition-all duration-200"
            >
                Eliminar Invernadero
            </button>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleDelete}
                message="¿Estás seguro de que quieres eliminar el invernadero?"
            />
        </>
    );
};

export default BotonEliminarInvernadero;
