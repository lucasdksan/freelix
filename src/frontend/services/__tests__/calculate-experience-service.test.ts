import { calculateExperience } from "../calculate-experience-service";

describe("calculateExperience", () => {
    it("should calculate correctly for a junior with 0 years of experience", () => {
        const result = calculateExperience({
            skillLevel: "junior",
            yearsOfExperience: 0
        });

        expect(result).toBe(Math.round(25 * 1 * 1 * 1.1));
    });

    it("should calculate correctly for a senior with 10 years, 2 certifications, in design", () => {
        const result = calculateExperience({
            skillLevel: "senior",
            yearsOfExperience: 10,
            certificationsCount: 2,
            specializationArea: "design"
        });

        const baseRate = 80;
        const growth = Math.pow(1 + 0.05, 10);
        const certBonus = 1 + 0.02 * 2;
        const specMultiplier = 1.05;
        const expected = Math.round(baseRate * growth * certBonus * specMultiplier);

        expect(result).toBe(expected);
    });

    it("should cap yearsOfExperience at 40", () => {
        const result1 = calculateExperience({
            skillLevel: "pleno",
            yearsOfExperience: 45,
        });
        const result2 = calculateExperience({
            skillLevel: "pleno",
            yearsOfExperience: 40,
        });

        expect(result1).toBe(result2);
    });

    it("should treat negative years of experience as 0", () => {
        const result = calculateExperience({
            skillLevel: "junior",
            yearsOfExperience: -5,
        });
        const expected = Math.round(25 * 1 * 1 * 1.1);
        expect(result).toBe(expected);
    });

    it("should return higher value for higher skill levels given same input", () => {
        const junior = calculateExperience({
            skillLevel: "junior",
            yearsOfExperience: 5,
        });

        const pleno = calculateExperience({
            skillLevel: "pleno",
            yearsOfExperience: 5,
        });

        const senior = calculateExperience({
            skillLevel: "senior",
            yearsOfExperience: 5,
        });

        expect(pleno).toBeGreaterThan(junior);
        expect(senior).toBeGreaterThan(pleno);
    });

    it("should return higher value for more certifications", () => {
        const noCerts = calculateExperience({
            skillLevel: "pleno",
            yearsOfExperience: 10,
            certificationsCount: 0,
        });

        const withCerts = calculateExperience({
            skillLevel: "pleno",
            yearsOfExperience: 10,
            certificationsCount: 5,
        });

        expect(withCerts).toBeGreaterThan(noCerts);
    });

    it("should adjust value based on specialization area", () => {
        const tech = calculateExperience({
            skillLevel: "pleno",
            yearsOfExperience: 10,
            specializationArea: "tech"
        });

        const marketing = calculateExperience({
            skillLevel: "pleno",
            yearsOfExperience: 10,
            specializationArea: "marketing"
        });

        expect(tech).toBeGreaterThan(marketing);
    });
});
