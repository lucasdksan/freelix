import { createButton } from "@/frontend/ui/button-ui";

export function copyElementModel(value: string | number){
    const handleCopyArea = () => {
        navigator.clipboard.writeText(`${value}`)
            .then(() => {
                alert("Valor copiado com sucesso");
            });
    };
    const Button = createButton("default");

    return {
        handleCopyArea,
        Button
    };
}