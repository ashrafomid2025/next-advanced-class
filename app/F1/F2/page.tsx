import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-32 border-4 text-center">
        <h1>this is the folder 2</h1>
        <Link href="/F4">go to folder 4</Link>
      </div>
    </div>
  );
}

export default page;
