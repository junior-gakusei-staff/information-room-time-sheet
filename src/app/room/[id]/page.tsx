import React from 'react'

const page = ({ params: { id } }: { params: { id: string } }) => {
    const roomName = id
    console.log(roomName)
    
  return (
    <div>page</div>
  )
}

export default page