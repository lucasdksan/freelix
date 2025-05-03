"use client"

import { createPortal } from "react-dom";
import { modalContentModel } from "./modal-content-model";
import Image from "next/image";

type ModalContentViewProps = { children: React.ReactNode; } & ReturnType<typeof modalContentModel>;

export function ModalContentView({ Button, ...props }: ModalContentViewProps) {
    return props.stateModal && (
        createPortal(
            <>
                <div onClick={props.handleClick} className="w-screen h-screen flex items-center justify-center absolute top-0 left-0 z-10 bg-modal-background" />
                <div className="absolute top-1/2 left-1/2 z-30 bg-form-background w-full h-auto max-w-72 md:max-w-80 rounded-lg transform -translate-x-1/2 -translate-y-1/2 px-2 py-2 md:px-4 md:py-4">
                    <Button arial-label="Close modal" onClick={props.handleClick}>
                        <Image 
                            src="/x-icon.svg"
                            width={24}
                            height={24}
                            alt="Close icon"
                        />
                    </Button>
                    { props.children }
                </div>
            </>
        , document.body)
    );
}