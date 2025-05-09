type ExperienceInput = {
    yearsOfExperience: number;
    skillLevel: "junior" | "pleno" | "senior";
    certificationsCount?: number;
    specializationArea?: "tech" | "design" | "business" | "marketing";

    completedProjects?: number;
    recurringClients?: number;
};

const dataSkillLevel = {
    "junior": {
        baseRate: 25,
        growthRatePerYear: 0.03,
    },
    "pleno": {
        baseRate: 50,
        growthRatePerYear: 0.04,
    },
    "senior": {
        baseRate: 80,
        growthRatePerYear: 0.05,
    },
};

const dataSpecializationArea = {
    "tech": 1.1,
    "design": 1.05,
    "business": 1,
    "marketing": 0.95,
};

export function calculateExperience({
    skillLevel,
    yearsOfExperience,
    certificationsCount = 0,
    specializationArea = "tech",
    completedProjects = 0,
    recurringClients = 0,
}: ExperienceInput) {
    const sanitizedYears = Math.max(0, Math.min(yearsOfExperience, 40));
    const { baseRate, growthRatePerYear } = dataSkillLevel[skillLevel];

    const experienceMultiplier = 1 + (growthRatePerYear * sanitizedYears);

    const maxCertifications = Math.min(certificationsCount, 5);
    const certificationBonusMultiplier = 1 + maxCertifications * 0.01;

    const specializationMultiplier = dataSpecializationArea[specializationArea];

    const projectMultiplier = 1 + Math.min(completedProjects * 0.005, 0.10);
    const clientMultiplier = 1 + Math.min(recurringClients * 0.01, 0.05);

    const hourlyRate =
        baseRate *
        experienceMultiplier *
        certificationBonusMultiplier *
        specializationMultiplier *
        projectMultiplier *
        clientMultiplier;

    return Math.round(hourlyRate);
}