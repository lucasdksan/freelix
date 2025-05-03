"use client"

import { salaryFormModel } from "./salary-form-model";

type SalaryFormViewProps = {  } & ReturnType<typeof salaryFormModel>;

export function SalaryFormView({ Form, handleChange, nextStep, prevStep, step }: SalaryFormViewProps){
    return(
        <Form
            handleLastBtn={()=>{}}
            maxQuantity={3}
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            titleForm="Calcular baseado em Salário"
            titleLastButton="Copiar"
        >
            <span>Oi Lucas</span>
        </Form>
    );
}