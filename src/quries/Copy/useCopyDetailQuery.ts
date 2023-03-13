import { useQuery } from '@tanstack/react-query';
import { getCopyGroupDetail } from '../../api/Copy/copyGroups';

const useCopyDetailQuery = (id: string | undefined) => {
  return useQuery(['copyDetails', id], getCopyGroupDetail, {
    enabled: !!id,
    select: (data) => {
      const pinnedList = data?.copyList.filter((list) => list.isPinned) ?? [];
      const unPinnedList = data?.copyList.filter((list) => !list.isPinned) ?? [];
      return { ...data, copyList: [...pinnedList, ...unPinnedList] };
    },
  });
};

export default useCopyDetailQuery;
