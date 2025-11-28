import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-32 border-2 border-double text-center">
        <h1>this is the folder 2 (intercepted)</h1>
        <Link href="/F1/F2">Go to folder 2</Link>
      </div>
    </div>
  );
}

export default page;
