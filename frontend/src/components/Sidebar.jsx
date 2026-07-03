import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  PlusCircle,
  Flag,
  Building2,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Create Feature",
      path: "/create-feature",
      icon: PlusCircle,
    },
    {
      name: "Feature Flags",
      path: "/feature-flags",
      icon: Flag,
    },
    {
      name: "Organizations",
      path: "/organizations",
      icon: Building2,
    },
  ];

  return (
    <div className="w-64 bg-white rounded-2xl shadow-lg border border-gray-200 p-5">

      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
        Navigation
      </h2>

      <div className="space-y-2">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300

                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`
              }
            >
              <Icon
                size={20}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <span className="font-medium">{item.name}</span>
            </NavLink>
          );
        })}

      </div>
    </div>
  );
};

export default Sidebar;