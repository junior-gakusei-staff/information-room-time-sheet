const ClassCard: React.FC<{ classInfo: any, index: number }> = ({ classInfo, index }) => (
    <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-indigo-600 text-white py-2 px-4 font-bold text-lg">
        {index}時限目
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{classInfo.className}</h3>
        <p className="text-gray-600">教職員名: {classInfo.teacher}</p>
        <p className="text-gray-600">開始時限: {classInfo.startTime}時限目</p>
        <p className="text-gray-600">終了時限: {classInfo.endTime}時限目</p>
        <p className="text-gray-600">開始日: {classInfo.startDay}</p>
        <p className="text-gray-600">終了日: {classInfo.endDay}</p>
      </div>
    </div>
  );

export default ClassCard