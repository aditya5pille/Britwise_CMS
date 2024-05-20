"use client"
import React, { useState } from "react";
import Image from "next/image";
import {MdOutlineDashboardCustomize,MdNotificationsActive,} from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { data: session } = useSession();
  const { setTheme } = useTheme()


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProfileClick = () => {
    // Handle profile click action
  };

  const handleSettingsClick = () => {
    // Handle settings click action
  };

  return (
    <>

    {/* <div className='pl-2 pt-2 mb-10 w-full block sm:hidden'>
        <Image src="/cropped-New-logo-File.png" alt="My Image" width={200} height={500} />
      </div> */}

    <div className="hidden sm:block">
      <div className="flex items-center justify-between  p-4 shadow-md shadow-slate-200">
        <div className="font-serif font-bold">
          Great Day {session?.user?.name} !
        </div >
        <div className="flex items-center justify-between">
        <div className="flex items-center  space-x-4">
          <span>
          <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className='dark:text-black'>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
          </span>
          <MdOutlineDashboardCustomize size={29} />
          <MdNotificationsActive size={29} />
        </div>
        <div className="relative ml-8">
          <Avatar onClick={toggleDropdown}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{session?.user?.name}</AvatarFallback>
          </Avatar>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={handleProfileClick}
              >
                Profile
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={handleSettingsClick}
              >
                Settings
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </div>
          )}
        </div>
        </div>
      </div>
    </div>

    </>
  );
}
