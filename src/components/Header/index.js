import { Link } from '@reach/router'
import React from 'react'

import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa'

import { Nav } from './styled'

export default function Header() {
  return (
    <Nav>
      <Link to='/'>
        Home <FaHome size={24} />
      </Link>
      <Link to='/a'>
        Faça Logout <FaSignInAlt size={24} />
      </Link>
      <Link to='/b'>
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
