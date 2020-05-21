import React from 'react';
import ContentLoader from 'react-content-loader';

import { withQuery } from 'src/hocs/withQuery';

import { useUser } from 'src/hooks/useUser';

const Loading = () => {
  return (
    <ContentLoader viewBox="0 0 260 260">
      <rect x="0" y="0" rx="0" ry="0" width="260" height="260" />
    </ContentLoader>
  );
};

const afterQuery = ({ avatar_url: imageUrl }) => {
  return {
    imageUrl,
  };
};

const Success = ({ imageUrl, foo }) => {
  return (
    <a
      href="https://github.com/account"
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      <span className="sr-only">Change your avatar</span>

      <img
        className="w-full h-full align-middle rounded"
        width="260"
        height="260"
        src={imageUrl}
        alt=""
      />
    </a>
  );
};

const Failure = () => {
  return <span>Error loading avatar.</span>;
};

const Empty = () => {
  return <span>Empty response.</span>;
};

export default withQuery({
  queryHook: useUser,
  afterQuery,
  Loading,
  Success,
  Failure,
  Empty,
});
