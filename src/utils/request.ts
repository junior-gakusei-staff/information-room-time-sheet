import { getCurrentDateJapanese } from './actions';
import { WeekSchedule, ClassInfo } from '@/types/types';

interface RawClassInfo {
  className: string;
  faculty:string;
  teacher: string;
  startTime: number;
  endTime: number;
  startDay: string;
  endDay: string;
}

function getDayOfWeek(dateString: string): keyof WeekSchedule | null {
  const date = new Date(dateString.replace(/年|月/g, '-').replace('日', ''));
  const dayOfWeek = date.getDay();
  const days: (keyof WeekSchedule)[] = ['sunDay', 'monDay', 'tuesDay', 'wednesDay', 'thursDay', 'friDay', 'saturDay'];
  return days[dayOfWeek] || null;
}

export async function getProcessedRequestData(): Promise<WeekSchedule> {
  const rawData: RawClassInfo[] = await getRequestData();
  const currentDate = getCurrentDateJapanese();
  
  const processedData: WeekSchedule = {
    monDay: {}, tuesDay: {}, wednesDay: {}, thursDay: {}, friDay: {}, saturDay: {}, sunDay: {}
  };

  rawData.forEach(item => {
    // 開始日が現在日付より前の場合はスキップ
    if (item.startDay < currentDate) return;

    
    const executeEnd = item.startTime+item.endTime
    for(let i=item.startTime; i < executeEnd; i++){
      const dayOfWeek = getDayOfWeek(item.startDay);
      if (dayOfWeek) {
        const classKey = `class-${item.startTime}` as keyof typeof processedData[typeof dayOfWeek];
        
        const classInfo: ClassInfo = {
          className: item.className,
          Faculty: item.faculty, 
          teacherName: item.teacher
        };
  
        processedData[dayOfWeek][classKey] = classInfo;
      }
    }
    
  });

  return processedData;
}

// 既存のgetRequestData関数
async function getRequestData(): Promise<RawClassInfo[]> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL_REQUEST as string);
  const data = await response.json();
  return data;
}