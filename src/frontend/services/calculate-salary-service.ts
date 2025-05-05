type SalaryInput = {
    monthlySalary: number;
    benefitsValue?: number;
    workingHoursPerMonth?: number;
    freelanceMultiplier?: number;
}

export function calculateSalary({ 
    monthlySalary,
    benefitsValue = 0,
    workingHoursPerMonth = 160,
    freelanceMultiplier = 1.3,
}: SalaryInput){
    const thirteenthSalary = monthlySalary / 12;
    const vacationBonus = (monthlySalary / 12) * (1 / 3);
    const totalCompensation = monthlySalary + benefitsValue + thirteenthSalary + vacationBonus;
    const hourlyRate = totalCompensation / workingHoursPerMonth;
    const freelanceRate = hourlyRate * freelanceMultiplier;

    return Math.round(freelanceRate);
}