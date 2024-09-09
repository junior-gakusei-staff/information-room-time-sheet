import React from 'react';
import { ApiResponse, HomeProps } from '@/app/types/types';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '情報処理教室時間割表',
}

async function getData(): Promise<ApiResponse> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL_REQUEST as string);
  const data: ApiResponse = await response.json();
  console.log(data);
  return data;
}

const ClassCard: React.FC<{ classInfo: any, index: number }> = ({ classInfo, index }) => (
  <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
    <div className="bg-indigo-600 text-white py-2 px-4 font-bold text-lg">
      {index}時限目
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2">{classInfo.className}</h3>
      <p className="text-gray-600">教職員名: {classInfo.teacher}</p>
      <p className="text-gray-600">開始時限: {classInfo.startTime}時限目</p>
      <p className="text-gray-600">終了時限: {classInfo.endTime}時限目</p>
      <p className="text-gray-600">開始日: {classInfo.startDay}</p>
      <p className="text-gray-600">終了日: {classInfo.endDay}</p>
    </div>
  </div>
);

const Home: React.FC<HomeProps> = async () => {
  try {
    const timetable = await getData();
    return (
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">申請書対応済み一覧</h1>
        <div className="grid grid-cols-1 gap-4">
          {timetable.map((classInfo, index) => (
            <ClassCard key={`${classInfo.startDay}-${classInfo.startTime}`} classInfo={classInfo} index={classInfo.startTime} />
          ))}
        </div>
      </main>
    );
  } catch (e) {
    return (
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-red-600">エラーが発生しました</h1>
        <p className="mt-4 text-gray-600">時間割の取得中にエラーが発生しました。後でもう一度お試しください。</p>
      </main>
    );
  }
};

export default Home;






