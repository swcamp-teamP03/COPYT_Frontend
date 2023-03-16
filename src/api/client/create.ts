import { api } from '../index';
import { ClientGroupCreateType, ExcelDownloadType } from '../../types/client';

export const postClientCreate = async (formData: FormData): Promise<ClientGroupCreateType> => {
  const res = await api.post('/groups', formData);
  return res.data.data;
};

export const putClientEdit = async ({ id, formData }: { id: string | undefined; formData: FormData }): Promise<ClientGroupCreateType> => {
  const res = await api.put(`/groups/${id}`, formData);
  return res.data.data;
};

export const postExcelDown = async ({ id, downloadReason, password }: { id: string | undefined; downloadReason: string; password: string }): Promise<ExcelDownloadType> => {
  const res = await api.post(`/groups/${id}/file/download`, {
    downloadReason,
    password,
    responseType: 'blob',
  });
  return res.data.data;
};
