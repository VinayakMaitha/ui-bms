import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">Admin Dashboard</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link href="/route">Routes</Link>
        </li>
        <li>
          <Link href="/schedule">Schedules</Link>
        </li>
        <li>
          <Link href="/bus">Buses</Link>
        </li>
        <li>
          <Link href="/crew">Crew</Link>
        </li>
      </ul>
    </nav>
  );
}
