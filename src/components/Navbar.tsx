import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-evenly">
      <Link href="/">Home</Link>
      <Link href="/enter">Enter</Link>
    </div>
  );
};

export default Navbar;
