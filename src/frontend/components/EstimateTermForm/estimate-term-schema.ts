import { z } from "zod";

export const schema = z.object({
    seniority: z.enum(["junior", "pleno", "senior"]),
    experience: z.number().min(0),
    complexity: z.enum(["low", "mid", "high"]),
    monthlyCost: z.number().min(0),
    dailyHoursAvailable: z.number().min(0),
    profitMargin: z.number().min(0).optional(),
});

export type EstimateTermFormData = z.infer<typeof schema>;