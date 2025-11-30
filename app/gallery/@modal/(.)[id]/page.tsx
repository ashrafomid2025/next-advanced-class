import Modal from "@/app/Components/Modal";
import WonderImages from "@/app/lib/photoLib";
import { WonderImage } from "@/app/lib/photoLib";
import Image from "next/image";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage = WonderImages.find((p) => p.id === id)!;

  return (
    <Modal>
      <Image
        alt={photo.name}
        width={1000}
        height={1000}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />
      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}
