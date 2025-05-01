"use client"

import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import { TabContentModal } from "./tab-content-modal-component";
import { TermContentModal } from "./term-content-modal-component";
import ExampleProcess from "../Process/example-process-component";

export function MainModal() {
    const [openForm, setOpenForm] = useState(false);
    const [typeProcess, setTypeProcess] = useState<"estimate-hours" | "estimate-term" | null>();

    const handleToggleModal = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        setOpenForm((prev) => !prev);
        setTypeProcess(null);
    }

    const process = {
        "estimate-hours": <TabContentModal />,
        "estimate-term": <TermContentModal /> 
    };

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
            {openForm && createPortal(
                <>
                    <div onClick={handleToggleModal} className="w-screen h-screen flex items-center justify-center absolute top-0 left-0 z-10 bg-modal-background" />
                    <div className="absolute top-1/2 left-1/2 z-30 bg-form-background w-full h-auto max-w-72 md:max-w-80 rounded-lg transform -translate-x-1/2 -translate-y-1/2 px-2 py-3 md:px-4 md:py-4">
                        { !typeProcess ? (
                            <div className="w-full h-auto flex flex-col items-center justify-center gap-3">
                                <span className="font-roboto not-italic font-normal text-base text-white">Qual processo você deseja?</span>
                                <div className="flex gap-2">
                                    <button 
                                        arial-label="Botão para estimar horas" 
                                        className="flex gap-2 px-2 py-1 rounded-lg cursor-pointer font-roboto not-italic font-medium text-base bg-white text-btn-background" 
                                        onClick={()=> setTypeProcess("estimate-hours")}
                                    >
                                        Estimar horas
                                    </button>
                                    <button
                                        arial-label="Botão para estimar o contrato" 
                                        className="flex gap-2 px-2 py-1 rounded-lg cursor-pointer font-roboto not-italic font-medium text-base bg-white text-btn-background" 
                                        onClick={()=> setTypeProcess("estimate-term")}
                                    >  
                                        Estimar contratos
                                    </button>
                                    <ExampleProcess />
                                </div>
                            </div>
                        ) : (
                            process[typeProcess]
                        ) }
                    </div>
                </>,
                document.body
            )}
        </>
    );
}