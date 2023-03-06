import { ConditionInit } from './../../components/CreateCopy/CreateCondition/conditionReducer';
import { api } from '..';
import { PostCopyList, CopyListType } from '../../types/copy';

export const postCopies = async (condtion: ConditionInit): Promise<CopyListType[]> => {
  const res = await api.post('/gptcopy', { ...condtion });
  const data: PostCopyList = res.data;
  return data.resultList.map((list, idx) => {
    return { ...list, id: idx + 1, isPinned: false };
  });
};
