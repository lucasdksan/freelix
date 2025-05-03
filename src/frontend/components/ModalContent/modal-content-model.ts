import { useModal } from "@/frontend/contexts/modal-contex";
import { createButton } from "@/frontend/ui/button-ui";

export function modalContentModel(){
    const { stateModal, toggleStateModal } = useModal();
    const Button = createButton("default", "bg-transparent fixed right-3 top-3");

    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation();

        toggleStateModal();
    };

    return {
        stateModal,
        Button,
        handleClick,
    }
}