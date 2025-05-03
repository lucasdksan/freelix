"use client"

import { salaryFormModel } from "./salary-form-model"
import { SalaryFormView } from "./salary-form-view";

export function SalaryFormViewModel() {
    const salaryFModel = salaryFormModel();

    return(
        <SalaryFormView {...salaryFModel} />
    );
}