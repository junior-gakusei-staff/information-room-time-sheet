import React from 'react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

const Timetable = ({ timetable, roomName }) => {
    const now = new Date();
    const currentDay = format(now, 'EEEE', { locale: ja }).toLowerCase();
    
    const dayMapping = {
        '月曜日': 'monDay',
        '火曜日': 'tuesDay',
        '水曜日': 'wednesDay',
        '木曜日': 'thursDay',
        '金曜日': 'friDay',
        '土曜日': 'saturDay',
        '日曜日': 'sunDay'
    };

    const currentDayKey = dayMapping[currentDay];
    const currentDayName = Object.keys(dayMapping).find(key => dayMapping[key] === currentDayKey);

    const renderTableRows = (classPeriod, index) => {
        return (
            <tr key={classPeriod} className='ltr border' >
                <td className="py-2 px-2 border-b text-center">{index}</td>
                <td className="py-2 px-2 border-b text-center border-s">
                    <div>{timetable[currentDayKey]?.[classPeriod]?.className}</div>
                    <div>{timetable[currentDayKey]?.[classPeriod]?.Faculty}</div>
                    <div>{timetable[currentDayKey]?.[classPeriod]?.teacherName}</div>
                </td>
            </tr>
        );
    };

    return (
        <div>
            <h2 className="bg-pink-200 p-2 font-bold ">{roomName} 時間割表</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-2 border-b">時限</th>
                        <th className="py-2 px-2 border-b">{currentDayName}</th>
                    </tr>
                </thead>
                <tbody>
                    {['class-1', 'class-2', 'class-3', 'class-4', 'class-5', 'class-6', 'class-7'].map((classPeriod, index) => (
                        renderTableRows(classPeriod, index + 1)
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Timetable;