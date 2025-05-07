"use client"

import { expenseFormModel } from "./expense-form-model"
import { ExpenseFormView } from "./expense-form-view";

export function ExpenseFormViewModel(){
    const model = expenseFormModel();

    return(
        <ExpenseFormView 
            { ...model }
        />
    );
}