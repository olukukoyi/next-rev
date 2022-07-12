import Link from "next/link";
import React from "react";

function Layout({ children }) {
  return (
    <div className="w-screen">
      <div className="w-full">
        <div className="flex items-center justify-between w-full px-20 p-6 mx-auto mb-10  shadow-lg ">
          <Link href="/">
            <div className="cursor-pointer">Home</div>
          </Link>
          <div className="flex space-x-4">
            <h1 className="cursor-pointer hover:opacity-60 transition ease-in-out ">
              Contact
            </h1>
            <h1 className="cursor-pointer hover:opacity-60 transition ease-in-out">
              About
            </h1>
            <h1 className="cursor-pointer hover:opacity-60 transition ease-in-out">
              Team/Users
            </h1>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Layout;
