import Head from "next/head";
import Article from "waleedLugod/components/article";
import ProjectLink from "waleedLugod/components/projectLink";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Waleed Lugod | Projects</title>
      </Head>
      <Article title="Projects">
        <ul className="space-y-5">
          <ProjectLink
            href="https://bluelingo.theguidon.com/"
            title="BLUE LINGO: The Campus Crossword"
            meta="The GUIDON | 2025"
          />
          <ProjectLink
            href="https://theguidon.com/uaap-86-second-semester-primer/"
            title="UAAP Season 86 Second Semester Primer"
            meta="The GUIDON | 2024"
          />
          <ProjectLink
            href="https://theguidon.com/uaap-86-primer-volume-1/"
            title="UAAP Season 86 First Semester Primer"
            meta="The GUIDON | 2023"
          />
          <ProjectLink
            href="https://interactive.theguidon.com/2023/08/one-big-adventure/"
            title="One Big Adventure"
            meta="The GUIDON | 2023"
          />
          <ProjectLink
            href="https://join.theguidon.com/"
            title="The GUIDON Join Portal"
            meta="The GUIDON | 2023"
          />
          <ProjectLink
            href="https://interactive.theguidon.com/2023/05/year-end-gallery"
            title="Year-End Gallery"
            meta="The GUIDON | 2023"
          />
          <ProjectLink
            href="https://co-mission.vercel.app/"
            title="CoMission"
            meta="Blue Hacks | 2023"
          />
          <ProjectLink
            href="https://size-accurate-solar-system.vercel.app/"
            title="Solar System"
            meta="Personal | 2023"
          />
          <ProjectLink
            href="https://interactive.theguidon.com/2023/02/from-the-hill-to-edsa"
            title="From the Hill to EDSA"
            meta="The GUIDON | 2023"
          />
        </ul>
      </Article>
    </>
  );
}
