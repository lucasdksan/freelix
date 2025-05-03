import { useModal } from "@/frontend/contexts/modal-contex";

export function modalContentModel(){
    const { stateModal, toggleStateModal } = useModal();

    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation();

        toggleStateModal();
    };

    return {
        stateModal,
        handleClick,
    }
}