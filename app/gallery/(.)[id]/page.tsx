import React from "react";
import { photos } from "@/app/lib/photoLib";
import Image from "next/image";
async function page({ params }: { params: Promise<{ id: string }> }) {
  const photoid = (await params).id;
  const photoidtoInteger = Number(photoid);
  const currentPhoto = photos.filter((photo) => photo.id == photoidtoInteger);
  return (
    <div className="w-full bg-transparent mt-8 flex justify-center items-center">
      <div className="w-96 h-96">
        {currentPhoto.map((photo) => (
          <Image
            key={photo.id}
            className="w-full h-full object-cover"
            height={1000}
            width={1000}
            src={photo.url}
            alt={`${photo.id}`}
          />
        ))}
        {/* intercepting routing, 
        source 
        destination
        */}
      </div>
    </div>
  );
}

export default page;
