import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <span className= 'text-lg font-bold '>GOODLIFE 
        <p className='text-sm font-semibold text-blue-600'>Travel and Tour</p></span>
      </Link>

    

      

    
    </nav>
  )
}

export default Navbar