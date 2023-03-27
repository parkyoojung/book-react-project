import { Cols, ImgLayout, Rows } from 'components/CommonUI/Layout';
import { Text } from 'components/CommonUI/TextStyle';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function LikePage() {
  const a = useSelector((a)=>a)

  return (
    <Cols
      _bg='white' _gap='15px' _padding='30px'
    >
      <Text _fonts='40px'>{a.user}'s Like List</Text>
      {
        a.like.map((item, i)=>
          <LikeCard 
            key={i} item={a.like[i]} 
          />
        )
      }
    </Cols>
  )
}

export default LikePage

function LikeCard ({item}){
    console.log(item);

  return(
    <Rows
      _margin='15px 0px' _height='300px' _bg='black' _padding='15px' _content='space-between'
    >
      <Cols
        _content='space-between'
      >
        <div>
        <Text _color='white' _fonts='40px' _mediafontl='40px' _mediafontm='40px' _fontw={700}>{item.name}</Text>
        </div>
        <div>
          <Text _color='white'  _fonts='20px'>{item.author}</Text>
          <Text _color='white'  _fonts='20px'>{item.language}</Text>
          <Text _color='white'  _fonts='20px'>{item.sales}</Text>
          <Text _color='white'  _fonts='20px'>{item.genre}</Text>
          <Text _color='white'  _fonts='20px'>{item.date}</Text>
        </div>
      </Cols>
      <ImgLayout
        _height='100%' _width='250px' _bdr='0px'
        src={item.image}
      />
    </Rows>
  )
}