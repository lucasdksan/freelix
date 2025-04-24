type ExpensesInput = {
    monthlyExpenses: number;
    otherExpenses?: number;          
    desiredProfitMargin?: number;       
    workingHoursPerMonth?: number;      
    softwareLicenses?: number;          
    healthInsurance?: number;           
    accountantFees?: number;            
    taxesPercentage?: number;
};

export function calculateExpenses({
    monthlyExpenses,
    desiredProfitMargin = 30,
    workingHoursPerMonth = 160,
    softwareLicenses = 0,
    healthInsurance = 0,
    accountantFees = 0,
    taxesPercentage = 6,
    otherExpenses = 0
}: ExpensesInput) {
    const thirteenthSalary = monthlyExpenses / 12;
    const vacationBonus = (monthlyExpenses / 12) * (1/3);
    const fixedCosts = monthlyExpenses + thirteenthSalary + vacationBonus
        + softwareLicenses + healthInsurance + accountantFees + otherExpenses; 
    const totalWithTaxes = fixedCosts * (1 + (taxesPercentage/100));
    const totalWithProfit =totalWithTaxes * (1 + (desiredProfitMargin/100));
    const hourlyRate = totalWithProfit / workingHoursPerMonth;

    return Math.round(hourlyRate);
}
