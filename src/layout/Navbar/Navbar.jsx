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

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='wrapper'>
        <ul>
          <li>
            <a href='#'>
              <HomeOutlinedIcon className='icon' />
            </a>
          </li>
          <li>
            <a href='#'>
              <SearchIcon className='icon' />
            </a>
          </li>
          <li>
            <a href='#'>
              <AddCircleOutlineIcon className='icon' />
            </a>
          </li>
          <li>
            <a href='#'>
              <VideoCameraFrontOutlinedIcon className='icon' />
            </a>
          </li>
          <li>
            <a href='#'>
              <PersonOutlinedIcon className='icon' />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
