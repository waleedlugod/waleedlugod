import Link from "next/link";

export default function About() {
  return (
    <main>
      <Link href="/">Home</Link>
      <h1>About</h1>
      <div className="line"></div>
      <p>stuff stuff and other stuff</p>
    </main>
  );
}
