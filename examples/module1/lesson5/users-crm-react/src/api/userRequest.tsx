import axios from 'axios';
import type { User } from '../model/User';
import { API } from './apiSettings';

export const postUser = async ({ name, status }: Omit<User, "id">) => {
    const response = await axios.post<{users: User[]}>(`${API}/users`, { name, status }, { headers: { 'Content-Type': 'application/json' }});
    return response.data;
}

export const fetchUsers = async () => {
    const response = await axios.get<{users: User[]}>(`${API}/users`);

    if (!response.data) {
        throw new Error('Failed to fetch users');
    }

    return response.data;
}