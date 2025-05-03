"use client"

import Image from "next/image";
import { modalButtonModel } from "./modal-button-model";

type ModalButtonViewProps = ReturnType<typeof modalButtonModel>;

export function ModalButtonView({ Button, ...props }: ModalButtonViewProps) {
    return (
        <Button arial-label="Iniciar o processo" onClick={props.handleClick}>
            <span className="font-roboto font-medium not-italic text-base text-white">Grátis</span>
            <Image
                src="/arrow-right.svg"
                width={24}
                height={24}
                alt="Arrow icon to start process"
            />
        </Button>
    );
}