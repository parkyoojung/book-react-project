import React from 'react'
import { Link } from 'react-router-dom'

function MainPage() {
  return (
    <div>
      MainPage
      <Link to='/bestseller'>BestSellerPage</Link>
    </div>
  )
}

export default MainPage