import { request } from '@octokit/request';
import { useQuery } from 'react-query';

const fetchUser = async () => {
  return request('GET /user', {
    headers: {
      authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    },
  });
};

export const useUser = () => {
  const { error, status, data: response } = useQuery('user', fetchUser, {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  return {
    error,
    status,
    user: response?.data ?? {},
  };
};
