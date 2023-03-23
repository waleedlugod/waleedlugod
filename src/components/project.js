import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function ProjectLink({ href, title, meta }) {
  return (
    <a className="group flex flex-wrap items-baseline space-x-2" href={href}>
      <h2
        className="link inline-block
                text-2xl font-thin after:top-[calc(50%-1px)]
                after:border-t-[0.03em] group-hover:after:scale-x-100 sm:text-5xl"
      >
        {title}
      </h2>
      <h3 className="mt-auto inline-block text-xs font-semibold sm:text-lg">{meta}</h3>
      <FontAwesomeIcon className="" icon={faArrowUpRightFromSquare} />
    </a>
  );
}
