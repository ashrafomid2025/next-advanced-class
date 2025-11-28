import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-32 border text-center">
        <h1>this is the folder 1</h1>
        <Link href="/F1/F2">Go to folder 2</Link>
        <Link href="/F3">Go to folder 3</Link>
      </div>
    </div>
  );
}

export default page;
