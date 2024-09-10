import { ApiResponse, DayMapping } from "@/types/types";
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

export const roomName: string[] = [
    "T602", "T603", "T604", "T605", "T606", "T607", "T608",
    "T702", "T703", "T704", "T705", "T706", "T707", "T708",
    "E501", "E503", "E504", 
]

// T60* のみの配列
export const t60Rooms: string[] = roomName.filter(room => /^[tT]60\d+$/.test(room));

// T70* のみの配列
export const t70Rooms: string[] = roomName.filter(room => /^[tT]70\d+$/.test(room));

// E50* のみの配列
export const e50Rooms: string[] = roomName.filter(room => /^E50\d+$/.test(room));

//時間割表のデータを持って来る処理
export async function getData(): Promise<ApiResponse> {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string);
    const data: ApiResponse = await response.json();
    return data;
  }

//申請書対応済みに関するデータを持ってくる処理
export async function getRequestData(){
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL_REQUEST as string);
    const data = await response.json();
    return data;
}

//現在の曜日を取得する関数
export function getCurrentDay(): string{
    const now = new Date();
    const currentDay = format(now, 'EEEE', { locale: ja }).toLowerCase();
    return currentDay
}

import { DayMappings, ReverseDayMapping, JapaneseDayOfWeek, EnglishDayOfWeek } from '@/types/types';

const dayMapping: DayMappings = {
  '月曜日': 'monDay',
  '火曜日': 'tuesDay',
  '水曜日': 'wednesDay',
  '木曜日': 'thursDay',
  '金曜日': 'friDay',
  '土曜日': 'saturDay',
  '日曜日': 'sunDay'
};

const reverseDayMapping: ReverseDayMapping = Object.entries(dayMapping).reduce((acc, [key, value]) => {
  acc[value] = key as JapaneseDayOfWeek;
  return acc;
}, {} as ReverseDayMapping);

export function japaneseToEnglishDay(japaneseDay: JapaneseDayOfWeek): EnglishDayOfWeek {
  const result = dayMapping[japaneseDay];
  if (!result) {
    throw new Error(`Invalid Japanese day: ${japaneseDay}`);
  }
  return result;
}

export function englishToJapaneseDay(englishDay: EnglishDayOfWeek): JapaneseDayOfWeek {
  const result = reverseDayMapping[englishDay];
  if (!result) {
    throw new Error(`Invalid English day: ${englishDay}`);
  }
  return result;
}

export function transformWeek(day: JapaneseDayOfWeek | EnglishDayOfWeek): EnglishDayOfWeek | JapaneseDayOfWeek {
  if (day in dayMapping) {
    return japaneseToEnglishDay(day as JapaneseDayOfWeek);
  } else if (day in reverseDayMapping) {
    return englishToJapaneseDay(day as EnglishDayOfWeek);
  } else {
    throw new Error(`Invalid day: ${day}`);
  }
}

/**
 * 現在の日付を "YYYY年MM月DD日" 形式の文字列に変換します。
 * @returns "YYYY年MM月DD日" 形式の文字列
 */
export function getCurrentDateJapanese(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
  
    return `${year}年${month}月${day}日`;
  }

//申請済みのデータを取得し使いやすいデータ整形する処理を記述する
export default function a(){
    return 0
}

