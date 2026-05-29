import Link from "next/link";
import Image from "next/image";
import { LogoFacebook, LogoLinkedin, LogoTelegram } from "@gravity-ui/icons";

import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-700">
      <div className="container mx-auto px-6 py-14">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 ">
          {/* Logo & Description */}
          <div className="space-y-6 col-span-2 md:col-span-3 lg:col-span-2 ">
            <Link href="/" className="inline-block">
              <Image
                src={Logo}
                alt="Programming Hero"
                width={180}
                height={60}
                className="object-contain"
              />
            </Link>

            <p className="max-w-xs text-sm leading-7 text-gray-500">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-4">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 hover:bg-violet-600 transition"
              >
                <LogoFacebook className="w-5 h-5 text-white" />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600 hover:bg-violet-700 transition"
              >
                <LogoTelegram className="w-5 h-5 text-white" />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 hover:bg-violet-600 transition"
              >
                <LogoLinkedin className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Product */} 
          <div className=" col-span-2 md:col-span-1">
            <h3 className="mb-5 text-sm font-semibold text-violet-500">
              Product
            </h3>

            <ul className="space-y-2  text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Job discovery
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Worker AI
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Companies
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Salary data
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigations */}
          <div className="space-y-6 col-span-2 md:col-span-1">
            <h3 className="mb-5 text-sm font-semibold text-violet-500">
              Navigations
            </h3>

            <ul className="space-y-2  text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Help center
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Career library
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6 col-span-2 md:col-span-1">
            <h3 className="mb-5 text-sm font-semibold text-violet-500">
              Resources
            </h3>

            <ul className="space-y-2  text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Brand Guideline
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-14 flex gap-4 border-t border-zinc-800 py-6 items-center justify-between px-2 text-xs ">
        <p className="text-gray-500">&copy;Copyright 2024 — HireLoop</p>

        <div className="flex items-center gap-2 text-gray-500">
          <Link href="#" className="hover:text-white transition">
            Terms & Policy
          </Link>

          <Link href="#" className="hover:text-white transition">
            Privacy Guideline
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
