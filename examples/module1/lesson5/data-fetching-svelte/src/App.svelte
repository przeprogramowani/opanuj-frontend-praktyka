<script lang="ts">
  import { onMount } from 'svelte';
  import UsersList from './components/UsersList.svelte';
  import StatusStats from './components/StatusStats.svelte';
  import AddUserDialog from './components/AddUserDialog.svelte';
  import type { User } from './model/User';

  let users = $state<User[]>([]);
  let loading = $state(true);
  let error = $state<string | null>(null);
  let isDialogOpen = $state(false);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/data/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      users = data;
    } catch (e) {
      error = e instanceof Error ? e.message : 'An error occurred';
    } finally {
      loading = false;
    }
  };

  onMount(fetchUsers);
</script>

<main class="container mx-auto px-4 py-8">
  <div class="flex justify-between items-center mb-6">
    <h1 class="text-3xl font-bold">Contacts List</h1>
    <button
      on:click={() => (isDialogOpen = true)}
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

  {#if loading}
    <div class="flex justify-center items-center h-32">
      <div class="text-gray-600">Loading contacts...</div>
    </div>
  {:else if error}
    <div
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
    >
      {error}
    </div>
  {:else}
    <StatusStats {users} />
    <UsersList {users} />
  {/if}

  <AddUserDialog
    isOpen={isDialogOpen}
    on:close={() => (isDialogOpen = false)}
    on:userAdded={fetchUsers}
  />
</main>

<style>
  :global(body) {
    background-color: #f3f4f6;
  }
</style>
