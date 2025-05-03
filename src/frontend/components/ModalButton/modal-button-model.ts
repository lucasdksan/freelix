import { useModal } from "@/frontend/contexts/modal-contex";
import { createButton } from "@/frontend/ui/button-ui";

export function modalButtonModel(){
    const Button = createButton("default", "bg-btn-background gap-3 p-2 rounded-lg text-black");
    const { toggleStateModal } = useModal();

    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation();

        toggleStateModal(); 
    }

    return {
        Button,
        handleClick,
    }
}