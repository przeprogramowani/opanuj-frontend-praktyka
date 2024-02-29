import axios, { AxiosError } from 'axios';

const API_URL = '/api/data/users?error=true';

export async function getUsers() {
  try {
    console.log(`Send analytics event about the following request: ${API_URL}`);

    /* Reszta kodu związanego z analityką */
    // ...

    /* Zwrócenie danych */
    return await axios.get(API_URL);
  } catch (error) {
    console.log(
      `Send analytics event about the following error: ${
        (error as AxiosError).message
      } from ${API_URL}`
    );

    /* Reszta kodu związanego z zalogowaniem błędu */
    // ...

    /* Przekazanie błędu do dalszej obsługi po stronie UI */
    throw error;
  }
}
