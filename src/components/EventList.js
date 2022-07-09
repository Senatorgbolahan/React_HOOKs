import React from 'react'
import styles from './EventList.module.css'

export default function EventList({handleClick, event}) {
  return (
    <div>
      {  event.map((event, index) => {
       return <div key={event.id} className={styles.card}>
          <h2> {index} - {event.title} </h2>
          <p>{event.location} - {event.date}</p>
          <button onClick={()=>handleClick(event.id)}>delete event</button>
        </div> 
      })}
    </div>
  )
}
