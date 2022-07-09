import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function UserProfile() {
  const loggedUser = useSelector(state=>state.user.value.userLoggedIn)
  const navigate = useNavigate()

  return (
    <div>
        <div>
            <img src={loggedUser.image} alt="" />
            <button>Change picture</button>
            <button onClick={()=>navigate('/reservations')}>Go to Reservations</button>
        </div>
    </div>
  )
}

export default UserProfile