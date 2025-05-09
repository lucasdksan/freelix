import { calculateExperience } from "../calculate-experience-service";

describe("calculateExperience", () => {
    it("should calculate correctly for a junior with 0 years of experience", () => {
        const result = calculateExperience({
            skillLevel: "junior",
            yearsOfExperience: 0,
        });

        const expected = Math.round(25 * 1 * 1 * 1.1);
        expect(result).toBe(expected);
    });

    it("should calculate correctly for a senior with 10 years, 2 certifications, in design", () => {
        const result = calculateExperience({
            skillLevel: "senior",
            yearsOfExperience: 10,
            certificationsCount: 2,
            specializationArea: "design",
        });

        const baseRate = 80;
        const growth = 1 + (0.05 * 10);
        const certBonus = 1 + 0.02;
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
            specializationArea: "tech",
        });

        const marketing = calculateExperience({
            skillLevel: "pleno",
            yearsOfExperience: 10,
            specializationArea: "marketing",
        });

        expect(tech).toBeGreaterThan(marketing);
    });

    it("should apply cap on project bonus after 20 projects", () => {
        const twentyProjects = calculateExperience({
            skillLevel: "pleno",
            yearsOfExperience: 10,
            completedProjects: 20,
        });

        const fiftyProjects = calculateExperience({
            skillLevel: "pleno",
            yearsOfExperience: 10,
            completedProjects: 50,
        });

        expect(fiftyProjects).toBe(twentyProjects);
    });

    it("should increase value with more recurring clients, capped at 5", () => {
        const twoClients = calculateExperience({
            skillLevel: "pleno",
            yearsOfExperience: 10,
            recurringClients: 2,
        });

        const fiveClients = calculateExperience({
            skillLevel: "pleno",
            yearsOfExperience: 10,
            recurringClients: 5,
        });

        const manyClients = calculateExperience({
            skillLevel: "pleno",
            yearsOfExperience: 10,
            recurringClients: 10,
        });

        expect(fiveClients).toBeGreaterThan(twoClients);
        expect(manyClients).toBe(fiveClients);
    });
});
