import { useQuery } from '@tanstack/react-query';
import { getCopyGroups } from '../../api/Copy/copyGroups';

const useCopyGroupsQuery = (page: number, count: number) => {
  return useQuery(['copyGroups'], () => getCopyGroups(page, count));
};

export default useCopyGroupsQuery;
