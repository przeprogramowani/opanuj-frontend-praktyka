<script lang="ts">
  interface Props {
    isOpen?: boolean;
    onClose: () => void;
  }

  let { isOpen = false, onClose }: Props = $props();

  let name = $state('');
  let status = $state('New');
  let loading = $state(false);
  let error: string | null = $state(null);

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

    loading = true;
    error = null;

    try {
      const response = await fetch('http://localhost:3000/api/data/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, status }),
      });

      if (!response.ok) throw new Error('Failed to add user');

      onClose();
    } catch (e) {
      error = e instanceof Error ? e.message : 'Failed to add user';
    } finally {
      loading = false;
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
            disabled={loading}
            class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Adding...' : 'Add Contact'}
          </button>
        </div>
      </form>
    </div>
  </div>
{/if}
