import { z } from "zod";

export const schema = z.object({
    monthlyExpenses: z.number().min(0),
    desiredProfitMargin: z.number().min(0).optional(),
    workingHoursPerMonth: z.number().min(0).optional(),
    softwareLicenses: z.number().min(0).optional(),
    healthInsurance: z.number().min(0).optional(),
    accountantFees: z.number().min(0).optional(),
    taxesPercentage: z.number().min(0).optional(),
    otherExpenses: z.number().min(0).optional(),
});

export type ExpenseFormData = z.infer<typeof schema>;