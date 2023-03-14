import { useMutation } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import { postCopyList } from '../../api/Copy/createCopy';
import { CopyListType } from '../../types/copy';

interface useCreateCopyMutationProps {
  setCopyList: Dispatch<SetStateAction<CopyListType[]>>;
  copyList: CopyListType[];
}

const useCreateCopyListMutation = ({ copyList, setCopyList }: useCreateCopyMutationProps) => {
  return useMutation(postCopyList, {
    onSuccess: (data) => {
      const totalData = copyList.concat(data).map((list, idx) => {
        return { ...list, copyId: idx + 1 };
      });
      const pinnedList = totalData.filter((list) => list.isPinned) ?? [];
      const unPinnedList = totalData.filter((list) => !list.isPinned) ?? [];

      setCopyList([...pinnedList, ...unPinnedList]);
    },
  });
};

export default useCreateCopyListMutation;
