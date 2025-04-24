type Level = "junior" | "pleno" | "senior";
type Complexity= "baixa" | "media" | "alta";
type EstimateInput = {
    seniority: Level;
    experience: number;
    complexity: Complexity;
    monthlyCost: number;
    profitMargin?: number;
}

export function estimateTermValue({ 
    complexity, 
    experience, 
    monthlyCost, 
    seniority, 
    profitMargin = 0.2 
}: EstimateInput) {
    const baseTermByLevel: Record<Level, number> = {
        junior: 3,
        pleno: 2,
        senior: 1.5,
    };
    const complexityFactor: Record<Complexity, { prazo: number; custo: number }> = {
        baixa: { prazo: 1, custo: 1 },
        media: { prazo: 1.3, custo: 1.15 },
        alta: { prazo: 1.6, custo: 1.4 },
    };
    const validExperience = Math.max(0, Math.min(experience, 50));
    const validCost = Math.max(monthlyCost, 1000);
    const termBasis = baseTermByLevel[seniority];
    const factor = complexityFactor[complexity];
    const reductionByExperience = 1 - Math.min(0.3, validExperience * 0.02);
    const deadlineFinal = Math.max(1, Math.ceil(termBasis * factor.prazo * reductionByExperience));
    const costFinal = Math.ceil(validCost * factor.custo * deadlineFinal * (1 + profitMargin));

    return {
        term: `${deadlineFinal} ${deadlineFinal > 1 ? 'meses' : 'mês'}`,
        value: `R$ ${costFinal.toLocaleString('pt-BR')}`,
        valueNumeric: costFinal,
        months: deadlineFinal
    };
}