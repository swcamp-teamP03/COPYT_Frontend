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

export const downloadExcelFile = async ({ id, password, downloadReason }: { id: string; password: string; downloadReason: string }): Promise<void> => {
  try {
    // 1. post 요청으로 비밀번호가 일치한지 확인
    await api.post(`/groups/${id}/file/download`, {
      downloadReason,
      password,
    });

    // 2. get 요청으로 파일 다운로드
    const response = await api.get(`/groups/${id}/file/download`, { responseType: 'blob' });
    const contentDisposition = response.headers['content-disposition'];
    const filename = contentDisposition.split('filename=')[1].replace(/"/g, '');
    const blob = new Blob([response.data], { type: response.headers['content-type'] });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    if (link.parentNode) {
      link.parentNode.removeChild(link);
    }
  } catch (error) {
    throw new Error('Failed to download Excel file');
  }
};
