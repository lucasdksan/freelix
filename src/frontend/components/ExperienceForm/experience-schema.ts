import { z } from "zod";

export const schema = z.object({
    yearsOfExperience: z.number().min(1),
    skillLevel: z.enum(["junior", "pleno", "senior"]),
    certificationsCount: z.number().min(0),
    specializationArea: z.enum(["tech", "design", "business", "marketing"]), 
    completedProjects: z.number().min(0),
    recurringClients: z.number().min(0),
});

export type ExperienceFormData = z.infer<typeof schema>;