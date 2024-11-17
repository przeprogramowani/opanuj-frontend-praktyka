import { mount } from 'svelte';
import './app.css';
import App from './App.svelte';
import { QueryClient } from '@tanstack/svelte-query';

const queryClient = new QueryClient();

const app = mount(App, {
  target: document.getElementById('app')!,
});

export default app;
