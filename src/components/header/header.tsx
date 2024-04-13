import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href='/catalog'>
          Каталог
        </Link>
      </nav>
    </header>
  );
}