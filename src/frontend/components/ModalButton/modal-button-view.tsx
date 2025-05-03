import { JSX } from "react";
import modalButtonModel from "./modal-button-model";
import Image from "next/image";

type ModalButtonViewProps = {
    Button: (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => JSX.Element;
} & ReturnType<typeof modalButtonModel>;

export default function ModalButtonView({ Button, ...props } : ModalButtonViewProps) {
    return (
        <Button aria-label="Iniciar processo grátis" onClick={props.onClick} >
            <span className="font-roboto not-italic font-medium text-base text-white">Grátis</span>
            <Image
                src="/arrow-right.svg"
                width={24}
                height={24}
                alt="Arrow icon the start process"
            /> 
        </Button>
    );
}