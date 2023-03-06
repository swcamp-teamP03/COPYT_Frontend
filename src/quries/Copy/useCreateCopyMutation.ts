import { useMutation } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { postCopies } from '../../api/Copy/createCopy';
import { copyListState } from '../../store/copyListState';

const useCreateCopyMutation = () => {
  const [copyList, setCopyList] = useRecoilState(copyListState);
  return useMutation(postCopies, {
    onSuccess: (data) => {
      const totalData = copyList.concat(data).map((list, idx) => {
        return { ...list, id: idx + 1 };
      });
      setCopyList(totalData);
    },
  });
};

export default useCreateCopyMutation;
