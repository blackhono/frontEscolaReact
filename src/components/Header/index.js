import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa'
import { AuthContext } from '../../contexts/auth'

import { Nav } from './styled'

export default function Header() {
  const { logout } = useContext(AuthContext)
  const handleLogout = (e) => {
    e.preventDefault()
    logout()
  }
  return (
    <Nav>
      <Link to='/'>
        Home <FaHome size={24} />
      </Link>
      <Link to='/login' onClick={handleLogout}>
        Faça Logout <FaSignInAlt size={24} />
      </Link>
      <Link to='/login'>
        Faça Login <FaUserAlt size={24} />
      </Link>
    </Nav>
  )
}

/*
<a href='/a'>
        Faça Logout <FaSignInAlt size={24} />
      </a>
      <a href='a'>
        Faça Login <FaUserAlt size={24} />
      </a> */
