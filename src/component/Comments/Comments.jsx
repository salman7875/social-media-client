import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import './comments.scss'

const Comments = () => {
  return (
    <div className='comments'>
      <header>
        <ArrowBackIcon className='icon' />
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
