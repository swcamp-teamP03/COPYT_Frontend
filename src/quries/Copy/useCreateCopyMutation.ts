import { useMutation } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import { useRecoilState } from 'recoil';
import { postCopies } from '../../api/Copy/createCopy';
import { copyListState } from '../../store/copyListState';
import { CopyListType } from '../../types/copy';

interface useCreateCopyMutationProps {
  setCopyList: Dispatch<SetStateAction<CopyListType[]>>;
  copyList: CopyListType[];
}

const useCreateCopyMutation = ({ copyList, setCopyList }: useCreateCopyMutationProps) => {
  // const [copyList, setCopyList] = useRecoilState(copyListState);
  return useMutation(postCopies, {
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

export default useCreateCopyMutation;
