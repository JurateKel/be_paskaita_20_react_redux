import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useState } from 'react'
import { bookDate } from '../features/callender'

function Reservations() {
  const loggedUser = useSelector(state=>state.user.value.userLoggedIn)
  const bookedDates = useSelector(state=>state.callender.value.bookedDates)
  const [reservationOwner, setReservationOwner] = useState('')
  const dispatch = useDispatch()

  function bookDate(e) {
    const targetDate = Number(e.currentTarget.id)
    console.log(targetDate)
    const user = {
      date: targetDate,
      user: {
        email: loggedUser.email,
        image: loggedUser.image
      },
      style: {backgroundColor: 'gray'}
    }
    dispatch(bookDate(user))

  }

  function checkDate(e) {
    const targetId = e.target.id

    setReservationOwner(bookedDates.find(date=>date.date-1 === Number(targetId)))

  }
  return (
    <div>
      <div className='d-flex flex-wrap callender'>

       {bookedDates.map((date, i) =>
        <div onClick={checkDate} key={i} id={i} style={date.style}>
          <p id={i}>{date.date}</p>
          {!date.user && <button onClick={bookDate} id={i+1}>Book</button>}
          {date.user.email === loggedUser.email ? <button>Cancel</button> : ''}
        </div>
       )}

      </div>
        <div className='d-flex j-space-between'>
          <div>
            <h4>Logged in user:</h4>
            <img src={loggedUser.image} alt="" />
            <p>{loggedUser.email}</p>
          </div>
          <div>
            <h4>Date booked by:</h4>
            {reservationOwner && <img src={reservationOwner.user.image} alt="" />}
            {reservationOwner && <p>{reservationOwner.user.email}</p>}
          </div>
      </div>
    </div>
  )
}

export default Reservations