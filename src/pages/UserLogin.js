import {useRef, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {loginUser} from '../features/user'
import {useNavigate} from 'react-router-dom'

function UserLogin() {
  const loginEmail = useRef()
  const loginPassword = useRef()

  const dispatch = useDispatch()
  const allUsers = useSelector(state => state.user.value.allUsers)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  function login() {
    const user = {
      email: loginEmail.current.value,
      password: loginPassword.current.value
    }
    const isRegistered = allUsers.find( x => x.email === user.email && x.password === user.password)

    if (!isRegistered) return setError('Such user does not exist')
    if (isRegistered)  setError(null)
    dispatch(loginUser(isRegistered))
    navigate('/profile/'+user.email)
  }

  return (
    <div>
        <input ref={loginEmail} type="text" placeholder="Email" />
        <input ref={loginPassword} type="password" name="" id="" />
        {error && <h3>{error}</h3>}
        <button onClick={login}>Login</button>
    </div>
  )
}

export default UserLogin