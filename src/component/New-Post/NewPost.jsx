import ClearIcon from '@mui/icons-material/Clear'
import './newPost.scss'
import { useState } from 'react'

const NewPost = () => {
  const [post, setPost] = useState('')

  function getPost (e) {
    setPost(window.URL.createObjectURL(e.target.files[0]))
  }

  function cancelHandler () {
    setPost('')
  }

  function postHandler () {
    console.log('Posting....')
  }

  return (
    <div className='newPost'>
      <header>
        <ClearIcon className='icon' />
        <p>New Post</p>
      </header>
      <div className='user-profile'>
        <img
          src='https://avatars.githubusercontent.com/u/78205495?v=4'
          alt='User-profile image'
        />
        <div className='user-name'>
          <span className='name'>Salman Ansari</span>
          <span>Salman__76__</span>
        </div>
      </div>
      <div className='input-container'>
        <label htmlFor='file'>Select Post to Upload</label>
        <input type='file' id='file' className='hidden' onChange={getPost} />
      </div>
      <div className='post'>
        <div className='container'>
          {post && <img src={post} alt='Testing' />}
          {!post && (
            <p className='lines'>
              An image is worth a thousand word - Add one to your post
            </p>
          )}
        </div>
        <div className='action'>
          <button className='cancel' onClick={cancelHandler}>
            Cancel
          </button>
          <button className='post' onClick={postHandler}>
            Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewPost
