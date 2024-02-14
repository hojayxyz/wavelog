import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-200 p-4 col-span-12 flex items-center border-b-2 border-gray-100 justify-between">
      <Link to="/">Home</Link>
      <p>Hojay</p>
    </header>
  );
}

export default Header;
