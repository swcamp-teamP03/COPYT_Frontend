import { useQuery } from '@tanstack/react-query';
import { getClientGroupDetail } from '../../api/client/group';

const useClientDetailQuery = (id: string | undefined) => {
  return useQuery(['clientDetails', id], getClientGroupDetail, {
    enabled: !!id,
  });
};

export default useClientDetailQuery;
