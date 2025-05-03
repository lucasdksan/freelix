import { useState } from "react";

export function modalModel() {
    const [stateModal, setStateModal] = useState(false);

    function toggleModal() {
        setStateModal((prev) => !prev);
    }

    return {
        stateModal,
        toggleModal
    };
}