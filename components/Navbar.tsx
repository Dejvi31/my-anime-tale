"use client";

import Link from "next/link";
import { useState } from "react";
import { UserButton, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled", isOpen);  // Debugging
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Brand Name */}
        <Link href="/" className="text-2xl font-bold">
          MyAnimeTale
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:bg-blue-700 px-4 py-2 rounded-lg transition">
            Home
          </Link>
          <Link href="/subscriptions" className="hover:bg-blue-700 px-4 py-2 rounded-lg transition">
            Subscriptions
          </Link>

          <SignedOut>
            <SignUpButton mode="modal">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                Sign Up
              </button>
            </SignUpButton>
            <SignInButton mode="modal">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* Mobile Menu (Dropdown) */}
       
{isOpen && (
  <div className="absolute top-16 right-0 bg-gradient-to-r from-purple-800 to-indigo-800 w-2/3 p-6 rounded-lg shadow-xl flex flex-col items-center space-y-6 md:hidden z-50">
    {/* Centered Profile Picture */}
    <SignedIn>
      <div className="flex justify-center w-full mb-4">
        <UserButton />
      </div>
    </SignedIn>

    <Link href="/" className="hover:bg-purple-700 px-6 py-3 rounded-lg transition duration-300 w-full text-center text-lg font-semibold">
      Home
    </Link>
    <Link href="/subscriptions" className="hover:bg-purple-700 px-6 py-3 rounded-lg transition duration-300 w-full text-center text-lg font-semibold">
      Subscriptions
    </Link>

    <div className="w-full flex justify-center space-x-4">
      <SignedOut>
        <SignUpButton mode="modal">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-300 w-full md:w-auto text-lg font-semibold">
            Sign Up
          </button>
        </SignUpButton>
        <SignInButton mode="modal">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-300 w-full md:w-auto text-lg font-semibold">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
    </div>
  </div>
)}

      
      </div>
    </nav>
  );
};

export default Navbar;
