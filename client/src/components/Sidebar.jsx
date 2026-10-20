import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { dummyProfileData } from '../assets/assets'
import { MenuIcon } from 'lucide-react'

const Sidebar = () => {

    const {pathname} = useLocation()
    const [userName, setUserName] = useState()
    const [mobileOpen, setMobileOpen] = useState()

    useEffect(() => {
        setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName)
    }, [])

    // Closing the menu when user change the route
    useEffect(() => {
        setMobileOpen(false)
    }, [pathname])



  return (
    <>
    {/* hamburger button */}
    <button onClick={() => setMobileOpen(ture)} className='lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg shadow-lg border border-white/10'>
        <MenuIcon size={20}/>
    </button>

    {/* Menu overlay */}
    {mobileOpen && <div onClick={() => setMobileOpen(false)} className='lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40' />}
    </>
  )
}

export default Sidebar