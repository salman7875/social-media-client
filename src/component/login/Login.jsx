import './login.scss'

const Login = () => {
  return (
    <div className='register'>
      <div className='wrapper'>
        <h1 className='logo'>Instagram</h1>
        <p className='lines'>
          Sign up to see photos and videos from your friends.
        </p>
        <form>
          <div className='control'>
            <input type='text' placeholder='Username' name='username' />
          </div>
          <div className='control'>
            <input type='password' placeholder='Password' name='password' />
          </div>
          <div className='action'>
            <button type='submit'>Sign in</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
