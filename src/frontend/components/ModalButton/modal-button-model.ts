import { modalModel } from "@/frontend/contexts/Modal/modal-model";

export default function modalButtonModel() {
    const modal = modalModel();

    return {
        onClick: modal.toggleModal,
    }
}