import Head from "next/head";
import Article from "waleedLugod/components/article";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Waleed Lugod | Projects</title>
      </Head>
      <Article title="Projects">
        <ul>
          <li>
            <a
              className="group"
              href="https://interactive.theguidon.com/2023/02/from-the-hill-to-edsa"
            >
              <h2
                className="relative inline-block text-5xl font-thin after:absolute after:top-[calc(50%-1px)] after:left-0
              after:w-full after:scale-x-0 after:border-t-[0.03em] after:border-solid after:border-black after:transition-transform
              after:duration-200 after:ease-out after:content-[''] group-hover:after:scale-x-100"
              >
                From the Hill to EDSA
              </h2>
              <h3
                className="ml-4 inline-block text-xl font-semibold
              before:mb-1 before:block before:h-4 before:w-4 before:content-[url('/images/external-link.svg')]"
              >
                The GUIDON | 2023
              </h3>
            </a>
          </li>
        </ul>
      </Article>
    </>
  );
}
