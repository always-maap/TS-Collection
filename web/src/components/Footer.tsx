import Link from 'next/link';
import { FC } from 'react';
import { COMMUNITIES, RESOURCES } from '../constants/link';
import { COPYRIGHT } from '../constants/text';
import { ExternalLink } from './ExternalLink';

const Footer: FC = () => {
  return (
    <div className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:grid lg:grid-cols-3 gap-8 lg:col-span-2">
            <div className="mt-12 lg:mt-0">
              <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                Resources
              </h4>
              <ul className="mt-4">
                {RESOURCES.map((resource) => (
                  <li className="mt-4" key={resource.name}>
                    <Link href={resource.link}>
                      <a className="text-base leading-6 text-gray-500 hover:text-gray-900">{resource.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 lg:mt-0">
              <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                Community
              </h4>
              <ul className="mt-4">
                {COMMUNITIES.map((community) => (
                  <li key={community.name} className="mt-4">
                    <ExternalLink
                      href={community.link}
                      className="text-base leading-6 text-gray-500 hover:text-gray-900"
                    >
                      <a className="text-base leading-6 text-gray-500 hover:text-gray-900">
                        {community.name}
                      </a>
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form action="mailto:mohammadali.ap.2000@gmail.com" method="POST" encType="multipart/form-data">
            <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
              Contact Me
            </h4>
            <div className="mt-8 lg:mt-0 flex flex-col gap-4">
              <p className="mt-4 text-gray-500 text-base leading-6">Any question or requests ?</p>
              <textarea
                placeholder="what is happening..."
                rows={3}
                name="content"
                className="w-full h-full appearance-none px-2 py-2 border border-gray-300 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
              />
              <button
                type="submit"
                className="inline items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-pink-500 hover:bg-pink-400 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
              >
                Send me
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 lg:flex lg:items-center lg:justify-between">
          <div className="mt-8 text-base leading-6 lg:mt-0 lg:order-1">
            <div className="text-gray-400 text-xs pt-1">{COPYRIGHT}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
