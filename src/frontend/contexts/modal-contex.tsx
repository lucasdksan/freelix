"use client"

import { createContext, useContext, useState } from "react";

type ModalContextProps = {
    stateModal: boolean;
    toggleStateModal: () => void;
};

const ModalContext = createContext<ModalContextProps>({
    stateModal: false,
    toggleStateModal: () => { },
});

export function ModalProvider(props: { children: React.ReactNode }) {
    const [stateModal, setStateModal] = useState(false);
    const toggleStateModal = () => setStateModal((prev) => !prev);

    return (
        <ModalContext.Provider value={{ stateModal, toggleStateModal }}>
            {props.children}
        </ModalContext.Provider>
    );
}

export const useModal = () => useContext(ModalContext);