import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import HomeIcon from '@mui/icons-material/Home'

import SearchIcon from '@mui/icons-material/Search'

import AddCircleIcon from '@mui/icons-material/AddCircle'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined'

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import PersonIcon from '@mui/icons-material/Person'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [path, setPath] = useState('/')

  const loc = useLocation()
  useEffect(() => {
    setPath(loc.pathname)
  }, [path])

  return (
    <nav className='navbar'>
      <div className='wrapper'>
        <ul>
          <li onClick={() => setPath('/')}>
            <Link to='/'>
              {path === '/' ? (
                <HomeIcon className='icon' />
              ) : (
                <HomeOutlinedIcon className='icon' />
              )}
            </Link>
          </li>
          <li onClick={() => setPath('/search')}>
            <Link to='/search'>
              <SearchIcon className='icon' />
            </Link>
          </li>
          <li onClick={() => setPath('/new-post')}>
            <Link to='/new-post'>
              {path === '/new-post' ? (
                <AddCircleIcon className='icon' />
              ) : (
                <AddCircleOutlineIcon className='icon' />
              )}
            </Link>
          </li>
          <li>
            <Link to='#'>
              <VideoCameraFrontOutlinedIcon className='icon' />
            </Link>
          </li>
          <li onClick={() => setPath('/profile')}>
            <Link to='/profile'>
              {path === '/profile' ? (
                <PersonIcon className='icon' />
              ) : (
                <PersonOutlinedIcon className='icon' />
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
