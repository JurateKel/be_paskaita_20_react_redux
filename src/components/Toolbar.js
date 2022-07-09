import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Toolbar() {
  return (
    <div>
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
    </div>
  )
}

export default Toolbar