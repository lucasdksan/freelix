type ExperienceInput = {
    yearsOfExperience: number;
    skillLevel: "junior" | "pleno" | "senior";
    certificationsCount?: number;
    specializationArea?: "tech" | "design" | "business" | "marketing";
}

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
}

const dataSpecializationArea = {
    "tech": 1.1,
    "design": 1.05,
    "business": 1,
    "marketing": 0.95,
}

export function calculateExperience({
    skillLevel,
    yearsOfExperience,
    certificationsCount = 0,
    specializationArea = "tech",
}: ExperienceInput) {
    const sanitizedYears = Math.max(0, Math.min(yearsOfExperience, 40));
    const { baseRate, growthRatePerYear } = dataSkillLevel[skillLevel];
    const experienceMultiplier = Math.pow(1 + growthRatePerYear, sanitizedYears);
    const certificationBonusMultiplier = 1 + certificationsCount * 0.02;
    const specializationMultiplier = dataSpecializationArea[specializationArea];
    const hourlyRate = baseRate * experienceMultiplier * certificationBonusMultiplier * specializationMultiplier;

    return Math.round(hourlyRate);
}
