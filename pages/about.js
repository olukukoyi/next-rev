import React from "react";
import Link from "next/link";

const about = () => {
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="flex flex-col ">
        <div> This is the about page</div>
        <div>
          <Link href="/">
            <button className="border px-4 py-1 border-black rounded-full mt-4 hover:bg-black hover:text-white transition ease-in-out ">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default about;
