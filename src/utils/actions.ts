import { ApiResponse } from "@/types/types";
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
    console.log(data);
    return data;
  }

//申請書対応済みに関するデータを持ってくる処理
export async function getRequestData(){
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL_REQUEST as string);
    const data = await response.json();
    console.log(data);
    return data;
}

export function getCurrentDay(): string{
    const now = new Date();
    const currentDay = format(now, 'EEEE', { locale: ja }).toLowerCase();
    return currentDay
}





