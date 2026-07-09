import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  PlusCircle,
  Flag,
  Building2,
} from "lucide-react";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
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
    <>
      {/* Mobile Overlay */}

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}

      <aside
        className={`

        fixed
        lg:sticky
        top-16
        lg:top-16
        left-0
        h-[calc(100vh-64px)]
        w-64
        bg-white
        shadow-xl
        border-r
        border-gray-200
        z-50
        overflow-y-auto

        transform
        transition-transform
        duration-300

        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }

        `}
      >

        <div className="p-6">

          <h2 className="uppercase tracking-widest text-xs text-gray-400 mb-6">

            Navigation

          </h2>

          <div className="space-y-2">

            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `

                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }

                  `
                  }
                >
                  <Icon size={20} />

                  <span className="font-medium">

                    {item.name}

                  </span>

                </NavLink>
              );
            })}

          </div>

        </div>

      </aside>
    </>
  );
};

export default Sidebar;