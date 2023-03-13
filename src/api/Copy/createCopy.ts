import { api } from '..';
import { PostCopyList, CopyListType } from '../../types/copy';

interface CopyCondition {
  brandName: string;
  copyLength: number;
  createCount: number;
  keyword: string;
  productName: string;
  type: string;
  sector: string;
}

export const postCopies = async (condtion: CopyCondition): Promise<CopyListType[]> => {
  const res = await api.post('/gptcopy', { ...condtion });
  const data: PostCopyList = res.data.data;
  return data.resultList.map((list, idx) => {
    return { ...list, copyId: idx + 1, isPinned: false };
  });
};

export const updateCopy = async ({ id, list }: { id: string | undefined; list: CopyListType[] }) => {
  const res = await api.put(`/copy/${id}`, { ...list });
  if (res.statusText === 'OK') {
    return res.data.data;
  }
};
