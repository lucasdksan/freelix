import { z } from "zod";

export const schema = z.object({
    seniority: z.enum(["junior", "pleno", "senior"]),
    experience: z.number().min(0),
    
    complexity: z.enum(["low", "mid", "high"]),
    monthlyCost: z.number().min(0),
    
    dailyHoursAvailable: z.number().min(0),
    profitMargin: z.number().min(0).optional(),
    
    city: z.string(),
    nameCompany: z.string(), 
    
    partners: z.string().optional(),
    descriptionProducts: z.string(), 
    
    name: z.string(),
    introduction: z.string(), 
    
    scope: z.string(),
    address: z.string(), 
    
    phone: z.string(),
});

export type EstimateTermFormData = z.infer<typeof schema>;