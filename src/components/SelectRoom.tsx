"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { roomName } from "@/utils/actions";

const Select: React.FC = () => {
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRoom = event.target.value;
    router.push(`/room/${selectedRoom}`);
  };

  return (
    <select onChange={handleChange}>
      <option value="">部屋を選択してください</option>
      {roomName.map((room, index) => (
        <option key={index} value={room}>
          {room}
        </option>
      ))}
    </select>
  );
};

export default Select;
