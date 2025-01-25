import { z } from 'zod';

export const ScannerFormSchema = z.object({
    origin: z.string().min(1, { message: 'Origin cannot be empty' }),
    destination: z.string().min(1, { message: 'Destination cannot be empty' }),
    startDate: z
        .string()
        .regex(/^\d{2}-\d{2}-\d{4}$/, { message: 'Date must be in the format DD-MM-YYYY' }),
    endDate: z
        .string()
        .regex(/^\d{2}-\d{2}-\d{4}$/, { message: 'Date must be in the format DD-MM-YYYY' }),
    trip: z.enum(['one-way', 'round-trip']),
}).refine(
    (data) => {
        const [startDay, startMonth, startYear] = data.startDate.split('-').map(Number);
        const [endDay, endMonth, endYear] = data.endDate.split('-').map(Number);

        const start = new Date(startYear, startMonth - 1, startDay);
        const end = new Date(endYear, endMonth - 1, endDay);

        return start <= end;
    },
    {
        path: ['endDate'], // Ścieżka, gdzie zgłoszony będzie błąd
        message: 'End date must be greater than or equal to start date',
    }
);

export type ScannerFormFields = z.infer<typeof ScannerFormSchema>;
