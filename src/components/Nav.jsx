"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Globe } from "@gravity-ui/icons";
import { usePathname } from "next/navigation";
const NavPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let path = usePathname();
  console.log(path);
  let li = (
    <>
      <li>
        <Link
          href="/"
          className={
            path === "/"
              ? "text-green-500 border-b-2 border-green-500 pb-1"
              : ""
          }
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/courses"
          className={
            path === "/courses"
              ? "text-green-500 border-b-2 border-green-500 pb-1"
              : ""
          }
        >
          Courses
        </Link>
      </li>
      <li>
        {" "}
        <Link
          href="/profile"
          className={
            path === "/profile"
              ? "text-green-500 border-b-2 border-green-500 pb-1"
              : ""
          }
        >
          My Profile
        </Link>
      </li>
    </>
  );
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg ">
      <header className="flex h-16 items-center justify-between px-6 container  mx-auto">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
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
          <div className="flex gap-2 items-center font-bold  text-yellow-500">
            <Globe width={20} height={20} />
            <h1 className="text-green-500">Skill</h1>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex font-semibold">
          {li}
        </ul>
        <div className="font-semibold">sing in</div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">{li}</ul>
        </div>
      )}
    </nav>
  );
};

export default NavPage;
