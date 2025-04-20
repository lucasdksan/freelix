"use client"

import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import { FormContent } from "./form-content-component";

export function FormModal() {
    const [openForm, setOpenForm] = useState(false);

    const handleToggleModal = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        setOpenForm((prev) => !prev);
    }

    return (
        <>
            <button onClick={() => setOpenForm(true)} arial-label="Iniciar o processo" className="bg-btn-background flex gap-3 p-2 rounded-lg cursor-pointer">
                <span className="font-roboto not-italic font-medium text-base text-white">Grátis</span>
                <Image
                    src="/arrow-right.svg"
                    width={24}
                    height={24}
                    alt="Arrow icon to start process"
                />
            </button>
            { openForm && createPortal(
                <>
                    <div onClick={handleToggleModal} className="w-screen h-screen flex items-center justify-center absolute top-0 left-0 z-10 bg-modal-background" />
                    <div className="absolute top-1/2 left-1/2 z-30 bg-form-background w-full h-auto max-w-72 md:max-w-80 rounded-lg transform -translate-x-1/2 -translate-y-1/2 px-2 py-3">
                        <FormContent />
                    </div>
                </>,
                document.body
            ) }
        </>
    );
}