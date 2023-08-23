import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Root = () => {
  return (
    <>
      <Outlet />
      <div>
        <Navbar />
      </div>
    </>
  )
}

export default Root
