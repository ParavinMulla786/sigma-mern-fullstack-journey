import React from "react"
export default function Msgbox({username,textcolor}) {
   
  return (
    <h1 style={{
        color:textcolor    }}>
            Hello , {username}
            </h1>
  )
}

