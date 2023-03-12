import { api } from '../index';
import { ClientGroupCreateType } from '../../types/client';

export const postClientCreate = async (formData: FormData): Promise<ClientGroupCreateType> => {
  const res = await api.post('/groups', formData);
  return res.data.data;
};
