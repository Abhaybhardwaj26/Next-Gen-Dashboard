"use client";

import {
  Home,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    {
      name: "Home",
      icon: <Home size={18} />,
      active: true,
    },
    {
      name: "Courses",
      icon: <BookOpen size={18} />,
      active: false,
    },
    {
      name: "Analytics",
      icon: <BarChart3 size={18} />,
      active: false,
    },
    {
      name: "Settings",
      icon: <Settings size={18} />,
      active: false,
    },
  ];

  return (
    <aside className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
      <h2 className="text-2xl font-bold mb-6">
        Dashboard
      </h2>

      <nav>
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                item.active
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "hover:bg-zinc-800 hover:text-green-400"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}