import { Container } from 'components/CommonUI/Container'
import { Cols } from 'components/CommonUI/Layout'
import Header from 'components/Header/Header'
import React from 'react'
import data from 'assets/data/authordata.json'

function AuthorPage() {
  const author = data.data
console.log(author);

  return (
      <Container>
        <Header/>

        <Cols>


        </Cols>


      </Container>
  )
}

export default AuthorPage