import { roomName } from '@/utils/actions';

export async function generateStaticParams()  {
  // roomNameの配列から、各ルームのidパラメータを生成
  return roomName.map((room) => ({
    id: room,
  }));
};

const RoomPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>部屋: {params.id}</h1>
      {/* 部屋の詳細コンテンツをここに追加 */}
    </div>
  );
};

export default RoomPage;
