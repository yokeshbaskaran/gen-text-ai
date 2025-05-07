"use client";

import { Button } from "@/components/ui/button";
import Header from "./dashboard/_components/Header";
import SideNav from "./dashboard/_components/SideNav";
import { MoveUpRight } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const { user } = useUser();
  return (
    <>
      <section>
        <div className="md:w-64 hidden md:block fixed h-full">
          <SideNav />
        </div>

        {/* Main content */}
        <div className="md:ml-64">
          <Header />
          <div className="my-40 flex justify-center items-center">
            {user ? (
              <Link href="/dashboard">
                <Button className="cursor-pointer">
                  Go to DashBoard <MoveUpRight />
                </Button>
              </Link>
            ) : (
              <Link href="/sign-in">
                <h2 className="px-4 py-2 bg-gray-500 rounded-full text-lg text-white cursor-pointer">
                  Login to View the DashBoard page
                </h2>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
