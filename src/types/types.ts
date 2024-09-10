// @/types/types.ts

export interface ClassInfo {
  className: string;
  Faculty: string;
  teacherName: string;
}

export interface DaySchedule {
  [key: `class-${number}`]: ClassInfo;
}

export interface WeekSchedule {
  monDay: DaySchedule;
  tuesDay: DaySchedule;
  wednesDay: DaySchedule;
  thursDay: DaySchedule;
  friDay: DaySchedule;
  saturDay: DaySchedule;
  sunDay: DaySchedule;
}

export interface Timetables {
  [room: string]: WeekSchedule;
}

export type ApiResponse = Timetables;

export interface TimetableProps {
  roomName: string;
  currentDay: string;
}

export type DayMapping = {
  [key: string]: keyof WeekSchedule;
};

// HomePropsは変更なし
export interface HomeProps {
  // 必要に応じてプロパティを追加
}
export type JapaneseDayOfWeek = '月曜日' | '火曜日' | '水曜日' | '木曜日' | '金曜日' | '土曜日' | '日曜日';
export type EnglishDayOfWeek = 'monDay' | 'tuesDay' | 'wednesDay' | 'thursDay' | 'friDay' | 'saturDay' | 'sunDay';

export type DayMappings = {
  [key in JapaneseDayOfWeek]: EnglishDayOfWeek;
};

export type ReverseDayMapping = {
  [key in EnglishDayOfWeek]: JapaneseDayOfWeek;
};