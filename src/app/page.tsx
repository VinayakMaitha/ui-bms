import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>CRUD Dashboard</h1>
      <ul>
        <li><Link href="/route">Manage Routes</Link></li>
        {/* <li><Link href="/bus">Manage Buses</Link></li>
        <li><Link href="/crew">Manage Crew</Link></li> */}
      </ul>
    </div>
  );
}
