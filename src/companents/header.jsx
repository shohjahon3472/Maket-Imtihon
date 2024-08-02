import React from 'react'

// import SHop from '../pages/Product'
import { CiSearch } from 'react-icons/ci'

import { FaRegHeart, FaSearch } from 'react-icons/fa'
import { IoIosMan } from 'react-icons/io'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
// import {Link} from 'react-router-dom'

const header = () => {
    return (
        <>

            <header className='w-full h-[80px] scroll-smooth py-[20px] px-[50px] bg-[#FBEBB5]'>
                <nav className='flex justify-center '>
                    <ul className='flex gap-8 '>
                        <li> <Link to={"/Home"}>Home</Link></li>

                        <li><Link to={"/products"}>Shop</Link></li>

                        <li> <Link to={""}>About</Link></li>

                        <li><a href="">Contact</a></li>

                        <li className='flex gap-10 '>
                            <IoIosMan />
                            < FaSearch />
                            <FaRegHeart />
                            <MdOutlineShoppingCart />
                        </li>
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default header