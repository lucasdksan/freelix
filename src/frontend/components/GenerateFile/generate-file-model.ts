import { createButton } from "@/frontend/ui/button-ui";

type generateFileModel = {
    valueNumeric: number;
    months: number;
    setLoading: (value: boolean) => void;
}

export default function generateFileModel({ months, valueNumeric, setLoading }: generateFileModel){
    const Button = createButton("default");
    const handleGenerateFile = async ()=>{
        setLoading(false);

        const response = await fetch("/api/generate-proposal", {
            method: "POST",
            headers: {
                
            }
        });
    }

    return {
        handleGenerateFile,
        Button
    }
}