import Seo from 'components/Seo';
import { REPO_URL } from 'constants/link';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import CheckIcon from '../components/CheckIcon';
import { FEATURES, KEY_FEATURES } from '../constants/text';

const Home: FC = () => {
  return (
    <>
      <Seo
        title="Performant Algorithms and Data-Structures"
        description="An Efficient, Zero Dependency, and Tested library for Algorithms and Data Structures."
      />
      <div className="bg-gray-50 h-full min-h-full">
        <div className="relative bg-white overflow-hidden">
          <div className="hidden lg:block lg:absolute lg:inset-0">
            <svg
              className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
              width="640"
              height="784"
              fill="none"
              viewBox="0 0 640 784"
            >
              <defs>
                <pattern
                  id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
                  x="118"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
            </svg>
          </div>

          <div className="py-24 mx-auto container px-4 sm:mt-12 relative">
            <div className="hidden lg:block absolute lg:w-3/5 right-0 lg:translate-x-1/3 lg:-translate-y-16 md:w-1/2 sm:w-2/3 top-0 transform">
              <Image src="/svg/white_flower.svg" width={1042} height={990} priority={true} />
            </div>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-6 ">
                <div className="text-center lg:text-left md:max-w-2xl md:mx-auto ">
                  <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                    Performant Algorithms
                    <br className="hidden md:inline xl:hidden" />{' '}
                    <span>and Data-Structures for the Web & Nodejs</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    TS-Collection is an Efficient, Zero Dependency, and Tested library written in TypeScript
                    with ESM, CJS and UMD ready bundle.
                  </p>

                  <div className="mt-5  mx-auto sm:flex sm:justify-center lg:justify-start lg:mx-0 md:mt-8">
                    <div className="rounded-md shadow">
                      <Link href="/docs/overview">
                        <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-pink-500 hover:bg-pink-400 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                          Get Started
                        </a>
                      </Link>
                    </div>
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                      <a
                        href={REPO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-pink-600 bg-white hover:text-pink-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-lg border-t border-gray-100 bg-gray-50 ">
          <div className="py-24  ">
            <div className="mx-auto container">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                {KEY_FEATURES.map((key_feature) => (
                  <div className="mt-10 lg:mt-0">
                    <div key={key_feature.title}>
                      <h3 className="text-xl leading-6 xl:text-2xl font-bold text-gray-900">
                        {key_feature.title}
                      </h3>
                      <p className="mt-2  lg:mt-4 text-base xl:text-lg lg:leading-normal leading-6 text-gray-600">
                        {key_feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 relative py-24 border-t border-gray-200 ">
          <div className="px-4 sm:px-6 lg:px-8  mx-auto container max-w-3xl sm:text-center">
            <h3 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 lg:leading-none mt-2">
              Better Algorithm. Faster Applications.
            </h3>
            <p className="my-4 text-xl leading-7  text-gray-600">
              TS-Collection comes with battle-tested solutions for different type of algorithmic problems. Use
              included Data-Structure to achieve faster and reliable application.
            </p>
          </div>
          <div style={{ height: 224 }} />
        </div>

        <section className="bg-gray-900 body-font">
          <div className="container max-w-7xl px-4  mx-auto -mt-72 relative">
            <iframe
              src=""
              style={{
                width: '100%',
                height: '600px',
                border: '0',
                borderRadius: 8,
                overflow: 'hidden',
                position: 'static',
                zIndex: 0,
              }}
              className="shadow-2xl"
              title="dazzling-swanson-wne32"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            />
          </div>
          <div className="py-24 px-4 sm:px-6 lg:px-8  mx-auto container">
            <div className=" sm:text-center pb-16">
              <h3 className="text-3xl mx-auto leading-tight font-extrabold tracking-tight text-white sm:text-4xl  lg:leading-none mt-2">
                Battery-pack Included.
              </h3>
              <p className="mt-4 text-xl max-w-3xl mx-auto leading-7 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur deleniti
                ducimus earum hic, illum magnam quisquam rem sunt veniam!
              </p>
            </div>
            <div>
              <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 text-white max-w-screen-lg mx-auto text-lg">
                {FEATURES.map((feature) => (
                  <a key={feature} className="mb-2">
                    <span className="bg-blue-100 text-blue-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <CheckIcon />
                    </span>
                    {feature}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Ready to dive in?
            </h2>
            <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
              <div className="inline-flex rounded-md shadow">
                <Link href="/docs/overview">
                  <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-pink-500 hover:bg-pink-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                    Get Started
                  </a>
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a
                  href={REPO_URL}
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-pink-600 bg-white hover:text-pink-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
