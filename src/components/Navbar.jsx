import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow">
      <h1 className="text-xl font-bold">MyApp</h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/items">Items</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
