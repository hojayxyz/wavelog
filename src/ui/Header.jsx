import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="col-span-12 flex items-center justify-between border-b-2 border-gray-100 bg-blue-200 p-4">
      <Link to="/" className=" text-blue-500 hover:text-blue-600">
        Home
      </Link>
      <p>Hojay</p>
    </header>
  );
}

export default Header;
