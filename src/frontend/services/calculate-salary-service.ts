type SalaryInput = {
    mouthlySalary: number;
    benefitsValue?: number;
    workingHoursPerMonth?: number;
    freelanceMultiplier?: number;
}

export function calculateSalary({ 
    mouthlySalary,
    benefitsValue = 0,
    workingHoursPerMonth = 160,
    freelanceMultiplier = 1.3,
}: SalaryInput){
    const thirteenthSalary = mouthlySalary / 12;
    const vacationBonus = (mouthlySalary / 12) * (1 / 3);
    const totalCompensation = mouthlySalary + benefitsValue + thirteenthSalary + vacationBonus;
    const hourlyRate = totalCompensation / workingHoursPerMonth;
    const freelanceRate = hourlyRate * freelanceMultiplier;

    return Math.round(freelanceRate);
}