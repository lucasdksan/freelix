import { z } from "zod";

export const schema = z.object({
    monthlySalary: z.number().min(0),
    benefitsValue: z.number().min(0),
    workingHoursPerMonth: z.number().min(0),
    freelanceMultiplier: z.number().min(0),
});

export type SalaryFormData = z.infer<typeof schema>;