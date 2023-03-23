import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function ProjectLink({ href, title, meta }) {
  return (
    <a className="group flex flex-wrap" href={href}>
      <h2
        className="link mr-2 inline-block
                text-2xl font-thin after:top-[calc(50%-1px)]
                after:border-t-[0.03em] group-hover:after:scale-x-100 sm:text-5xl"
      >
        {title}
      </h2>
      <h3 className="mt-auto flex items-baseline text-xs font-semibold sm:text-lg">
        {meta}
        <FontAwesomeIcon
          className="ml-1 inline-block text-[0.625rem] sm:text-sm"
          icon={faArrowUpRightFromSquare}
        />
      </h3>
    </a>
  );
}
