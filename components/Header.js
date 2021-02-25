import Link from 'next/link';

const Header = () => (
  <nav id="main-nav">
    <Link href="/">
      <a>
        <h1><span className="text-primary">MY</span>LOGO</h1>
      </a>
    </Link>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a className="current">Blog</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;
