"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Research", href: "/research" },
  { name: "Team", href: "/team" },
  { name: "Publications", href: "/publications" },
  { name: "Community Testing", href: "/community-testing" },
  { name: "Support Us", href: "/donate" },
];

interface HeaderProps {
  darkMode?: boolean;
}

export default function Header({ darkMode = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const textColor = darkMode ? "text-white" : "text-gray-900";
  const bgColor = darkMode ? "bg-gray-900" : "bg-white";
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-none">
          <Link href="/">
            <Image className="h-12 w-auto" src={logo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${textColor}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div
          className={`hidden lg:flex lg:flex-auto lg:justify-center lg:mx-8 ${textColor}`}
        >
          <div className="flex lg:gap-x-6 xl:gap-x-8 max-w-2xl">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 text-center px-3 py-2 whitespace-nowrap`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-none lg:justify-end">
          <Link
            href="/contact"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Contact Us
          </Link>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${bgColor}`}
        >
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <Image className="h-12 w-auto" src={logo} alt="" />
            </Link>
            <button
              type="button"
              className={`-m-2.5 rounded-md p-2.5 ${textColor}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      textColor
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
