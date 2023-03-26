import React from 'react'
import VirginiaWoolf from 'assets/img/VirginiaWoolf.jpg'
import leonardodavinci from 'assets/img/leonardodavinci.jpg'
import banner from 'assets/img/book.jpg'
import { Link } from 'react-router-dom'
import MainBanner from 'components/MainPage/MainBanner'
import MainBestseller from 'components/MainPage/MainBestseller'
import MainExhibit from 'components/MainPage/MainExhibit'
import MainAuthor from 'components/MainPage/MainAuthor'
import { Container, ImgLayout } from 'components/CommonUI/Layout'
import MainFooter from 'components/MainPage/MainFooter'
import MainSwiper from 'components/MainPage/MainSwiper'

function MainPage() {
  return (

    <Container
      _gap={30} 
    >
      <MainSwiper/>
      <MainBanner/>
      <MainBestseller/>
      <MainExhibit/>
      <MainAuthor/>
      <MainFooter/>
    </Container>
  )
}

export default MainPage

