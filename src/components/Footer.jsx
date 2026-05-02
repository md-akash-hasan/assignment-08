"use client";

import Link from "next/link";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-background pt-10 pb-6 px-6 border-t border-divider">
      <div className="container px-2 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold">Contact Info</h3>
            <p className="text-default-500 text-sm">
              Level-4, 34, Awal Centre, Banani, Dhaka <br />
              Email: mdfaruk102210@gmail.com <br />
              Phone: +880 1742212690
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold">Social Links</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/mdakahhasanpartho"
                className="flex gap-2 items-center text-default-500 hover:text-blue-600 transition-colors duration-300"
              >
                <FaFacebookF />
                <span className="text-sm">Facebook</span>
              </Link>
              <Link
                href="#"
                className="flex gap-2 items-center text-default-500 hover:text-sky-400 transition-colors duration-300"
              >
                <BsTwitter />
                <span className="text-sm">Twitter</span>
              </Link>
              <Link
                href="https://www.linkedin.com/feed/"
                className="flex gap-2 items-center text-default-500 hover:text-blue-700 transition-colors duration-300"
              >
                <FaLinkedinIn />
                <span className="text-sm">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="text-default-500 text-sm">
              We use HeroUI and modern web technology to ensure the best user
              experience.
            </p>
          </div>
        </div>

        <hr className="border-divider mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-small text-default-400">
            © {new Date().getFullYear()} Your Skill. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-default-500 hover:text-foreground transition-all duration-200 underline-offset-4 hover:underline"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="text-sm text-default-500 hover:text-foreground transition-all duration-200 underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
