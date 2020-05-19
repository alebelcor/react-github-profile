import React from 'react';
import ContentLoader from 'react-content-loader';

const RepositoryCard = ({ className, url, name, isArchived, description }) => {
  return (
    <li className={className}>
      <div className="w-5/6">
        <div className="mb-1 inline-block">
          <h3 className="font-semibold text-xl break-all">
            <a
              className="text-github-blue hover:underline focus:underline"
              href={url}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              {name}
            </a>

            {isArchived && (
              <span className="mb-1 ml-1 p-1 inline-block border border-gray-300 leading-none align-middle text-xs font-normal text-gray-700 rounded-sm">
                Archived
              </span>
            )}
          </h3>
        </div>

        <div>
          <p className="mb-2 pr-6 inline-block text-gray-700">{description}</p>
        </div>
      </div>

      <div className="w-1/6 flex flex-col justify-around">
        <div className="text-right">
          <a
            className="py-1 px-2 border border-gray-400 hover:border-gray-500 text-xs font-semibold leading-snug align-middle rounded whitespace-no-wrap bg-gray-100 hover:bg-gray-200"
            href={url}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            ★ Star
          </a>
        </div>
      </div>
    </li>
  );
};

export default ({
  isLoading = false,
  className = 'flex py-6 w-full border-b border-gray-300',
  url,
  name,
  isArchived,
  description,
}) => {
  if (isLoading) {
    return (
      <li className={className}>
        <ContentLoader width={280} height={63} viewBox="0 0 280 63">
          <rect x="0" y="0" rx="0" ry="0" width="150" height="25" />
          <rect x="0" y="45" rx="0" ry="0" width="280" height="18" />
        </ContentLoader>
      </li>
    );
  }

  return (
    <RepositoryCard
      className={className}
      url={url}
      name={name}
      isArchived={isArchived}
      description={description}
    />
  );
};
