<script lang="ts">
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import UsersList from './components/UsersList.svelte';
  import StatusStats from './components/StatusStats.svelte';
  import AddUserDialog from './components/AddUserDialog.svelte';

  let isDialogOpen = $state(false);

  const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
  <main class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">Contacts List</h1>
      <button
        data-testid="add-user-button"
        onclick={() => (isDialogOpen = true)}
        class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
        Add Contact
      </button>
    </div>

    <StatusStats />
    <UsersList />

    <AddUserDialog
      isOpen={isDialogOpen}
      onClose={() => (isDialogOpen = false)}
    />
  </main>
</QueryClientProvider>

<style>
  :global(body) {
    background-color: #f3f4f6;
  }
</style>
