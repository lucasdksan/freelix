import { z } from "zod";

export const generateProposalSchema = z.object({
    city: z.string(),
    nameCompany: z.string(), 
    partners: z.string().optional(),
    descriptionProducts: z.string(), 
    name: z.string(),
    introduction: z.string(), 
    scope: z.string(),
    term: z.string(), 
    value: z.string(),
    address: z.string(), 
    phone: z.string(),
});

export type GenerateProposalDTO = z.infer<typeof generateProposalSchema>;