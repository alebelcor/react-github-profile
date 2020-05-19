import React from 'react';

import { useRepositories } from 'src/hooks/useRepositories';

import RepositoryCard from 'src/components/RepositoryCard';

const RepositoriesPage = () => {
  const { error, status, repositories } = useRepositories();

  if (error) {
    return <span>Error loading repositories.</span>;
  }

  if (status === 'loading') {
    return (
      <ul>
        {([...new Array(5)]).map((_item, index) => {
          return <RepositoryCard key={index} isLoading />;
        })}
      </ul>
    );
  }

  return (
    <ul>
      {repositories.map(({ id, html_url, name, archived: isArchived, description }) => {
        return (
          <RepositoryCard
            key={id}
            url={html_url}
            name={name}
            isArchived={isArchived}
            description={description}
          />
        );
      })}
    </ul>
  );
};

export default RepositoriesPage;
