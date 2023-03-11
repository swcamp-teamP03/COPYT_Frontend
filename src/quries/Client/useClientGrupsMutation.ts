import { useQuery } from '@tanstack/react-query';
import { getClientGroups } from '../../api/client/group';

const useClientGroupsQuery = (pageNum: number, count: number) => {
  return useQuery(['copyGroups', pageNum, count], () => getClientGroups(pageNum, count));
};

export default useClientGroupsQuery;
