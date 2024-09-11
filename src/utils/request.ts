import { getCurrentDateJapanese } from "./actions";
import { WeekSchedule, ClassInfo, Timetables } from "@/types/types";
import { getData } from "./actions";

interface RawClassInfo {
  className: string;
  faculty: string;
  roomName: string;
  teacher: string;
  startTime: number;
  endTime: number;
  startDay: string;
  request: string;
}

function getDayOfWeek(dateString: string): keyof WeekSchedule | null {
  const date = new Date(dateString.replace(/年|月/g, "-").replace("日", ""));
  const dayOfWeek = date.getDay();
  const days: (keyof WeekSchedule)[] = [
    "sunDay",
    "monDay",
    "tuesDay",
    "wednesDay",
    "thursDay",
    "friDay",
    "saturDay",
  ];
  return days[dayOfWeek] || null;
}

export async function getProcessedRequestData(): Promise<Timetables> {
  try {
    const [rawData, existingData] = await Promise.all([
      getRequestData(),
      getData(),
    ]);
    const currentDate = getCurrentDateJapanese();

    const processedData: Timetables = JSON.parse(JSON.stringify(existingData));

    rawData.forEach((item) => {
      // 授業開始日と現在時刻が同じ場合処理する
      if (currentDate == item.startDay) {
        const dayOfWeek = getDayOfWeek(item.startDay);
        if (dayOfWeek) {
          const classInfo: ClassInfo = {
            className: item.className,
            Faculty: item.faculty,
            teacherName: item.teacher,
          };

          if (!processedData[item.roomName]) {
            processedData[item.roomName] = {
              monDay: {},
              tuesDay: {},
              wednesDay: {},
              thursDay: {},
              friDay: {},
              saturDay: {},
              sunDay: {},
            };
          }

          // 開始時限から終了時限まで繰り返し処理
          for (let time = item.startTime; time <= item.endTime; time++) {
            const classKey =
              `class-${time}` as keyof WeekSchedule[typeof dayOfWeek];
            processedData[item.roomName][dayOfWeek][classKey] = classInfo;
          }
        }
      }
    });

    return processedData;
  } catch (error) {
    console.error("データの処理中にエラーが発生しました:", error);
    throw error;
  }
}

// 既存のgetRequestData関数
async function getRequestData(): Promise<RawClassInfo[]> {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL_REQUEST as string,
  );
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  const data = await response.json();
  return data;
}
