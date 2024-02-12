import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2/page">
          Go to Week 2 Page
        </Link>
      </p>
      <p>
        <Link href="/week-3/page">
          Go to Week 3 Page
        </Link>
      </p>
      <p>
        <Link href="/week-4/page">
          Go to Week 4 Page
        </Link>
      </p>
      <p>
        <Link href="/week-5/page">
          Go to Week 5 Page
        </Link> 
      </p>
      <p>
        <Link href="/week-6/page">
          Go to Week 6 Page
        </Link> 
      </p>
      
    </main>
  );
};

