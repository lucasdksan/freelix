"use client"

import { modalContentModel } from "./modal-content-model"
import { ModalContentView } from "./modal-content-view";

type ModalContentViewModelProps = {
    children: React.ReactNode;
};

export function ModalContentViewModel({ children }:ModalContentViewModelProps) {
    const { handleClick, stateModal } = modalContentModel();

    return(
        <ModalContentView 
            handleClick={handleClick} 
            stateModal={stateModal} 
            children={children} 
        />
    );
}