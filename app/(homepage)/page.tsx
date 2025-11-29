"use client";
import Image from "next/image";
import { useState } from "react";
const list: { id: number; name: string }[] = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Hamid" },
  { id: 3, name: "Rahman" },
  { id: 4, name: "Faieq" },
  { id: 5, name: "Mohammad" },
];
export default function Home() {
  const [value, setValue] = useState("");
  const filteredData = list.filter((item) => {
    return item.name.toLowerCase().includes(value);
  });
  return (
    <div>
      <input
        className="border"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div>
        {filteredData.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}
