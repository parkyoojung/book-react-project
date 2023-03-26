import { Cols, ImgLayout, Rows } from 'components/CommonUI/Layout'
import React from 'react'
import VirginiaWoolf from 'assets/img/VirginiaWoolf.jpg'
import leonardodavinci from 'assets/img/leonardodavinci.jpg'
import { Text } from 'components/CommonUI/TextStyle'
import { BorderBox } from 'components/CommonUI/Button'
import { AiOutlineArrowRight } from 'react-icons/ai';


function MainBanner() {
  return (
    <Rows
      _height='350px' _bg='#FAF8F6' _padding='20px' _content='space-evenly' _items='center' _gap={20}
    >
      <Rows _bg='#FAF8F6'>
        <ImgLayout
          _width='150px' _height='200px' _margint='30px'
          src={VirginiaWoolf}
          />
        <ImgLayout
          _bdr='0px 0px 99px 99px' _width='150px' _height='200px' _display='none' _marginb='30px'
          src={leonardodavinci}
        />
      </Rows>
      <Cols
        _width='50%'
      >
        <Text
          _fontw='700' _fonts='38px' _mediafontl='30px' _mediafontm='25px'
        >
          Today a reader,
        </Text>
        <Text
          _fontw='700' _fonts='38px' _mediafontl='30px' _mediafontm='25px'
        >
          tomorrow a leader.
        </Text>
        <BorderBox
          _bg="pink50" _height='40px' _width='100%' _fontc='white' _pd='0px 0px 0px 15px'
        >
          <Rows
            _bg='transparant'
          >
            <text>Start Reading</text>
            <AiOutlineArrowRight/>
          </Rows>
        </BorderBox>
      </Cols>
    </Rows>
  )
}

export default MainBanner