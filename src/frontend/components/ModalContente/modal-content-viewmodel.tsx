"use client"

import { modalContentModel } from "./modal-content-model"
import { ModalContentView } from "./modal-content-view";

type ModalContentViewModelProps = {
    children: React.ReactNode;
};

export function ModalContentViewModel({ children }:ModalContentViewModelProps) {
    const { handleClick, Button, stateModal } = modalContentModel();

    return(
        <ModalContentView 
            Button={Button}
            handleClick={handleClick} 
            stateModal={stateModal} 
            children={children} 
        />
    );
}