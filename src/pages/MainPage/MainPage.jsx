import React from 'react'
import MainBanner from 'components/MainPage/MainBanner'
import MainBestseller from 'components/MainPage/MainBestseller'
import MainExhibit from 'components/MainPage/MainExhibit'
import MainAuthor from 'components/MainPage/MainAuthor'
import { Container } from 'components/CommonUI/Layout'
import MainFooter from 'components/MainPage/MainFooter'
import MainSwiper from 'components/MainPage/MainSwiper'

function MainPage() {
  return (

    <Container
      _gap={30} 
    >
      <MainSwiper/>
      <MainBanner/>
      <MainExhibit/>
      <MainBestseller/>
      <MainAuthor/>
      <MainFooter/>
    </Container>
  )
}

export default MainPage

