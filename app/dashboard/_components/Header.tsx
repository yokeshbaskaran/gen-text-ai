"use client";

import { useUser } from "@clerk/nextjs";
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Header = () => {
  const { user } = useUser();
  // console.log("user", user);

  return (
    <div className="p-5 flex justify-between items-center shadow-sm border-b-2">
      <div className="max-w-lg p-2 flex gap-2 items-center border rounded-md">
        <Search />
        <input className="outline-none" type="text" placeholder="Search..." />
      </div>

      <div>
        {user ? (
          <Link href="/dashboard/settings">
            <Avatar>
              <AvatarImage src={user?.imageUrl} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        ) : (
          <Link href="/sign-in">
            <h2 className="px-4 py-2 bg-primary rounded-full text-sm text-white">
              Login/Signup
            </h2>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
