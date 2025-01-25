import { ScannerFormSchema, type ScannerFormFields } from './models/ScannerForm';
import { z } from 'zod';

const form = document.querySelector('#flight-form') as HTMLFormElement;
const errorsWrapper = document.querySelector('#errors') as HTMLUListElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  errorsWrapper.innerHTML = '';
try {
  const data = ScannerFormSchema.parse(Object.fromEntries(formData.entries()));
} catch (error) {
  if (error instanceof z.ZodError) {
    error.errors.forEach((err) => {
      errorsWrapper.innerHTML += `<li>${err.path.join('.')} : ${err.message}</li>`;
    });
  } else {
    console.error('Unexpected error:', error);
  }
}
});
