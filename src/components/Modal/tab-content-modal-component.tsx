"use client"

import { useState } from "react";
import { ExpenseProcess } from "../Process/expense-process-component";
import { ExperienceProcess } from "../Process/experience-process-component";
import { SalaryProcess } from "../Process/salary-process-component";

type OptionTab = "expense" | "experience" | "salary";

export function TabContentModal() {
const [optionTab, setOptionTab] = useState<OptionTab | null>(null);
    const optionForm = {
        "expense": <ExpenseProcess />,
        "experience": <ExperienceProcess />,
        "salary": <SalaryProcess />,
    };
    
    return(
        <div className="flex flex-col gap-3 items-center justify-center">
            <div className="flex items-center justify-between w-full md:gap-4">
                <button arial-label="Botão para despesa" className={`flex gap-2 px-2 py-1 rounded-lg cursor-pointer font-roboto not-italic font-medium text-base ${ optionTab === "expense" ? "bg-[#dee2e6] text-btn-background" : "bg-white text-btn-background"}`} onClick={()=> setOptionTab("expense")}>Despesa</button>
                <button arial-label="Botão para experiência" className={`flex gap-2 px-2 py-1 rounded-lg cursor-pointer font-roboto not-italic font-medium text-base ${ optionTab === "experience" ? "bg-[#dee2e6] text-btn-background" : "bg-white text-btn-background"}`} onClick={()=> setOptionTab("experience")}>Experiência</button>
                <button arial-label="Botão para salário" className={`flex gap-2 px-2 py-1 rounded-lg cursor-pointer font-roboto not-italic font-medium text-base ${ optionTab === "salary" ? "bg-[#dee2e6] text-btn-background" : "bg-white text-btn-background"}`} onClick={()=> setOptionTab("salary")}>Salário</button>
            </div>
            <div className="min-h-[187px] w-full">
                { !optionTab && <span className="font-roboto not-italic font-normal text-base text-white">Para começar selecione uma das três opições acima.</span> }
                { optionTab && optionForm[optionTab] }
            </div>
        </div>
    );
}