import React from 'react';
import ContentLoader from 'react-content-loader';

import { useUser } from 'src/hooks/useUser';

const Avatar = ({ imageUrl }) => {
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

export default () => {
  const {
    error,
    status,
    user: { avatar_url: imageUrl },
  } = useUser();

  if (error) {
    return <span>Error loading avatar.</span>;
  }

  if (status === 'loading') {
    return (
      <ContentLoader viewBox="0 0 260 260">
        <rect x="0" y="0" rx="0" ry="0" width="260" height="260" />
      </ContentLoader>
    );
  }

  return <Avatar imageUrl={imageUrl} />;
};
