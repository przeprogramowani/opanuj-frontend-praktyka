<script lang="ts">
  import { useUsers } from '../hooks/useUsers';
  import { getStatusColor } from '../utils/statusColors';
  import type { User } from '../model/User';

  const users = useUsers();
  let statusCounts = $state<Record<string, number>>({});

  $effect(() => {
    if ($users.data) {
      statusCounts = $users.data.reduce(
        (acc: Record<string, number>, user: User) => {
          acc[user.status] = (acc[user.status] || 0) + 1;
          return acc;
        },
        {},
      );
    }
  });
</script>

{#if $users.isLoading}
  <div>Loading stats...</div>
{:else if $users.isError}
  <div>Error: {$users.error.message}</div>
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
