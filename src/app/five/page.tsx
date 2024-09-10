import Time from "@/components/Time"
import { ApiResponse,  HomeProps } from '@/types/types';
import type { Metadata } from 'next'
import { getCurrentDay } from "@/utils/actions";
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
    const currentDay = getCurrentDay()
    try{
        const timetable = await getData()
        console.log(timetable.E501)
        return (
                <main className="container mx-auto p-4">
                    <div className="grid grid-cols-1 gap-4 ">
                            <Time currentDay={currentDay} roomName="E-501" />
                            <Time currentDay={currentDay} roomName="E-503" />
                            <Time currentDay={currentDay} roomName="E-504" />
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