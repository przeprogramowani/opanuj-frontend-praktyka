export const statusColors = {
  Qualified: 'bg-green-100 text-green-800',
  Rejected: 'bg-red-100 text-red-800',
  'In Progress': 'bg-yellow-100 text-yellow-800',
  Converted: 'bg-blue-100 text-blue-800',
  New: 'bg-purple-100 text-purple-800',
  Contacted: 'bg-gray-100 text-gray-800',
} as const;

export type Status = keyof typeof statusColors;

export const getStatusColor = (status: string): string => {
  return statusColors[status as Status] || 'bg-gray-100 text-gray-800';
};
