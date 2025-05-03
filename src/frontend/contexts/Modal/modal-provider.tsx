import { ModalContext } from "./modal-context";
import { modalModel } from "./modal-model";

type ModalProviderProps = {
    children: React.ReactNode;
}

export function ModalProvider({ children }:ModalProviderProps) {
    const modal = modalModel();

    return (
        <ModalContext.Provider value={modal}>
            { children }
        </ModalContext.Provider>
    );
}