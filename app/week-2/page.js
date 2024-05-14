import Link from "next/link";
import StudentInfo from "./student-info";


export default function Page2() {
    return (
        <main>
            <h1>Shopping List</h1>
            <StudentInfo />
            <Link href="/">Back to Home</Link>
        </main>
    )
}