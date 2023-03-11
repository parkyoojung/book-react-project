import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to='/'>MainPage</Link>
      <Link to='/cart'>CartPage</Link>
      <Link to='/search'>SearchPage</Link>
      <Link to='/bestseller'>BestSellerPage</Link>
    </nav>
  )
}

export default Header