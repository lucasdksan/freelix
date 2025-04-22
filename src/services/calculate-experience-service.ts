type ExperienceInput = {
    yearsOfExperience: number;
    skillLevel: "junior" | "pleno" | "senior";
    certificationsCount?: number;
    specializationArea?: "tech" | "design" | "business" | "marketing";
}

export function calculateExperience({
    skillLevel,
    yearsOfExperience,
    certificationsCount = 0,
    specializationArea = "tech",
}: ExperienceInput) {
    const sanitizedYears = Math.max(0, Math.min(yearsOfExperience, 40));

    let baseRate = 0;
    let growthRatePerYear = 0;

    switch (skillLevel) {
        case "junior":
            baseRate = 25;
            growthRatePerYear = 0.03;
            break;
        case "pleno":
            baseRate = 50;
            growthRatePerYear = 0.04;
            break;
        case "senior":
            baseRate = 80;
            growthRatePerYear = 0.05;
            break;
        default:
            baseRate = 30;
            growthRatePerYear = 0.03;
            break;
    }

    const experienceMultiplier = Math.pow(1 + growthRatePerYear, sanitizedYears);

    // Cada certificação aumenta 2% no rate final
    const certificationBonusMultiplier = 1 + certificationsCount * 0.02;

    // Área de especialização pode ter ajustes
    let specializationMultiplier = 1;
    switch (specializationArea) {
        case "tech":
            specializationMultiplier = 1.1; // tech normalmente paga mais
            break;
        case "design":
            specializationMultiplier = 1.05;
            break;
        case "business":
            specializationMultiplier = 1;
            break;
        case "marketing":
            specializationMultiplier = 0.95; // mercado um pouco mais competitivo
            break;
        default:
            specializationMultiplier = 1;
            break;
    }

    const hourlyRate = baseRate * experienceMultiplier * certificationBonusMultiplier * specializationMultiplier;

    return Math.round(hourlyRate);
}
