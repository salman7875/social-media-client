import MenuIcon from '@mui/icons-material/Menu'
import './profile.scss'

const Profile = () => {
  return (
    <div className='profile'>
      <header>
        <div className='left'>
          <p>Salman__76__</p>
        </div>
        <div className='right'>
          <button>Logout</button>
          <MenuIcon className='icon' />
        </div>
      </header>
      <div className='inner-profile'>
        <div className='left'>
          <img
            src='https://avatars.githubusercontent.com/u/78205495?s=48&v=4'
            alt=''
          />
        </div>
        <div className='right'>
          <ul>
            <li>
              <a href='#'>10</a>
              <p>Posts</p>
            </li>
            <li>
              <a href='#'>10</a>
              <p>Followers</p>
            </li>
            <li>
              <a href='#'>10</a>
              <p>Followings</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='user-info'>
        <p className='username'>Salman__76__</p>
        <p className='bio'>Kisi ka bhai kisi ki jaan 🔥🔥🔥</p>
      </div>
      <div className='actions'>
        <button>Edit Profile</button>
        <button>Share Profile</button>
      </div>
      <hr />

      <div className='posts'>
        <div className='heading'>
          <h1>Posts</h1>
        </div>
        <div className='wrapper'>
          <img
            src='https://avatars.githubusercontent.com/u/78205495?s=48&v=4'
            alt=''
          />
          <img
            src='https://avatars.githubusercontent.com/u/78205495?s=48&v=4'
            alt=''
          />
          <img
            src='https://avatars.githubusercontent.com/u/78205495?s=48&v=4'
            alt=''
          />
          <img
            src='https://avatars.githubusercontent.com/u/78205495?s=48&v=4'
            alt=''
          />
          <img
            src='https://avatars.githubusercontent.com/u/78205495?s=48&v=4'
            alt=''
          />
          <img
            src='https://avatars.githubusercontent.com/u/78205495?s=48&v=4'
            alt=''
          />
          <img
            src='https://avatars.githubusercontent.com/u/78205495?s=48&v=4'
            alt=''
          />
          <img
            src='https://avatars.githubusercontent.com/u/78205495?s=48&v=4'
            alt=''
          />
          <img
            src='https://avatars.githubusercontent.com/u/78205495?s=48&v=4'
            alt=''
          />
          <img
            src='https://avatars.githubusercontent.com/u/78205495?s=48&v=4'
            alt=''
          />
          <img
            src='https://avatars.githubusercontent.com/u/78205495?s=48&v=4'
            alt=''
          />
          <img
            src='https://avatars.githubusercontent.com/u/78205495?s=48&v=4'
            alt=''
          />
          <img
            src='https://avatars.githubusercontent.com/u/78205495?s=48&v=4'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default Profile
