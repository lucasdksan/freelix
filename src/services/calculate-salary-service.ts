type SalaryInput = {
    mouthlySalary: number;
}

export function calculateSalary({ mouthlySalary }: SalaryInput){
    const hoursPerMonth = 160;
    const thirteenthSalary = mouthlySalary / 12;
    const vacationBonus = (mouthlySalary / 12) * (1/3);
    const adjustedmouthlySalary = mouthlySalary + thirteenthSalary + vacationBonus;
    const hourlyRate = adjustedmouthlySalary / hoursPerMonth;
    const freelanceRate = hourlyRate * 1.3;

    return Math.round(freelanceRate);
}