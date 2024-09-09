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

//申請書対応に




