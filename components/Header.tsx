import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
         Logo
        </Link>
        <nav className="space-x-4">
          <Link href="/">
            Home
          </Link>
          <Link href="/plans">
            Planos
          </Link>
          <Link href="/services">
            Serviços
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
