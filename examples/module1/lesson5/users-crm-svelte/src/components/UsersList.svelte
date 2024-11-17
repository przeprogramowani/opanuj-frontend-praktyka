<script lang="ts">
  import { onMount } from 'svelte';
  import type { User } from '../model/User';
  import { getStatusColor } from '../utils/statusColors';

  let users = $state<User[]>([]);
  let loading = $state(true);
  let error = $state<string | null>(null);

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

{#if loading}
  <div>Loading users...</div>
{:else if error}
  <div>Error: {error}</div>
{:else}
  <div class="grid gap-4" data-testid="users-list">
    {#each users as user (user.id)}
      <div
        class="bg-white rounded-lg shadow p-4 flex justify-between items-center"
        data-testid="user-item"
      >
        <div class="flex flex-row justify-between items-center w-full">
          <h3 class="text-lg font-semibold">{user.name}</h3>
          <span
            class={`px-2 py-1 rounded-lg text-sm font-medium ${getStatusColor(
              user.status,
            )}`}
          >
            {user.status}
          </span>
        </div>
      </div>
    {/each}
  </div>
{/if}
