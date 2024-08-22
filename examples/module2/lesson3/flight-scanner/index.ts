import { ZodError } from 'zod';
import { FlightForm, flightFormSchema } from './flightFormSchema';

const form = document.querySelector('#flight-form') as HTMLFormElement;
const displayError = document.querySelector('#errors') as HTMLDivElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const formObject: FlightForm = {
    origin: formData.get('origin') as string,
    destination: formData.get('destination') as string,
    startDate: formData.get('startDate') as string,
    endDate: formData.get('endDate') as string,
    trip: formData.get('trip') as 'one-way' | 'round-trip',
  };

  try {
    flightFormSchema.parse(formObject);
    displayError.textContent = '';
  } catch (error) {
    if (error instanceof ZodError) {
      displayError.innerHTML = error.errors
        .map((e) => e.message)
        .join('<br /> ');
    } else {
      displayError.textContent = 'Unexpected error occurred';
    }
  }
});
