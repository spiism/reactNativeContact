export interface Contact {
  id: number | string;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
  status?: 'online' | 'busy' | 'offline';
}
