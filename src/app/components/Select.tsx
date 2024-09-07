import React from 'react';
import { roomName } from '@/utils/actions';
import Link from 'next/link'
const Select: React.FC = () => {
  return (
    <select>
      {roomName.map((room, index) => (
        <option key={index} value={room}>
         <Link href={`/room/${room}`}>
          {room}
         </Link>
          
        </option>
      ))}
    </select>
  );
};

export default Select;
