import { example } from "@/utils/_example-util";

export default function ExampleProcess() {
    const handleSubmitTest = () => {
        fetch("/api/generate-proposal", {
            method: "POST",
            body: JSON.stringify(example()),
            headers: { "Content-Type": "application/json" }
        }).then(async (response) => {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            
            a.href = url;
            a.download = "proposta.docx";
            a.click();
        });
    };

    return (
        <button
            arial-label="Botão para estimar horas"
            className="flex gap-2 px-2 py-1 rounded-lg cursor-pointer font-roboto not-italic font-medium text-base bg-white text-btn-background"
            onClick={handleSubmitTest}
        >
            Gerar um arquivo teste
        </button>
    );
}