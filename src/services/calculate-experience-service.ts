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

    const experienceBonus = yearsOfExperience * 2;
    const hourlyRate = baseRate + experienceBonus;

    return Math.round(hourlyRate);
}