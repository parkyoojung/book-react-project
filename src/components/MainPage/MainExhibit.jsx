import { Cols, ImgLayout, Rows } from 'components/CommonUI/Layout'
import { Text } from 'components/CommonUI/TextStyle'
import React from 'react'

function MainExhibit() {
  const src = 'https://www.buchmesse.de/files/styles/header_overview_page_without_blend_fluid/public/media/image/2023-Ausstellen-Header-02-Kampagne.jpg?itok=S3Fpz8OU'
  return (
    <Rows
      _height='350px' _bg='black' _padding='20px' _content='space-evenly' _items='center' _gap={20}
    >
      <Rows
        _content='space-between' _padding='0px 15px' _items='flex-end'
      >
        <Text _fonts='35px' _mediafontl='31px' _mediafontm='30px' _fontw={700}>Exhibition</Text>
      </Rows>
      <Cols>
     <Text _color='white'>Frankfurter Buchmesse</Text>
     <Text _color='white'>2023.10.18-10.22</Text>
     <Text _color='white'>75th</Text>
      </Cols>
     <ImgLayout _bdr='0' src={src}/>

    </Rows>
  )
}

export default MainExhibit