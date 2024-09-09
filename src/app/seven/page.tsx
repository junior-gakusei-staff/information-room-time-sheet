import Time from "@/components/Time"
import { ApiResponse,  HomeProps } from '@/app/types/types';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '情報処理教室時間割表',
  }

async function getData(): Promise<ApiResponse> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string);
  const data: ApiResponse = await response.json();
  console.log(data);
  return data;
}

const Home: React.FC<HomeProps> = async() => {
    try{
        const timetable = await getData()
        return (
                <main className="container mx-auto p-4">
                    <div className="grid grid-cols-1 gap-4 ">
                        {timetable.T602 && <Time timetable={timetable.T602} roomName="T-602" />}
                        {timetable.T603 && <Time timetable={timetable.T603} roomName="T-603" />}
                    </div>
                </main> 
        );
    }catch(e){
        return(
            <>
            <h1>error</h1>
            </>
        )

    }
    
    


};

export default Home;