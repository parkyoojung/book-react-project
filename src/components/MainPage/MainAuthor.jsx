import React from 'react'
import { Absolute, Cols, ImgLayout, Relative, Rows } from 'components/CommonUI/Layout'
import { BorderBox } from 'components/CommonUI/Button'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Text } from 'components/CommonUI/TextStyle';
import { useNavigate } from 'react-router-dom';
import data from 'assets/data/authordata.json'

function MainAuthor() {
  const navigate = useNavigate();
  const author = data.data

  return (
    <Cols>
      <Rows
        _height='50px' _content='space-between' _padding='0px 15px' _items='flex-end'
      >
        <Text _fonts='35px' _mediafontl='35px' _mediafontm='30px' _fontw={700}>Today's Author</Text>
        <Text
          onClick={() => navigate("/bestseller")}
        >
          See All
        </Text>
      </Rows>
      <Rows
        _height='350px' _padding='0px' _items='center' _gap={20}
      >
        <Absolute
          _width='150px' _height='200px' _right='20px'  _bottom='475px'
        >
          <ImgLayout
            _width='200px' _height='220px'
            src={author[0].image}
          />
        </Absolute>
        <Relative
          _height='200px' _bg='black' _padding='15px'
        >
        <Cols
          _width='70%'
        >
          <Text
            _width='100%' _fontw='700' _fonts='38px' _mediafontl='30px' _mediafontm='25px' _color='white'
          >
            {author[0].name}
          </Text>
          <Text
            _fontw='500' _fonts='18px' _mediafontl='15px' _mediafontm='10px' _color='white' _mgbottommedia='30px'
          >
            {author[0].desc.substring(0, 40) + '...'}
          </Text>
          <BorderBox
            _fontc='white' _border='1px solid white' _bg="transparant" _height='40px' _width='150px' _pd='0px 0px 0px 15px'
            onClick={() => navigate("/author")}
          >
            <Rows
              _bg='transparant'
              >
              <text>See more</text>
              <AiOutlineArrowRight/>
            </Rows>
          </BorderBox>
        </Cols>
        </Relative>
      </Rows>
    </Cols>
  )
}

export default MainAuthor