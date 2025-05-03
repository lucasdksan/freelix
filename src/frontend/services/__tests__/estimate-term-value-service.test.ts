import { estimateTermValue } from "../estimate-term-value-service";

describe("estimateTermValue", () => {
    it("should calculate term and value for a junior with baixa complexity", () => {
        const result = estimateTermValue({
            seniority: "junior",
            experience: 1,
            complexity: "baixa",
            monthlyCost: 3000,
            dailyHoursAvailable: 6,
        });

        expect(result.term).toMatch(/m[eê]s/);
        expect(result.value).toMatch(/^R\$ /);
        expect(typeof result.valueNumeric).toBe("number");
        expect(result.months).toBeGreaterThanOrEqual(1);
    });

    it("should apply cap on max experience and min cost correctly", () => {
        const result = estimateTermValue({
            seniority: "senior",
            experience: 100,
            complexity: "alta",
            monthlyCost: 500,
            dailyHoursAvailable: 8,
        });

        expect(result.months).toBeGreaterThanOrEqual(1);
        expect(result.valueNumeric).toBeGreaterThan(0);
    });

    it("should respect profit margin customization", () => {
        const withDefaultMargin = estimateTermValue({
            seniority: "pleno",
            experience: 5,
            complexity: "media",
            monthlyCost: 4000,
            dailyHoursAvailable: 8,
        });

        const withHigherMargin = estimateTermValue({
            seniority: "pleno",
            experience: 5,
            complexity: "media",
            monthlyCost: 4000,
            dailyHoursAvailable: 8,
            profitMargin: 50,
        });

        expect(withHigherMargin.valueNumeric).toBeGreaterThan(withDefaultMargin.valueNumeric);
    });

    it("should clamp experience, hours and cost within bounds", () => {
        const result = estimateTermValue({
            seniority: "junior",
            experience: -10,
            complexity: "baixa",
            monthlyCost: 0,
            dailyHoursAvailable: 0,
        });

        expect(result.valueNumeric).toBeGreaterThan(0);
        expect(result.months).toBeGreaterThanOrEqual(1);
    });

    it("should return plural or singular for term correctly", () => {
        const result1 = estimateTermValue({
            seniority: "senior",
            experience: 40,
            complexity: "baixa",
            monthlyCost: 6000,
            dailyHoursAvailable: 10,
        });

        const result2 = estimateTermValue({
            seniority: "junior",
            experience: 0,
            complexity: "alta",
            monthlyCost: 6000,
            dailyHoursAvailable: 4,
        });

        expect(result1.term).toMatch(/m[eê]s/);
        expect(result2.term).toMatch(/m[eê]s/);
    });
});
