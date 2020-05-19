import { request } from '@octokit/request';
import { useQuery } from 'react-query';

const fetchRepositories = async () => {
  return request('GET /user/repos', {
    headers: {
      authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    },
    direction: 'desc',
    per_page: 100,
    sort: 'pushed',
    type: 'owner',
  });
};

export const useRepositories = () => {
  const { error, status, data: response } = useQuery(
    'repositories',
    fetchRepositories,
    {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  );

  return {
    error,
    status,
    repositories: response?.data ?? [],
  };
};
