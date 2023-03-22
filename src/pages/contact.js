import Head from "next/head";
import Article from "waleedLugod/components/article";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Waleed Lugod | Contact</title>
      </Head>
      <Article title="Contact">
        <main className="space-y-3 text-base sm:text-lg">
          <section className="flex items-center font-extralight">
            <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
            <a className="link" href="mailto:lugodwaleed@gmail.com">
              lugodwaleed@gmail.com
            </a>
          </section>
          <section className="flex flex-wrap items-center font-extralight">
            <FontAwesomeIcon className="mr-2" icon={faMagnifyingGlass} />
            <a className="link" href="https://github.com/waleedlugod">
              github
            </a>
            &nbsp;/&nbsp;
            <a className="link" href="https://www.linkedin.com/in/waleedlugod/">
              linkedin
            </a>
            &nbsp;/&nbsp;
            <a className="link" href="https://twitter.com/waleedlugod">
              twitter
            </a>
            &nbsp;/&nbsp;
            <a className="link" href="https://www.facebook.com/wwwlugod">
              facebook
            </a>
            &nbsp;/&nbsp;
            <a className="link" href="https://www.instagram.com/waleed.lugod/">
              instagram
            </a>
          </section>
        </main>
      </Article>
    </>
  );
}
