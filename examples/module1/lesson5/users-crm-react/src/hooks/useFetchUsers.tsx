import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../api/userRequest';

export const useFetchUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    })    
}