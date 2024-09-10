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