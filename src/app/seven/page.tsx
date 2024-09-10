import Time from "@/components/Time"
import { HomeProps } from '@/types/types';
import type { Metadata } from 'next'
import { getCurrentDay } from "@/utils/actions";

export const metadata: Metadata = {
    title: '情報処理教室時間割表',
  }


const Home: React.FC<HomeProps> = async() => {
    const currentDay = getCurrentDay()
    try{
        return (
                <main className="container mx-auto p-4">
                    <div className="grid grid-cols-1 gap-4 ">
                        {<Time roomName="T-602" currentDay={currentDay}/>}
                        {<Time roomName="T-603" currentDay={currentDay}/>}
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