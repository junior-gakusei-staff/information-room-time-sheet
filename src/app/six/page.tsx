import Time from "@/components/Time"
import { ApiResponse,  HomeProps } from '@/types/types';
import type { Metadata } from 'next'
import { getCurrentDay } from "@/utils/actions";

export const metadata: Metadata = {
    title: '情報処理教室時間割表',
  }


const Home: React.FC<HomeProps> = async() => {
    const currentDay = getCurrentDay()
    console.log(currentDay)
    try{
        
        return (
                <main className="container mx-auto p-4">
                    <div className="grid grid-cols-1 gap-4 ">
                        {<Time currentDay={currentDay} roomName="T-602" />}
                        {<Time currentDay={currentDay} roomName="T-603" />}
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