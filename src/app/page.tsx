import Timetable from '@/components/Timetable';
import Link from 'next/link'
import { ApiResponse, HomeProps } from '@/app/types/types';
import type { Metadata } from 'next'
import Select from "@/components/Select"

export const metadata: Metadata = {
  title: '情報処理教室時間割表',
}

async function getData(): Promise<ApiResponse> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string);
  const data: ApiResponse = await response.json();
  console.log(data);
  return data;
}

const Home: React.FC<HomeProps> = async () => {
  try {
    const timetable = await getData()
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h1 className="text-3xl font-bold text-indigo-700 mb-4 md:mb-0">情報処理教室時間割表</h1>
              <ul className="flex space-x-4 text-sm md:text-base">
                <li><Link href="/" className="text-indigo-600 hover:text-indigo-800 transition duration-300 border-b-2 border-transparent hover:border-indigo-600">タワー6階</Link></li>
                <li><Link href="/" className="text-indigo-600 hover:text-indigo-800 transition duration-300 border-b-2 border-transparent hover:border-indigo-600">タワー7階</Link></li>
                <li><Link href="/" className="text-indigo-600 hover:text-indigo-800 transition duration-300 border-b-2 border-transparent hover:border-indigo-600">E棟</Link></li>
                <li><Link href="/" className="text-indigo-600 hover:text-indigo-800 transition duration-300 border-b-2 border-transparent hover:border-indigo-600">申請書対応済</Link></li>
              </ul>
            </div>
          </nav>
        </header>
        <main className="container mx-auto p-4 md:p-8">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <Select />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {timetable.T602 && <Timetable timetable={timetable.T602} roomName="T-602" />}
            {timetable.T603 && <Timetable timetable={timetable.T603} roomName="T-603" />}
          </div>
        </main>
      </div>
    );
  } catch (e) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100">
        <h1 className="text-2xl text-red-600 font-bold">エラーが発生しました</h1>
      </div>
    )
  }
};

export default Home;

