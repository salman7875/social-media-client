import { useState } from 'react'
import './register.scss'

const Register = () => {
  const [avatar, setAvatar] = useState('')

  function getAvatar (e) {
    setAvatar(window.URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div className='register'>
      <div className='wrapper'>
        <h1 className='logo'>Instagram</h1>
        <p className='lines'>
          Sign up to see photos and videos from your friends.
        </p>
        <form>
          <div className='control'>
            <label htmlFor='avatar'>User Profile</label>
            <input
              type='file'
              id='avatar'
              className='hidden'
              onChange={getAvatar}
            />
          </div>
          <div className='preview'>
            <img src={avatar} alt='' />
          </div>

          <div className='control'>
            <input type='text' placeholder='Username' name='username' />
          </div>
          <div className='control'>
            <input type='text' placeholder='Full Name' name='fullName' />
          </div>
          <div className='control'>
            <input type='email' placeholder='Email address' name='email' />
          </div>
          <div className='control'>
            <input type='password' placeholder='Password' name='password' />
          </div>
          <div className='action'>
            <button type='submit'>Sign up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
