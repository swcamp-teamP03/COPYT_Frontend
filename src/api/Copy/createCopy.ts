import { CopyConditionInit } from '../../components/CreateCopy/CreateCopyCondition/copyConditionReducer';
import { api } from '..';
import { PostCopyList, CopyListType } from '../../types/copy';

export const postCopies = async (condtion: CopyConditionInit): Promise<CopyListType[]> => {
  const res = await api.post('/gptcopy', { ...condtion });
  const data: PostCopyList = res.data;
  return data.resultList.map((list, idx) => {
    return { ...list, copyId: idx + 1, isPinned: false };
  });
};
