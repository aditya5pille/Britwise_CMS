"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineDashboard } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";
import { BiSelectMultiple } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { GoRocket } from "react-icons/go";
import { HiMenu } from "react-icons/hi";
import { MdOutlineDashboardCustomize, MdNotificationsActive } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { signOut } from 'next-auth/react';
import { useSession } from "next-auth/react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// Define UI data as an array of objects
const uiData = [
  {
    icon: <AiOutlineDashboard size={20} />,
    label: "Dashboard",
    href: "/admin/dashboard"
  },
  {
    icon: <MdContactMail size={20} />,
    label: "Contacts",
    href: "/contacts"
  },
  {
    icon: <BiSelectMultiple size={20} />,
    label: "Leads",
    href: "/admin/lead"
  },
  {
    icon: <SlCalender size={20} />,
    label: "Calendar",
    href: "/calendar"
  },
  {
    icon: <GoRocket size={20} />,
    label: "Deals",
    href: "/deals"
  }
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar open/close
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown
  const { data: session } = useSession();
  const { setTheme } = useTheme();

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar state
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown state
  };

  const handleProfileClick = () => {
    // Handle profile click
  };

  const handleSettingsClick = () => {
    // Handle settings click
  };

  return (
    <>
      <div className={`block lg:hidden p-10`}>
        <Image src="/cropped-New-logo-File.png" alt="My Image" width={200} height={500} />
      </div>
      <div className="h-full shadow-md shadow-slate-200">
        <div className='flex justify-between items-center p-4 sm:p-2'>
          <div className={`hidden lg:block mb-10`}>
            <Image src="/cropped-New-logo-File.png" alt="My Image" width={200} height={500} />
          </div>
          <span className='flex sm:hidden'>
            <button onClick={toggleSidebar}>
              <HiMenu size={24} />
            </button>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
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
          </span>
        </div>
        <ul className={`font-serif ${isOpen ? 'block' : 'hidden'} sm:block`}>
          {uiData.map((item, index) => (
            <li key={index} className="mb-6">
              <Link href={item.href}>
                <span className='flex pl-6 space-x-2 items-center'>
                  {item.icon}
                  <div>{item.label}</div>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
