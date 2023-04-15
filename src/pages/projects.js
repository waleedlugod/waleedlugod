import Head from "next/head";
import Article from "waleedLugod/components/article";
import ProjectLink from "waleedLugod/components/project";

export default function Projects() {
    return (
        <>
            <Head>
                <title>Waleed Lugod | Projects</title>
            </Head>
            <Article title="Projects">
                <ul className="space-y-5">
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
