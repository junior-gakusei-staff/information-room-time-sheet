import { roomName } from '@/utils/actions';
import { ApiResponse } from '@/app/types/types';

export async function generateStaticParams()  {
  // roomNameの配列から、各ルームのidパラメータを生成
  return roomName.map((room) => ({
    id: room,
  }));
};

async function getData(): Promise<ApiResponse> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string);
  const data: ApiResponse = await response.json();
  console.log(data);
  return data;
}

const RoomPage =async({ params }: { params: { id: string } }) => {

  const data = await getData()

  
  return (
    <div>
      <h1>部屋: {params.id}</h1>
      {/* 部屋の詳細コンテンツをここに追加 */}
    </div>
  );
};

export default RoomPage;
