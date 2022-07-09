import {useState} from 'react'
import './App.css';

import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {

  const [showEvents, setShowEvents] = useState(true)
  const [showModal, setShowModal] = useState(true)
  const [event, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prev) => {
      return [...prev, event]
    })
    setShowModal(false)
  }

  const handleClick = (id) => {
    setEvents((preEvents) => {
      return preEvents.filter((event)=>(
        id !== event.id
      ))
    })
    console.log(id);
  }


  return (
    <div className="App">
      
      <Title title = "Events in your area" subTitle = "All the latest events in Lekki"/>
      <Title title = "Another title" subTitle = "All the latest events in Victoria Island"/>
      {showEvents && (<div>
        <button onClick={() => setShowEvents(false)}>hide events</button>
      </div>)}

      {!showEvents && (<div>
        <button onClick={() => setShowEvents(true)}>show events</button>
      </div>)}

      {showEvents && <EventList event={event} handleClick={handleClick}/>}
      {showModal &&  <Modal >
      <NewEventForm addEvent={addEvent}/>
      </Modal>
      }
      <br></br>
      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
    
  );
}

export default App;
