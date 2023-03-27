import React from 'react'
import { BorderBox } from './Button'
import { Cols, ImgLayout, Rows } from './Layout'
import { Text } from './TextStyle'
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addItem } from 'utils/store';



function ColsCard({item}) {
  const dispatch = useDispatch()


  return (
    <Cols
      _content='center' _items='center' _width='150px' _gap='0px'
    >
      <ImgLayout
        _width='150px' _height='200px' _margint='30px' _bdr='0px'
        src={item.image}
      />
      <Rows>
        <Text _fonts='15px' _fontw={700}>{item.name}</Text>
        {/* <Text _fonts='7px'>10,000₩</Text> */}
      </Rows>
      <Text>by {item.author}</Text>
      <Rows>

      </Rows>
        <BorderBox
           _margin='15px 15px 0px 15px' _bg="pink50" _height='35px' _width='65%' _fontc='white' _pd='0px 0px 0px 15px'
        >
          <Rows
            onClick={()=>{
              dispatch(addItem({id:item.id, name:item.name, count:1, author:item.author, language:item.language, sales:item.sales, genre:item.genre, date:item.date, image:item.image}))
            }}
            _bg='transparant' _padding='0px 0px 0px 13px'
          >
            <Text _color='white' _fonts='15px'>Like</Text>
            <BsFillSuitHeartFill size={13}/>
          </Rows>
        </BorderBox>
    </Cols>
  )
}

export default ColsCard