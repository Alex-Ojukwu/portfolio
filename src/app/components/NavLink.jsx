import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 px-4 text-slate-600 font-medium rounded-lg text-sm hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200"
    >
      {title}
    </Link>
  );
};

export default NavLink;
