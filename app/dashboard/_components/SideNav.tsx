"use client";

import { FileClock, Home, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNav = () => {
  // NavLinks
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    // {
    //   name: "Billing",
    //   icon: WalletCards,
    //   path: "/dashboard/billing",
    // },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();

  // useEffect(() => {
  //   console.log("path:", path);
  // }, [path]);

  return (
    <div className="h-screen p-5 shadow-sm border">
      <div className="flex justify-center gap-1 cursor-pointer">
        <Image src={"/logo.png"} width={30} height={30} alt="logo-pic" />
        <span className="text-2xl font-semibold">GenTextAI</span>
      </div>

      {/* divider  */}
      <hr className="mt-5 border" />

      <div className="mt-8">
        {MenuList.map((menu, idx) => (
          <div
            className={`mb-2 p-3 flex items-center gap-2 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${
              path == menu.path && "bg-primary text-white"
            }`}
            key={idx}
          >
            <menu.icon />
            <Link href={menu.path}>
              <h2>{menu.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
