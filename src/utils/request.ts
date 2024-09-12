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

    //既存データをコピー
    const processedData: Timetables = JSON.parse(JSON.stringify(existingData));

    rawData.forEach((item) => {
      if (currentDate === item.startDay) {
        const dayOfWeek = getDayOfWeek(item.startDay);
        if (!dayOfWeek) return;

        switch(item.request) {
          case "新規":
            addNewClass(processedData, item, dayOfWeek);
            break;
          case "変更":
            updateExistingClass(processedData, item, dayOfWeek);
            break;
          case "取消":
            cancelClass(processedData, item, dayOfWeek);
            break;
          default:
            console.error("入力が不正です:", item.request);
        }
      }
    });

    return processedData;
  } catch (error) {
    console.error("データの処理中にエラーが発生しました:", error);
    if (error instanceof Error) {
      console.error("エラーメッセージ:", error.message);
      console.error("スタックトレース:", error.stack);
    }
    throw error;
  }
}

function addNewClass(processedData: Timetables, item: RawClassInfo, dayOfWeek: keyof WeekSchedule) {
  const classInfo: ClassInfo = {
    className: item.className,
    Faculty: item.faculty,
    teacherName: item.teacher,
  };

  processedData[item.roomName] = processedData[item.roomName] || {
    monDay: {},
    tuesDay: {},
    wednesDay: {},
    thursDay: {},
    friDay: {},
    saturDay: {},
    sunDay: {},
  };

  for (let time = item.startTime; time <= item.endTime; time++) {
    const classKey = `class-${time}` as keyof WeekSchedule[typeof dayOfWeek];
    processedData[item.roomName][dayOfWeek][classKey] = classInfo;
  }
}

function updateExistingClass(processedData: Timetables, item: RawClassInfo, dayOfWeek: keyof WeekSchedule) {
  const roomNumbers = Object.keys(processedData);
  for (let roomNumber of roomNumbers) {
    const daySchedule = processedData[roomNumber][dayOfWeek];
    for (let time = item.startTime; time <= item.endTime; time++) {
      const classKey = `class-${time}` as keyof WeekSchedule[typeof dayOfWeek];
      if (daySchedule[classKey] && daySchedule[classKey].className === item.className) {
        daySchedule[classKey] = {
          className: item.className,
          Faculty: item.faculty,
          teacherName: item.teacher,
        };
      }
    }
  }
}

function cancelClass(processedData: Timetables, item: RawClassInfo, dayOfWeek: keyof WeekSchedule) {
  const roomNumbers = Object.keys(processedData);
  for (let roomNumber of roomNumbers) {
    const daySchedule = processedData[roomNumber][dayOfWeek];
    for (let time = item.startTime; time <= item.endTime; time++) {
      const classKey = `class-${time}` as keyof WeekSchedule[typeof dayOfWeek];
      if (daySchedule[classKey] && daySchedule[classKey].className === item.className) {
        delete daySchedule[classKey];
      }
    }
  }
}

async function getRequestData(): Promise<RawClassInfo[]> {
  const url = process.env.NEXT_PUBLIC_API_URL_REQUEST;
  if (!url) {
    throw new Error("API URL is not defined");
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
  }
  return response.json();
}
