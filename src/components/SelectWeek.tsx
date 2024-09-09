"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const Select: React.FC = () => {
  const router = useRouter();
  const weekDays = [
    { jp: "月", en: "monDay" },
    { jp: "火", en: "tuesDay" },
    { jp: "水", en: "wednesDay" },
    { jp: "木", en: "thursDay" },
    { jp: "金", en: "friDay" },
    { jp: "土", en: "saturDay" }
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDay = event.target.value;
    router.push(`/room/${selectedDay}`);
  };

  return (
    <select onChange={handleChange} className="p-2 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
      <option value="">曜日を選択してください</option>
      {weekDays.map((day) => (
        <option key={day.en} value={day.en}>
          {day.jp}曜日
        </option>
      ))}
    </select>
  );
};

export default Select;