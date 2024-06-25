import { HttpResponse, StrictResponse, http } from 'msw';

export const watchHandlers = [
  http.post('/w/api.php', async ({ request }) => {
    const formData = await request.formData();

    if (formData.get('action') !== 'watch') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return fetch(request) as Promise<StrictResponse<any>>;
    }

    const watchedState =
      formData.get('unwatch') === '1' ? { unwatched: true } : { watched: true };

    return HttpResponse.json({
      batchcomplete: true,
      watch: [{ title: formData.get('titles'), ns: 0, ...watchedState }],
    });
  }),
];
