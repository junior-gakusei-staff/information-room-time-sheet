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
        const classInfo = timetable[currentDayKey]?.[classPeriod];
        return (
            <div key={classPeriod} className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-indigo-600 text-white py-2 px-4 font-bold text-lg">
                    {index}時限目
                </div>
                <div className="p-4">
                    {classInfo ? (
                        <>
                            <h3 className="font-semibold text-lg mb-2">{classInfo.className}</h3>
                            <p className="text-gray-600">{classInfo.Faculty}</p>
                            <p className="text-gray-600">{classInfo.teacherName}</p>
                        </>
                    ) : (
                        <p className="text-gray-500 italic">授業なし</p>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-300 pb-2">
                {roomName} 時間割表
            </h2>
            <div className="mb-4">
                <span className="bg-indigo-100 text-indigo-800 py-1 px-3 rounded-full font-semibold">
                    {currentDayName}
                </span>
            </div>
            <div className="space-y-4">
                {['class-1', 'class-2', 'class-3', 'class-4', 'class-5', 'class-6', 'class-7'].map((classPeriod, index) => (
                    renderTableRows(classPeriod, index + 1)
                ))}
            </div>
        </div>
    );
};

export default Timetable;