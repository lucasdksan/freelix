import { createButton } from "@/frontend/ui/button-ui";

export function copyElementModel(){
    const handleCopyArea = (value: string | number) => {
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