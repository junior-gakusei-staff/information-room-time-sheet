import React from "react";
import { HomeProps } from "@/types/types";
import type { Metadata } from "next";
import { getRequestData } from "@/utils/actions";
import ClassCard from "@/components/request/ClassCard";

export const metadata: Metadata = {
  title: "情報処理教室時間割表",
};
export interface ClassInfo {
  className: string;
  teacher: string;
  startTime: number;
  endTime: number;
  startDay: string;
  endDay: string;
}

// timetableの型定義
export type Timetable = ClassInfo[];

const Home: React.FC<HomeProps> = async () => {
  try {
    const timetable: Timetable = await getRequestData();
    return (
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">
          申請書対応済み一覧
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {timetable.map((classInfo) => (
            <ClassCard
              key={`${classInfo.startDay}-${classInfo.startTime}`}
              classInfo={classInfo}
              index={classInfo.startTime}
            />
          ))}
        </div>
      </main>
    );
  } catch (e) {
    return (
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-red-600">
          エラーが発生しました
        </h1>
        <p className="mt-4 text-gray-600">
          時間割の取得中にエラーが発生しました。後でもう一度お試しください。
        </p>
      </main>
    );
  }
};

export default Home;
