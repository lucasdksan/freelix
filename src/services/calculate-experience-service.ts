type ExperienceInput = {
    yearsOfExperience: number;
    skillLevel: "junior" | "pleno" | "senior";
}

export function calculateExperience({ skillLevel, yearsOfExperience }: ExperienceInput) {
    let baseRate = 30;

    switch(skillLevel) {
        case "junior":
            baseRate *= 1;
            break;
        case "pleno":
            baseRate *= 1.5;
            break;
        case "senior":
            baseRate *= 2;
            break;
        default:
            baseRate = baseRate;
            break;
    }

    const experienceMultiplier = 1 + Math.min(yearsOfExperience, 20) * 0.05;
    const hourlyRate = baseRate * experienceMultiplier;

    return Math.round(hourlyRate);
}