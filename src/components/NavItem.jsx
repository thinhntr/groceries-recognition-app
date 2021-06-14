import { Link } from "react-router-dom";

export default function NavItem({ to, text, svg, isActive }) {
  return (
    <li className="w-full">
      <Link
        to={to}
        className={`flex justify-center sm:justify-start items-center h-20 text-gray-50 filter grayscale opacity-100 hover:filter hover:grayscale-0 hover:opacity-100 ${
          isActive ? "filter-none" : ""
        }`}
      >
        {svg}
        <span className="hidden ml-4 sm:group-hover:inline">{text}</span>
      </Link>
    </li>
  );
}
