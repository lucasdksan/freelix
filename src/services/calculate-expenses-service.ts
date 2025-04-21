type ExpensesInput = {
    monthlyExpenses: number;            // despesas pessoais e do negócio
    desiredProfitMargin?: number;        // margem de lucro (%)
    workingHoursPerMonth?: number;       // horas que realmente pretende trabalhar (não precisa fixar 160)
    softwareLicenses?: number;           // gastos com ferramentas, licenças, Adobe, GitHub, etc
    healthInsurance?: number;            // plano de saúde
    accountantFees?: number;             // contador
    taxesPercentage?: number;            // impostos (%), tipo MEI, Simples Nacional
    reserveFundPercentage?: number;      // porcentagem para reserva financeira (ex: 10%)
};

export function calculateExpenses({
    monthlyExpenses,
    desiredProfitMargin = 0.3,
    workingHoursPerMonth = 160,
    softwareLicenses = 0,
    healthInsurance = 0,
    accountantFees = 0,
    taxesPercentage = 0.06, // exemplo: 6% de impostos MEI
    reserveFundPercentage = 0.1 // 10% de reserva financeira
}: ExpensesInput) {
    const thirteenthSalary = monthlyExpenses / 12;
    const vacationBonus = (monthlyExpenses / 12) * (1/3);
    const fixedCosts = monthlyExpenses + thirteenthSalary + vacationBonus
        + softwareLicenses + healthInsurance + accountantFees;
    const totalWithTaxes = fixedCosts * (1 + taxesPercentage);
    const totalWithReserve = totalWithTaxes * (1 + reserveFundPercentage);
    const totalWithProfit = totalWithReserve * (1 + desiredProfitMargin);
    const hourlyRate = totalWithProfit / workingHoursPerMonth;

    return Math.round(hourlyRate);
}
