import { api } from '..';
import { PostCopyList, CopyListType, CopyCondition } from '../../types/copy';

export const postCopyList = async (condtion: CopyCondition): Promise<CopyListType[]> => {
  const res = await api.post('/gptcopy', { ...condtion });
  const data: PostCopyList = res.data.data;
  return data.resultList.map((list, idx) => {
    return { ...list, copyId: idx + 1, isPinned: false };
  });
};

export const updateCopy = async ({ id, list }: { id: string | undefined; list: CopyListType[] }) => {
  const res = await api.put(`/copy/${id}`, { copyList: list });
  if (res.statusText === 'OK') {
    return res.data.data;
  }
};

export const createCopyGroup = async ({ condition, copyList }: { condition: CopyCondition; copyList: CopyListType[] }) => {
  const res = await api.post('/copy', { ...condition, copyList });
  if (res.statusText === 'OK') {
    return res.data.data;
  }
};
