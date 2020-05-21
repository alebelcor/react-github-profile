import React from 'react';
import { NavLink } from 'react-router-dom';
import normalizeUrl from 'normalize-url';

import { useUser } from 'src/hooks/useUser';

import Avatar from 'src/components/Avatar';

import { ROUTES } from 'src/utils/constants';

const PageLayout = ({ children }) => {
  const {
    error,
    data: {
      name,
      login: username,
      bio,
      company,
      location,
      public_repos: repositoryCount = 0,
      blog: url,
    },
  } = useUser();

  if (error) {
    return (
      <div className="my-6 px-5 xl:mx-auto xl:max-w-screen-xl">
        <p>
          <strong>Error</strong>: {error.message}.
        </p>

        <p>
          Please make sure your <code>.env</code> file is setup correctly.
        </p>
      </div>
    );
  }

  const normalizedUrl = url ? normalizeUrl(url, { stripProtocol: true }) : null;

  return (
    <div className="my-6 px-5 xl:mx-auto xl:max-w-screen-xl">
      <div className="md:flex">
        <div className="md:w-1/3 lg:w-1/4 md:pr-4">
          <div className="w-full">
            <div className="flex md:block mb-2">
              <div className="w-1/4 md:w-full pr-5 md:pr-0">
                <Avatar />
              </div>

              <h1 className="w-3/4 md:w-full pl-2 md:pl-0 md:py-4">
                {name && (
                  <span className="block text-2xl font-semibold leading-tight">
                    {name}
                  </span>
                )}
                <span className="block text-xl font-light leading-tight text-gray-600">
                  {username}
                </span>
              </h1>
            </div>
          </div>

          <div className="w-full">
            <div className="hidden md:block">
              <a
                className="block mt-2 mb-4 border border-gray-400 py-2 px-3 w-full font-semibold text-center align-middle leading-snug rounded bg-gray-100"
                href="https://github.com/settings/profile"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Edit Profile
              </a>
            </div>

            {bio && <p className="mb-2">{bio}</p>}

            {(company || location || url) && (
              <ul className="mb-4">
                {company && (
                  <li className="pt-1 pl-6 align-top">
                    <svg
                      className="inline-block mt-1 -ml-6 float-left text-center align-bottom"
                      fill="#6a737d"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z"
                      ></path>
                    </svg>

                    {company}
                  </li>
                )}

                {location && (
                  <li className="pt-1 pl-6 align-top">
                    <svg
                      className="inline-block mt-1 -ml-6 float-left text-center align-bottom"
                      fill="#6a737d"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      height="16"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                      ></path>
                    </svg>

                    <a
                      className="text-github-blue hover:underline focus:underline"
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        location,
                      )}`}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      {location}
                    </a>
                  </li>
                )}
                {url && (
                  <li className="pt-1 pl-6 align-top">
                    <svg
                      className="inline-block mt-1 -ml-6 float-left text-center align-bottom"
                      fill="#6a737d"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                      ></path>
                    </svg>

                    <a
                      className="text-github-blue hover:underline focus:underline"
                      href={url}
                      rel="nofollow noopener noreferrer"
                    >
                      {normalizedUrl}
                    </a>
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>

        <main className="md:w-2/3 lg:w-3/4 md:pl-2">
          <div className="w-full border-b border-gray-400">
            <nav className="flex">
              <NavLink
                exact
                className="md:mr-1 lg:mr-4 py-4 px-2 border-b-2 border-transparent hover:border-gray-400 focus:border-gray-400 text-center leading-snug transition-colors duration-200 ease-in"
                activeClassName="font-semibold border-orange-500 hover:border-orange-500 focus:border-orange-500 text-current"
                to={ROUTES.OVERVIEW}
              >
                Overview
              </NavLink>

              <NavLink
                exact
                className="md:mr-1 lg:mr-4 py-4 px-2 border-b-2 border-transparent hover:border-gray-400 focus:border-gray-400 text-center leading-snug transition-colors duration-200 ease-in"
                activeClassName="font-semibold border-orange-500 hover:border-orange-500 focus:border-orange-500 text-current"
                to={ROUTES.REPOSITORIES}
              >
                Repositories
                {repositoryCount > 0 && (
                  <>
                    {' '}
                    <span className="hidden lg:inline-block py-1 px-1 text-xs font-semibold leading-none bg-gray-200 rounded-full">
                      {repositoryCount}
                    </span>
                  </>
                )}
              </NavLink>
            </nav>
          </div>

          {children}
        </main>
      </div>

      <footer className="lg:flex lg:justify-between mt-8 px-8 lg:px-0 w-full text-center text-gray-600 opacity-25 hover:opacity-100 transition-opacity duration-200 ease-in">
        <ul className="flex lg:w-2/5 mb-2 lg:mb-0 justify-center lg:justify-between text-xs">
          <li className="mr-4 lg:mr-0">
            <a
              href="https://github.com/site/terms"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Terms
            </a>
          </li>
          <li className="mr-4 lg:mr-0">
            <a
              href="https://github.com/site/privacy"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Privacy
            </a>
          </li>
          <li className="mr-4 lg:mr-0">
            <a
              href="https://github.com/security"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Security
            </a>
          </li>
          <li className="mr-4 lg:mr-0">
            <a
              href="https://githubstatus.com/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Status
            </a>
          </li>
          <li>
            <a
              href="https://help.github.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Help
            </a>
          </li>
        </ul>

        <a
          className="hidden lg:block mx-6"
          href="https://github.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <span className="sr-only">GitHub Homepage</span>
          <svg
            className="inline-block fill-current align-text-bottom"
            aria-hidden="true"
            version="1.1"
            viewBox="0 0 16 16"
            width="24"
            height="24"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </a>

        <ul className="flex lg:w-2/5 mb-2 lg:mb-0 justify-center lg:justify-between text-xs">
          <li className="mr-4 lg:mr-0">
            <a
              href="https://github.com/contact"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Contact GitHub
            </a>
          </li>
          <li className="mr-4 lg:mr-0">
            <a
              href="https://github.com/pricing"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Pricing
            </a>
          </li>
          <li className="mr-4 lg:mr-0">
            <a
              href="https://developer.github.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              API
            </a>
          </li>
          <li className="mr-4 lg:mr-0">
            <a
              href="https://training.github.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Training
            </a>
          </li>
          <li className="mr-4 lg:mr-0">
            <a
              href="https://github.blog"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="https://github.com/about"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              About
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default PageLayout;
