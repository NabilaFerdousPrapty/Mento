"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const Header = () => {
  const { user } = useUser();

  return (
    <header className="bg-gradient-to-r from-gray-200 to-gray-50 text-gray-950 py-1 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-white">
        {/* Left Section - Logo or title */}
        <div className="text-xl font-semibold sm:text-2xl">
          <Image
            src="https://i.ibb.co.com/M7wPSwJ/mento.png"
            alt="Mento"
            width={80}
            height={20}
          />
        </div>

        {/* Right Section - User Auth */}
        <div className="flex items-center space-x-4">
          {/* Greeting for signed-in users */}
          {user && (
            <h1 className="hidden text-gray-950 sm:block text-lg font-medium">
              Welcome, {user?.firstName}!
            </h1>
          )}

          {/* Sign-In Button (visible when signed out) */}
          <SignedOut>
            <div className="bg-blue-500 text-white px-4 py-2 rounded-full transition duration-300">
              <SignInButton>Sign In</SignInButton>
            </div>
          </SignedOut>

          {/* User Button (visible when signed in) */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonImage: "rounded-full border-2 border-white",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
