import Time from "@/components/Time"
import { ApiResponse, HomeProps } from '@/app/types/types';
import type { Metadata } from 'next'
import Select from "@/components/SelectRoom"
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

export const metadata: Metadata = {
  title: '情報処理教室時間割表',
}

async function getData(): Promise<ApiResponse> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string);
  const data: ApiResponse = await response.json();
  console.log(data);
  return data;
}
const now = new Date();
const currentDay = format(now, 'EEEE', { locale: ja }).toLowerCase();

const Home: React.FC<HomeProps> = async () => {
  try {
    const timetable = await getData()
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
        <main className="container mx-auto p-4 md:p-8">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <Select />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {timetable.T602 && <Time timetable={timetable.T602} roomName="T-602" currentDay={currentDay} />}
            {timetable.T603 && <Time timetable={timetable.T603} roomName="T-603" currentDay={currentDay}/>}
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


