import Link from "next/link"

export default function Header() {
  return (
    <div>
      <nav
        class="navbar bg-dark border-bottom border-bottom-dark"
        data-bs-theme="dark"
      >
        <div class="container">
        <Link href="/" class="navbar-brand">My Recipe book</Link>


      </div>
      </nav>
    </div>
  );
}
