import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import './comments.scss'
import { useNavigate } from 'react-router-dom'

const Comments = () => {
  const navigate = useNavigate()

  return (
    <div className='comments'>
      <header>
        <ArrowBackIcon className='icon' onClick={() => navigate('../')} />
        <span>Comments</span>
      </header>
      <hr />
      <div className='container'>
        <img src='https://avatars.githubusercontent.com/u/78205495?v=4' />
        <div className='info'>
          <span className='name'>Salman Ansari</span>
          <span className='username'>Salman__76__</span>
          <span className='comment'>
            Hey, Nice post you are amazing. I learn many things from this post!!
          </span>
        </div>
      </div>
    </div>
  )
}

export default Comments
