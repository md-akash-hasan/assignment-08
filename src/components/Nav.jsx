"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Globe } from "@gravity-ui/icons";
import { usePathname, useRouter } from "next/navigation";
import { authClient, signOut, useSession } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { div } from "framer-motion/client";

const NavPage = () => {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();

  let { data, isPending } = useSession();

  let userData = data?.user;
  console.log(userData);

  // Reusable Link Style with Hover Animation
  const navLinkClass = (href) => {
    const isActive = path === href;
    return `relative py-1 transition-all duration-300 ease-in-out
      ${isActive ? "text-green-600" : "text-default-600 hover:text-green-500"}
      after:content-[''] after:absolute after:left-0 after:bottom-0 
      after:h-[2px] after:bg-green-500 after:transition-all after:duration-300
      ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`;
  };

  const li = (
    <>
      <li>
        <Link href="/" className={navLinkClass("/")}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/courses" className={navLinkClass("/courses")}>
          Courses
        </Link>
      </li>
      <li>
        <Link href="/profile" className={navLinkClass("/profile")}>
          My Profile
        </Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6 container mx-auto">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-default-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Logo Section */}
          <Link
            href="/"
            className="flex gap-2 items-center font-bold hover:opacity-80 transition-opacity"
          >
            <Globe className="text-yellow-500" width={24} height={24} />
            <h1 className="text-xl text-green-600 tracking-tight">Skill</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex font-semibold">
          {li}
        </ul>

        {/* Right Section */}
        <div className="">
          {userData ? (
            <div className="flex gap-4">
              <Avatar>
                <Avatar.Image
                  alt={userData?.name}
                  className="line-clamp-1"
                  src={userData?.image}
                />
                <Avatar.Fallback>{userData?.name}</Avatar.Fallback>
              </Avatar>
              <Button onClick={() => signOut()} variant="danger">
                Log Out
              </Button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Button variant="primary">
                <Link href="/pass/singin">Login </Link>
              </Button>
              <Button variant="primary">
                <Link href="/pass/singup">Register </Link>
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden border-t border-separator
          ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col gap-4 p-6 font-semibold bg-background">
          {li}
        </ul>
      </div>
    </nav>
  );
};

export default NavPage;
