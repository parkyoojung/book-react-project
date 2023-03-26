import { Container } from 'components/CommonUI/Container'
import Header from 'components/Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div>
      <Container>
        <Header/>
        <Outlet/>
      </Container>
    </div>
  )
}

export default Root