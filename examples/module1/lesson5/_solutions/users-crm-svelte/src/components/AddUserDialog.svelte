<script lang="ts">
  import { useAddUser } from '../hooks/useUsers';

  interface Props {
    isOpen?: boolean;
    onClose: () => void;
  }

  let { isOpen = false, onClose }: Props = $props();

  let name = $state('');
  let status = $state('New');
  let error: string | null = $state(null);

  const addUser = useAddUser();

  const statuses = [
    'New',
    'Contacted',
    'In Progress',
    'Qualified',
    'Converted',
    'Rejected',
  ];

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    if (!name.trim()) {
      error = 'Name is required';
      return;
    }

    error = null;

    try {
      await $addUser.mutateAsync({ name, status });
      onClose();
    } catch (e) {
      error = e instanceof Error ? e.message : 'Failed to add user';
    }
  };

  const closeDialog = () => {
    name = '';
    status = 'New';
    error = null;
    onClose();
  };
</script>

{#if isOpen}
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
    data-testid="add-user-dialog"
  >
    <div class="bg-white rounded-lg p-6 w-full max-w-md">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold">Add New Contact</h2>
        <button onclick={closeDialog} class="text-gray-500 hover:text-gray-700">
          ✕
        </button>
      </div>

      {#if error}
        <div class="mb-4 p-2 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      {/if}

      <form
        onsubmit={handleSubmit}
        class="space-y-4"
        data-testid="add-user-form"
      >
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Name</label
          >
          <input
            type="text"
            id="name"
            bind:value={name}
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter name"
          />
        </div>

        <div>
          <label for="status" class="block text-sm font-medium text-gray-700"
            >Status</label
          >
          <select
            id="status"
            bind:value={status}
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {#each statuses as statusOption}
              <option value={statusOption}>{statusOption}</option>
            {/each}
          </select>
        </div>

        <div class="flex justify-end space-x-2">
          <button
            type="button"
            onclick={closeDialog}
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={$addUser.isPending}
            class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {$addUser.isPending ? 'Adding...' : 'Add Contact'}
          </button>
        </div>
      </form>
    </div>
  </div>
{/if}
