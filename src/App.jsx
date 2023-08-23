import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Register from './component/Register/Register'
import Login from './component/login/Login'
import Feed from './component/Feed/Feed'
import Profile from './component/Profile/Profile'
import NewPost from './component/New-Post/NewPost'
import Search from './component/Search/Search'
import UserList from './component/UserList/UserList'
import Root from './layout/Root/Root'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Feed },
      { path: 'new-post', Component: NewPost },
      { path: 'search', Component: Search },
      { path: 'profile', Component: Profile },
      { path: 'followers', Component: UserList },
      { path: 'followings', Component: UserList }
    ]
  },
  { path: '/login', Component: Login },
  { path: '/register', Component: Register }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
