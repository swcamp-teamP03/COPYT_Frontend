import { useQuery } from '@tanstack/react-query';
import { getCopyGroupDetail } from '../../api/Copy/copyGroups';

const useCopyDetailQuery = (id: string | undefined) => {
  return useQuery(['copyDetails', id], getCopyGroupDetail, {
    enabled: !!id,
  });
};

export default useCopyDetailQuery;
