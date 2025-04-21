"use client"

import { useState } from "react";
import { FormExpense } from "./form-expense-component";

type OptionTab = "expense" | "experience" | "salary";

export function FormContent() {
    const [optionTab, setOptionTab] = useState<OptionTab | null>(null);
    const optionForm = {
        "expense": <FormExpense />,
        "experience": <div>Experiências</div>,
        "salary": <div>Salário</div>,
    };
    
    return(
        <div className="flex flex-col gap-3 items-center justify-center">
            <div className="flex items-center justify-between w-full md:justify-center md:gap-4">
                <button arial-label="Botão para despesa" className={`flex gap-2 px-2 py-1 rounded-lg cursor-pointer font-roboto not-italic font-medium text-base ${ optionTab === "expense" ? "bg-[#dee2e6] text-btn-background" : "bg-white text-btn-background"}`} onClick={()=> setOptionTab("expense")}>Despesa</button>
                <button arial-label="Botão para experiência" className={`flex gap-2 px-2 py-1 rounded-lg cursor-pointer font-roboto not-italic font-medium text-base ${ optionTab === "experience" ? "bg-[#dee2e6] text-btn-background" : "bg-white text-btn-background"}`} onClick={()=> setOptionTab("experience")}>Experiência</button>
                <button arial-label="Botão para salário" className={`flex gap-2 px-2 py-1 rounded-lg cursor-pointer font-roboto not-italic font-medium text-base ${ optionTab === "salary" ? "bg-[#dee2e6] text-btn-background" : "bg-white text-btn-background"}`} onClick={()=> setOptionTab("salary")}>Salário</button>
            </div>
            <div className="">
                { !optionTab && <span className="font-roboto not-italic font-normal text-base text-white">Para começar selecione uma das três opições acima.</span> }
                { optionTab && optionForm[optionTab] }
            </div>
        </div>
    );
}