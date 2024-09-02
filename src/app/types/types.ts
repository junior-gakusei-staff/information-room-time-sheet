// types.ts

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
  
  // Component Props
  export interface TimetableProps {
    timetable: WeekSchedule;
    roomName: string;
  }
  
  // Page Props
  export interface HomeProps {
    // 必要に応じてプロパティを追加
  }