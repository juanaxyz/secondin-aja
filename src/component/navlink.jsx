import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const activeStyle = "text-blue-500"; // Gaya untuk link aktif
  const defaultStyle = "hover:text-gray-500 transition duration-200";

  const links = [
    { name: "Men", url: "/Men" },
    { name: "Women", url: "/Women" },
    { name: "Trend", url: "/Trend" },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center  md:space-x-6">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.url}
          className={({ isActive }) =>
            `${isActive ? activeStyle : defaultStyle} my-2 z-10`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
