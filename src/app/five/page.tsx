import Time from "@/components/Time";
import { HomeProps } from "@/types/types";
import type { Metadata } from "next";
import { getCurrentDay } from "@/utils/actions";
import { e50Rooms } from "@/utils/actions";

export const metadata: Metadata = {
  title: "情報処理教室時間割表",
};

const Home: React.FC<HomeProps> = () => {
  try {
    const currentDay = getCurrentDay();
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
        <main className="container mx-auto p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ">
            {e50Rooms.map((roomName, index) => (
              <Time
                roomName={roomName}
                currentDay={currentDay}
                key={`${roomName}${index}`}
              />
            ))}
          </div>
        </main>
      </div>
    );
  } catch (e) {
    return (
      <>
        <h1>error</h1>
      </>
    );
  }
};

export default Home;
