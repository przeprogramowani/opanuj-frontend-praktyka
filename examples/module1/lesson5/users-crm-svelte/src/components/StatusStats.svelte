<script lang="ts">
  import { onMount } from 'svelte';
  import type { User } from '../model/User';
  import { getStatusColor } from '../utils/statusColors';

  let users = $state<User[]>([]);
  let loading = $state(true);
  let error = $state<string | null>(null);
  let statusCounts = $state<Record<string, number>>({});

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

  $effect(() => {
    statusCounts = users.reduce((acc: Record<string, number>, user: User) => {
      acc[user.status] = (acc[user.status] || 0) + 1;
      return acc;
    }, {});
  });

  onMount(fetchUsers);
</script>

{#if loading}
  <div>Loading stats...</div>
{:else if error}
  <div>Error: {error}</div>
{:else}
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
    {#each Object.entries(statusCounts) as [status, count]}
      <div
        class="bg-white rounded-lg shadow p-4"
        data-testid="status-stats-item"
      >
        <div class="flex flex-col items-center">
          <span
            class={`px-2 py-1 rounded-lg text-sm font-medium mb-2 ${getStatusColor(
              status,
            )}`}
          >
            {status}
          </span>
          <span class="text-2xl font-bold">{count}</span>
        </div>
      </div>
    {/each}
  </div>
{/if}
