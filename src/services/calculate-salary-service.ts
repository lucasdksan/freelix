type SalaryInput = {
    mouthlySalary: number;
}

export function calculateSalary({ mouthlySalary }: SalaryInput){
    const hoursPerMonth = 160;
    const hourlyRate = mouthlySalary/hoursPerMonth;
    const freelanceRate = hourlyRate * 1.3;

    return Math.round(freelanceRate);
}