import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'

import Stories from '../../layout/Story/Stories'
import Post from '../../layout/Post/Post'
import './feed.scss'

const Feed = () => {
  const arr = ['1', '2', '', '', '']

  return (
    <div className='feed'>
      <div className='wrapper'>
        <header>
          <h1>CommConnect</h1>
          <ul>
            <li>
              <a href='#'>
                <FavoriteBorderIcon />
              </a>
            </li>
            <li>
              <a href='#'>
                <ChatOutlinedIcon />
              </a>
            </li>
          </ul>
        </header>
        {/* STORY */}
        <section className='story'>
          {arr.map(story => (
            <div>
              <Stories item={story} />
            </div>
          ))}
        </section>
      </div>
      {/* --------- POST --------- */}
      {arr.map(post => (
        <Post />
      ))}
    </div>
  )
}

export default Feed
