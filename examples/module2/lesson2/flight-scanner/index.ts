const form = document.querySelector('#flight-form') as HTMLFormElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
});
