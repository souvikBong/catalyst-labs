"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 shadow-md text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.jpg"
            alt="Catalyst Labs Logo"
            width={70}
            height={70}
            className="rounded-full md:w-20 md:h-20 w-14 h-14"
          />
          <h1 className="text-2xl md:text-3xl font-semibold tracking-wide font-[Bahnschrift]">
            Catalyst Labs
          </h1>
        </div>

        {/* Hamburger Icon (visible on mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
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

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-blue-700 md:bg-transparent md:flex md:space-x-8 text-lg font-medium transition-all duration-300`}
        >
          {["Home", "About", "Research", "Products", "Contacts"].map((item) => (
            <Link
              key={item}
              href={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="block px-6 py-3 md:px-0 md:py-0 hover:text-gray-200 text-center md:text-left"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
