import ColsCard from 'components/CommonUI/ColsCard'
import { Cols, Grid, Rows } from 'components/CommonUI/Layout'
import { Text } from 'components/CommonUI/TextStyle'
import React from 'react'
import { useNavigate } from 'react-router-dom';

import data from 'assets/data/bestsellerdata.json'


function MainBestseller() {
  const navigate = useNavigate();
  const bestseller = data.data

  return (
     <Cols _height='350px' _gap='0px'>
      <Rows
        _content='space-between' _padding='0px 15px' _items='flex-end'
      >
        <Text _fonts='35px' _mediafontl='35px' _mediafontm='30px' _fontw={700}>Bestseller</Text>
        <Text
          onClick={() => navigate("/bestseller")}
        >
          See All
        </Text>
      </Rows>
      <Rows _content='center' _padding='0 0 0 50px' _paddingmedia='0 0 0 20px'> 
        <Grid _height='350px'>
          {
            bestseller.map((item, i)=>{
              return(
                <ColsCard item={item}/>
              )
            })
          }
        </Grid>
      </Rows>
     </Cols>
  )
}

export default MainBestseller