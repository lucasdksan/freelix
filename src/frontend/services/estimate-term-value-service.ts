type Level = "junior" | "pleno" | "senior";
type Complexity = "baixa" | "media" | "alta";
type EstimateInput = {
    seniority: Level;
    experience: number;
    complexity: Complexity;
    monthlyCost: number;
    dailyHoursAvailable: number;
    profitMargin?: number;
};

export function estimateTermValue({
    complexity,
    experience,
    monthlyCost,
    seniority,
    dailyHoursAvailable,
    profitMargin = 20,
}: EstimateInput) {
    const baseTermByLevel: Record<Level, number> = {
        junior: 3,
        pleno: 2,
        senior: 1.5,
    };

    const complexityFactor: Record<Complexity, { term: number; cost: number }> = {
        baixa: { term: 1, cost: 1 },
        media: { term: 1.3, cost: 1.15 },
        alta: { term: 1.6, cost: 1.4 },
    };

    const validExperience = Math.max(0, Math.min(experience, 50));
    const validCost = Math.max(monthlyCost, 1000);
    const validDailyHours = Math.max(1, Math.min(dailyHoursAvailable, 12));
    const termBasis = baseTermByLevel[seniority];
    const factor = complexityFactor[complexity];
    const reductionByExperience = 1 - Math.min(0.3, validExperience * 0.02);
    const workloadAdjustment = 8 / validDailyHours;
    const rawTerm = termBasis * factor.term * reductionByExperience * workloadAdjustment;
    const deadlineFinal = Math.max(1, Math.ceil(rawTerm));
    const costFinal = Math.ceil(validCost * factor.cost * deadlineFinal * (1 + (profitMargin / 100)));

    return {
        term: `${deadlineFinal} ${deadlineFinal > 1 ? 'meses' : 'mês'}`,
        value: `R$ ${costFinal.toLocaleString('pt-BR')}`,
        valueNumeric: costFinal,
        months: deadlineFinal,
    };
}