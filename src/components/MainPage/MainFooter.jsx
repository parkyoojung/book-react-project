import { Cols, Rows } from 'components/CommonUI/Layout'
import { Text } from 'components/CommonUI/TextStyle'
import React from 'react'

function MainFooter() {
  return (
    <Rows
      _height='350px' _bg='#FAF8F6' _padding='20px' _content='space-evenly' _items='center' _gap={20}
    >
      <Cols
        _width='150px'  
      >
        <Text
          _fontw='700' _fonts='30px' _mediafontl='25px' _mediafontm='20px'
        >
          Company
        </Text>
        <Text>About us</Text>
        <Text>Notice</Text>
        <Text>FAQ</Text>
      </Cols>
      <Cols
        _width='150px'  
      >
        <Text
          _fontw='700' _fonts='30px' _mediafontl='25px' _mediafontm='20px'
        >
          Contact
        </Text>
        <Text>Email</Text>
        <Text>Chat Service</Text>
        <Text>How to Find</Text>
      </Cols>
      <Cols
        _width='150px'  
      >
        <Text
          _fontw='700' _fonts='30px' _mediafontl='25px' _mediafontm='20px'
        >
          SNS
        </Text>
        <Text>Instagram</Text>
        <Text>Facebook</Text>
        <Text>Youtube</Text>
      </Cols>
    </Rows>
  )
}

export default MainFooter