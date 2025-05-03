"use client"

import { modalButtonModel } from "./modal-button-model"
import { ModalButtonView } from "./modal-button-view";

export function ModalButtonViewModel() {
    const { Button, handleClick } = modalButtonModel();

    return(
        <ModalButtonView Button={Button} handleClick={handleClick} />
    );
}