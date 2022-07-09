import {useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addUser } from '../features/user'

function UserRegistration() {
    const registrationEmail = useRef()
    const registrationPassw1 = useRef()
    const registrationPassw2 = useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState('')
    console.log(useSelector(state=>state.user.value.allUsers))
    const validateEmail = (email) => {
        return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    } 

    
    function registerUser() {
        let confirmation = false

        const newUser = {
            email: registrationEmail.current.value,
            passOne: registrationPassw1.current.value,
            passTwo: registrationPassw2.current.value
        }

        if (!validateEmail(newUser.email)) confirmation = 'Email is incorrect'
        if (newUser.passOne.length < 4 || newUser.passOne.length > 20) confirmation = 'Your password must be between 4 and 20 symbols'
        if (newUser.passOne !== newUser.passTwo) confirmation = 'Password 1 and password 2 must match'

        if (confirmation) return setError(confirmation)

        dispatch(addUser(newUser))
        navigate('/')
    }

  return (
    <div>
        <input ref={registrationEmail} type="text" placeholder="Email" />
        <input ref={registrationPassw1} type="password" name="password1" id="password1" />
        <input ref={registrationPassw2} type="password" name="password2" id="password2" />
        {error && <h3>{error}</h3>}
        <button onClick={registerUser}>Register</button>

    </div>
  )
}

export default UserRegistration