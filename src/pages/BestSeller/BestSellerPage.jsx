import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function BestSellerPage() {
  const [details, setDetails] = useState('');
  const navigate = useNavigate('')

  const handleMove = (e) => {
    e.preventDefault();
    setDetails('')
    navigate(`/bestseller/${details}`)
  }
  return (
    <div>
      BestSellerPage
      <div onClick={handleMove}>
        BestSellerDetail
      </div>
      <button onClick={handleMove}>
        BestSellerDetail
      </button>
    </div>
  )
}

export default BestSellerPage