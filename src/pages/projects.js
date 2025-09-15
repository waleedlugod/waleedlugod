import Head from "next/head";
import Article from "waleedLugod/components/article";
import ProjectLink from "waleedLugod/components/projectLink";
import data from "../assets/data.json";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Waleed Lugod | Projects</title>
      </Head>
      <Article title="Projects">
        <ul className="space-y-5">
          {data.map((project) => (
            <ProjectLink
              href={project.link}
              title={project.title}
              meta={project.meta}
            />
          ))}
        </ul>
      </Article>
    </>
  );
}
