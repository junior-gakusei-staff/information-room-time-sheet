export const roomName: string[] = [
    "t602", "t603", "t604", "t605", "t606", "t607", "t608",
    "T702", "T703", "T704", "T705", "T706", "T707", "T708",
    "E501", "E503", "E504", 
]

// T60* のみの配列
export const t60Rooms: string[] = roomName.filter(room => /^[tT]60\d+$/.test(room));

// T70* のみの配列
export const t70Rooms: string[] = roomName.filter(room => /^[tT]70\d+$/.test(room));

// E50* のみの配列
export const e50Rooms: string[] = roomName.filter(room => /^E50\d+$/.test(room));





