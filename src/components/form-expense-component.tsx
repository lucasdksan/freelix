"use client"

import { calculateExpenses } from "@/services/calculate-expenses-service";
import { useState } from "react";

export function FormExpense() {
    const [monthlyExpenses, setMonthlyExpenses] = useState(0);
    const [desiredProfitMargin, setDesiredProfitMargin] = useState(30); // em %
    const [workingHoursPerMonth, setWorkingHoursPerMonth] = useState(160);
    const [softwareLicenses, setSoftwareLicenses] = useState(0);
    const [healthInsurance, setHealthInsurance] = useState(0);
    const [accountantFees, setAccountantFees] = useState(0);
    const [taxesPercentage, setTaxesPercentage] = useState(6); // em %
    const [reserveFundPercentage, setReserveFundPercentage] = useState(10); // em %

    const handleCalculate = (event: React.FormEvent) => {
        event.preventDefault();

        const result = calculateExpenses({
            monthlyExpenses,
            desiredProfitMargin: desiredProfitMargin / 100,
            workingHoursPerMonth,
            softwareLicenses,
            healthInsurance,
            accountantFees,
            taxesPercentage: taxesPercentage / 100,
            reserveFundPercentage: reserveFundPercentage / 100,
        });

        console.log("Result: ", result);
    }

    return (
        <div>
            <h2>Calcular valor/hora baseado em despesas</h2>
            <form onSubmit={handleCalculate}>
                <fieldset>
                    <label htmlFor="monthlyExpenses">Despesas Mensais (R$)</label>
                    <input 
                        id="monthlyExpenses"
                        type="number" 
                        value={monthlyExpenses}
                        onChange={(e) => setMonthlyExpenses(parseFloat(e.target.value) || 0)} 
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="desiredProfitMargin">Margem de Lucro Desejada (%)</label>
                    <input 
                        id="desiredProfitMargin"
                        type="number" 
                        value={desiredProfitMargin}
                        onChange={(e) => setDesiredProfitMargin(parseFloat(e.target.value) || 0)} 
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="workingHoursPerMonth">Horas Trabalhadas por Mês</label>
                    <input 
                        id="workingHoursPerMonth"
                        type="number" 
                        value={workingHoursPerMonth}
                        onChange={(e) => setWorkingHoursPerMonth(parseFloat(e.target.value) || 0)} 
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="softwareLicenses">Licenças de Software (R$)</label>
                    <input 
                        id="softwareLicenses"
                        type="number" 
                        value={softwareLicenses}
                        onChange={(e) => setSoftwareLicenses(parseFloat(e.target.value) || 0)} 
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="healthInsurance">Plano de Saúde (R$)</label>
                    <input 
                        id="healthInsurance"
                        type="number" 
                        value={healthInsurance}
                        onChange={(e) => setHealthInsurance(parseFloat(e.target.value) || 0)} 
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="accountantFees">Honorários Contador (R$)</label>
                    <input 
                        id="accountantFees"
                        type="number" 
                        value={accountantFees}
                        onChange={(e) => setAccountantFees(parseFloat(e.target.value) || 0)} 
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="taxesPercentage">Percentual de Impostos (%)</label>
                    <input 
                        id="taxesPercentage"
                        type="number" 
                        value={taxesPercentage}
                        onChange={(e) => setTaxesPercentage(parseFloat(e.target.value) || 0)} 
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="reserveFundPercentage">Percentual para Reserva (%)</label>
                    <input 
                        id="reserveFundPercentage"
                        type="number" 
                        value={reserveFundPercentage}
                        onChange={(e) => setReserveFundPercentage(parseFloat(e.target.value) || 0)} 
                    />
                </fieldset>

                <button type="submit">Calcular Valor/Hora</button>
            </form>
        </div>
    );
}