import Link from "next/link";


export default function Home() {
  return (
    <main>
      <div>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
      </div>
      <div>
        <Link href="/week-2/page.js">Week 2</Link>
      </div>
      <div>
        <Link href="/week-3/page.js">Week 3</Link>
      </div>
    </main>
  );
}
