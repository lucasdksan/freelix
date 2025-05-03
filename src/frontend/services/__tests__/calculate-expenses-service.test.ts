import { calculateExpenses } from "../calculate-expenses-service";

describe("calculateExpenses", () => {
    it("should calculate the hourly rate with only mandatory field", () => {
        const result = calculateExpenses({ monthlyExpenses: 4000 });

        expect(result).toBe(38);
    });

    it("should include optional expenses in the calculation", () => {
        const result = calculateExpenses({
            monthlyExpenses: 5000,
            softwareLicenses: 200,
            healthInsurance: 300,
            accountantFees: 400,
            otherExpenses: 100,
        });

        expect(result).toBeGreaterThan(0);
    });

    it("should respect custom profit margin and working hours", () => {
        const result = calculateExpenses({
            monthlyExpenses: 4000,
            desiredProfitMargin: 50,
            workingHoursPerMonth: 100,
        });
        
        expect(result).toBeGreaterThan(0);
    });

    it("should respect custom taxesPercentage", () => {
        const resultLowTax = calculateExpenses({
            monthlyExpenses: 4000,
            taxesPercentage: 1,
        });

        const resultHighTax = calculateExpenses({
            monthlyExpenses: 4000,
            taxesPercentage: 20,
        });

        expect(resultHighTax).toBeGreaterThan(resultLowTax);
    });
});
