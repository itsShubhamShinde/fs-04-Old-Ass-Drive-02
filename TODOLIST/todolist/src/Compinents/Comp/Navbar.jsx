import React, { useContext } from 'react'
import { myContext } from '../Context/DataProvider'
import './Navbar.css'

const Navbar = () => {
    const {name} = useContext(myContext)
  return (
    <div className='navbar'>
       
    </div>
  )
}

export default Navbar