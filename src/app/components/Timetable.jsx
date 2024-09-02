import React from 'react';

const Timetable = ({ timetable, roomName }) => {
   

    const renderTableRows = (classPeriod) => {
        return (
            <tr key={classPeriod}>
                <td className="py-2 px-2 border-b">{classPeriod}</td>
                {['monDay', 'tuesDay', 'wednesDay', 'thursDay', 'friDay', 'saturDay', 'sunDay'].map(day => (
                    <td key={day} className="py-2 px-2 border-b">
                        <div>{timetable[day]?.[classPeriod]?.className}</div>
                        <div>{timetable[day]?.[classPeriod]?.Faculty}</div>
                        <div>{timetable[day]?.[classPeriod]?.teacherName}</div>
                    </td>
                ))}
            </tr>
        );
    };

    return (
        <div>
            <h2 className="bg-pink-200 p-2">{roomName} 時間割表</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-2 border-b">時限</th>
                        <th className="py-2 px-2 border-b">月曜日</th>
                        <th className="py-2 px-2 border-b">火曜日</th>
                        <th className="py-2 px-2 border-b">水曜日</th>
                        <th className="py-2 px-2 border-b">木曜日</th>
                        <th className="py-2 px-2 border-b">金曜日</th>
                        <th className="py-2 px-2 border-b">土曜日</th>
                        <th className="py-2 px-2 border-b">日曜日</th>
                    </tr>
                </thead>
                <tbody>
                    {['class-1', 'class-2', 'class-3', 'class-4', 'class-5', 'class-6', 'class-7'].map(classPeriod => (
                        renderTableRows(classPeriod)
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Timetable;

