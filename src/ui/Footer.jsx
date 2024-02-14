import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-500 col-span-12 p-5 flex justify-between items-center">
      <p className="space-x-2">
        <span>Wavelog</span>
        <span>2024</span>
      </p>
      <Link to="/feed">Open Feed</Link>{" "}
    </div>
  );
}

export default Footer;
