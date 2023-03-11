import React from 'react'
import { useParams } from 'react-router-dom'

function BestSellerDetail() {
  const {DetailsParams} = useParams();

  return (
    <div>BestSellerDetail {DetailsParams}</div>
  )
}

export default BestSellerDetail