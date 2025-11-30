import React from "react";
import wondersImages, { WonderImage } from "../lib/photoLib";
import Image from "next/image";
import Link from "next/link";
function page() {
  return (
    <div className="w-full mt-8 gap-4 grid grid-cols-1 md:grid-cols-4">
      {wondersImages.map((photo) => (
        <div key={photo.id}>
          <Link href={`gallery/${photo.id}`}>
            <Image
              className="h-52"
              src={photo.src}
              height={800}
              width={800}
              alt={`${photo.id}`}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default page;
