import { HomeProps } from '@/types/types';
import type { Metadata } from 'next'
import { getProcessedRequestData } from '@/utils/request';
export const metadata: Metadata = {
  title: '情報処理教室時間割表',
}
const Home: React.FC<HomeProps> = async() => {
  const data = await getProcessedRequestData()
  console.log(data)
return(
  <main>
    
  </main>
)
};

export default Home;


