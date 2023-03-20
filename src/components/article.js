import Link from "next/link";
import Screen from "waleedLugod/components/screen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Article({ title, children }) {
  return (
    <>
      <Link className="absolute top-12 left-12 text-3xl" href="/">
        <FontAwesomeIcon icon={faHouse} />
      </Link>
      <article className="p-32">
        <h1 className="text-9xl font-bold after:mt-8 after:mb-12 after:block after:h-[2px] after:w-full after:bg-black after:content-['']">
          {title}
        </h1>
        {children}
      </article>
      <Screen title={title} />
    </>
  );
}
