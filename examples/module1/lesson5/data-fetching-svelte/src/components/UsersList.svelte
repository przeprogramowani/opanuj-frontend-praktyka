<script lang="ts">
  import type { User } from '../model/User';
  import { getStatusColor } from '../utils/statusColors';

  interface Props {
    users: User[];
  }

  let { users }: Props = $props();
</script>

<div class="grid gap-4">
  {#each users as user (user.id)}
    <div
      class="bg-white rounded-lg shadow p-4 flex justify-between items-center"
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
