import { z } from 'zod';

const dateRegex = /^\d{2}-\d{2}-\d{4}$/;

export const flightFormSchema = z.object({
  origin: z
    .string()
    .min(3, {
      message: 'Origin must be at least 3 characters',
    })
    .max(20, { message: 'Origin must be at most 20 characters' }),
  destination: z
    .string()
    .min(3, { message: 'Destination must be at least 3 characters' })
    .max(20, { message: 'Destination must be at most 20 characters' }),
  startDate: z.string().refine((date) => dateRegex.test(date), {
    message: 'Invalid date format. Use DD-MM-YYYY.',
  }),
  endDate: z.string().refine((date) => dateRegex.test(date), {
    message: 'Invalid date format. Use DD-MM-YYYY.',
  }),
  trip: z.enum(['one-way', 'round-trip']),
});

export type FlightForm = z.infer<typeof flightFormSchema>;
