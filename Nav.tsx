import Link from "next/link";

export function Nav() {
  return (
    <header className="nav-wrap">
      <nav className="nav shell" aria-label="Primary navigation">
        <Link href="/" className="brand">YOUR NAME<span>.</span></Link>
        <div className="nav-links">
          <Link href="/#projects">Projects</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#about">About</Link>
          <a href="mailto:you@example.com">Contact</a>
        </div>
      </nav>
    </header>
  );
}
