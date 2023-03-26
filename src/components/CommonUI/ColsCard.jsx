import React from 'react'
import { BorderBox } from './Button'
import { Cols, ImgLayout, Rows } from './Layout'
import { Text } from './TextStyle'
import image from 'assets/img/book.jpg'
import { BsCartFill } from 'react-icons/bs';

function ColsCard({item}) {
  return (
    <Cols
      _content='center' _items='center' _width='150px' _gap='0px'
    >
      <ImgLayout
        _width='150px' _height='200px' _margint='30px' _bdr='0px'
        src={image}
      />
      <Rows>
        <Text _fonts='20px' _fontw={700}>Title</Text>
        <Text _fonts='7px'>10,000₩</Text>
      </Rows>
      <Text>by Author</Text>
      <Rows>

      </Rows>
        <BorderBox
           _margin='0px 15px 0px 15px' _bg="black" _height='40px' _width='80%' _fontc='white' _pd='0px 0px 0px 15px'
        >
          <Rows
            _bg='transparant' _padding='0px 0px 0px 15px'
          >
            <Text _color='white' _fonts='15px'>Cart</Text>
            <BsCartFill size={15}/>
          </Rows>
        </BorderBox>
    </Cols>
  )
}

export default ColsCard