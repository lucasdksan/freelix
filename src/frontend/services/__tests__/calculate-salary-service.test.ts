import { calculateSalary } from "../calculate-salary-service";

describe("calculateSalary", () => {
    it("should calculate the freelance rate with default values", () => {
        const result = calculateSalary({
            mouthlySalary: 4000,
        });

        const thirteenth = 4000 / 12;
        const vacationBonus = thirteenth * (1 / 3);
        const total = 4000 + 0 + thirteenth + vacationBonus;
        const hourly = total / 160;
        const expected = Math.round(hourly * 1.3);

        expect(result).toBe(expected);
    });

    it("should include benefits in the calculation", () => {
        const result = calculateSalary({
            mouthlySalary: 5000,
            benefitsValue: 1000,
        });

        const thirteenth = 5000 / 12;
        const vacationBonus = thirteenth * (1 / 3);
        const total = 5000 + 1000 + thirteenth + vacationBonus;
        const hourly = total / 160;
        const expected = Math.round(hourly * 1.3);

        expect(result).toBe(expected);
    });

    it("should use custom workingHoursPerMonth and freelanceMultiplier", () => {
        const result = calculateSalary({
            mouthlySalary: 6000,
            benefitsValue: 500,
            workingHoursPerMonth: 200,
            freelanceMultiplier: 1.5,
        });

        const thirteenth = 6000 / 12;
        const vacationBonus = thirteenth * (1 / 3);
        const total = 6000 + 500 + thirteenth + vacationBonus;
        const hourly = total / 200;
        const expected = Math.round(hourly * 1.5);

        expect(result).toBe(expected);
    });

    it("should return 0 if salary is 0", () => {
        const result = calculateSalary({
            mouthlySalary: 0,
        });

        expect(result).toBe(0);
    });

    it("should return correct rate with high salary and no benefits", () => {
        const result = calculateSalary({
            mouthlySalary: 15000,
        });

        const thirteenth = 15000 / 12;
        const vacationBonus = thirteenth * (1 / 3);
        const total = 15000 + 0 + thirteenth + vacationBonus;
        const hourly = total / 160;
        const expected = Math.round(hourly * 1.3);

        expect(result).toBe(expected);
    });
});
