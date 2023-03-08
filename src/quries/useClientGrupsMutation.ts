import { useQuery } from '@tanstack/react-query';
import { getClientGroupList } from '../api/client/group';

const useClientGroupsQuery = (page: number, count: number) => {
  return useQuery(['groups', page, count], getClientGroupList);
};

export default useClientGroupsQuery;
