import { api } from '../index';
import { ClientGroupCreateType, ExcelDownloadType } from '../../types/client';

export const postClientCreate = async (formData: FormData): Promise<ClientGroupCreateType> => {
  const res = await api.post('/groups', formData);
  return res.data.data;
};

export const putClientEdit = async (formData: FormData): Promise<ClientGroupCreateType> => {
  const res = await api.put('/groups/${id}', formData);
  return res.data.data;
};

export const postExcelDown = async (downloadReason: string): Promise<ExcelDownloadType> => {
  const res = await api.post('/groups/${id}/file/download');
  return res.data.data;
};
