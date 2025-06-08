import { createButton } from "@/frontend/ui/button-ui";
import { EstimateTermFormData } from "../EstimateTermForm/estimate-term-schema";

type generateFileModel = EstimateTermFormData & {
    valueNumeric: number;
    months: number;
};

export default function generateFileModel({ ...body }: generateFileModel) {
    const Button = createButton("default");
    const handleGenerateFile = async () => {
        try {
            const response = await fetch("/api/generate-proposal", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    city: body.city,
                    nameCompany: body.nameCompany,
                    partners: body.partners,
                    descriptionProducts: body.descriptionProducts,
                    name: body.name,
                    introduction: body.introduction,
                    scope: body.scope,
                    term: body.months,
                    value: body.valueNumeric,
                    address: body.address,
                    phone: body.phone,
                }),
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(`Erro ao gerar o arquivo: ${response.status} - ${text}`);
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const tagA = document.createElement("a");

            tagA.href = url;
            tagA.download = "proposta.docx";
            document.body.appendChild(tagA);
            tagA.click();
            tagA.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Erro ao gerar o arquivo:", error);
            alert("Não foi possível gerar o arquivo. Tente novamente.");
        }
    };

    return {
        handleGenerateFile,
        Button
    }
}