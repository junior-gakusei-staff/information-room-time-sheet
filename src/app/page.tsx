import Time from "@/components/Time"
import { HomeProps } from '@/types/types';
import type { Metadata } from 'next'
import Select from "@/components/SelectRoom"
import { getCurrentDay } from "@/utils/actions";

export const metadata: Metadata = {
  title: '情報処理教室時間割表',
}
const Home: React.FC<HomeProps> = () => {
  try {
    const currentDay = "火曜日"
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
        <main className="container mx-auto p-4 md:p-8">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <Select />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {<Time  roomName="T602" currentDay={currentDay} />}
            {<Time  roomName="T603" currentDay={currentDay}/>}
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


