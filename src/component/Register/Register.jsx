import './register.scss'

const Register = () => {
  return (
    <div className='register'>
      <div className='wrapper'>
        <h1 className='logo'>Instagram</h1>
        <p className='lines'>
          Sign up to see photos and videos from your friends.
        </p>
        <form>
          <div className='control'>
            <input type='email' placeholder='Email address' name='email' />
          </div>
          <div className='control'>
            <input type='text' placeholder='Full Name' name='fullName' />
          </div>
          <div className='control'>
            <input type='text' placeholder='Username' name='username' />
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
