import { Outlet } from 'react-router-dom'
import Appbar from './Appbar'
import Sidebar from './Sidebar'
const Layout = () => {
  return (
    <div className='grid lg:grid-cols-12  gap-4 mx-1'>
      <div className='col-span-12  border border-red-500'>
        <Appbar />
      </div>
      <div className='col-span-2  border border-red-500 overflow-hidden'>
        <Sidebar />

      </div>
      <div className='col-span-10  border border-red-500'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout