import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import './post.scss'

const Post = () => {
  return (
    <section className='post'>
      <div className='heading'>
        <div className='left'>
          <img
            src='https://avatars.githubusercontent.com/u/78205495?v=4'
            alt='test img'
          />
          <a href='#'>salman__76__</a>
        </div>
        <div className='right'>
          <button>Follow</button>
          <MoreHorizOutlinedIcon className='icon' />
        </div>
      </div>
      <div className='content'>
        <img
          src='https://avatars.githubusercontent.com/u/78205495?v=4'
          alt='test img'
        />
      </div>
      <div className='action'>
        <div className='top'>
          <FavoriteBorderIcon className='icon' />
          <ChatBubbleOutlineOutlinedIcon className='icon' />
          <SendOutlinedIcon className='icon' />
        </div>
        <div className='bottom'>
          <p className='likes'>100 likes</p>
          <p className='caption'>
            salman__76__ :
            <span>Dil m aata hu... samajh mai nhi............</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Post
