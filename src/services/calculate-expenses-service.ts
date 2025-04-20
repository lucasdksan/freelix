type ExpensesInput = {
    monthlyExpenses: number;
    desiredProfitMargin?: number;
}

export function calculateExpenses({ monthlyExpenses, desiredProfitMargin = 0.3 }: ExpensesInput){
    const hoursPerMonth = 160;
    const totalWithProfit = monthlyExpenses * (1 + desiredProfitMargin);
    const hourlyRate = totalWithProfit/hoursPerMonth;

    return Math.round(hourlyRate);
}