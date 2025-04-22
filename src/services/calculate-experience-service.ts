type ExperienceInput = {
    yearsOfExperience: number;
    skillLevel: "junior" | "pleno" | "senior";
}

export function calculateExperience({ skillLevel, yearsOfExperience }: ExperienceInput) {
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
    const hourlyRate = baseRate * experienceMultiplier;

    return Math.round(hourlyRate);
}