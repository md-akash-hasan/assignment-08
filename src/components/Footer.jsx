"use client";

import Link from "next/link";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-background pt-10 pb-6 px-6">
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
                isExternal
                href="https://www.facebook.com/mdakahhasanpartho"
                color="foreground"
                className="flex gap-1 items-center"
              >
                <FaFacebookF />
                Facebook
              </Link>
              <Link
                isExternal
                href="#"
                color="foreground"
                className="flex gap-1 items-center"
              >
                <BsTwitter />
                Twitter
              </Link>
              <Link
                isExternal
                href="https://www.linkedin.com/feed/"
                color="foreground"
                className="flex gap-1 items-center"
              >
                <FaLinkedinIn />
                LinkedIn
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

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-small text-default-400">
            © {new Date().getFullYear()} Your Skill. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="#" size="sm" color="foreground">
              Terms & Conditions
            </Link>
            <Link href="#" size="sm" color="foreground">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
