import Link from "next/link";
import Screen from "waleedLugod/components/screen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Article({ title, children }) {
  return (
    <>
      <Link className="absolute top-4 left-4 sm:top-8 sm:left-8 sm:text-2xl" href="/">
        <FontAwesomeIcon icon={faHouse} />
      </Link>
      <article className="w-full p-10 sm:p-20">
        <h1 className="text-5xl font-bold after:mt-4 after:mb-6 after:block after:h-[2px] after:w-full after:bg-black after:content-[''] sm:text-8xl sm:after:mt-8 sm:after:mb-12">
          {title}
        </h1>
        {children}
      </article>
      <Screen title={title} />
    </>
  );
}
