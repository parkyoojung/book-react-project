import React, { useState } from 'react'
import { TextInput } from 'components/CommonUI/TextStyle'
import { Cols, Grid } from 'components/CommonUI/Layout';
import PropTypes from "prop-types"

import data from 'assets/data/bestsellerdata.json'
import ColsCard from 'components/CommonUI/ColsCard';

function SearchPage() {
  const bestseller = data.data
  // 검색기능
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value)
  }


  const filterTitle = bestseller.filter((p) => {
        return p.name.replace(" ","").toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ",""))
    })

  return (
    <Cols _padding='20px' _content='flex-start'>
      <TextInput
        type="text" 
        value={search} 
        onChange={onChange}
        placeholder="type 'The Little Prince'"
      />


    <div>
      {filterTitle.map(namesearch => <div><span>{namesearch.name}</span></div>)}  
    </div>
      <Grid>
        {filterTitle.map(namesearch =>
          <ColsCard item={namesearch}/>
        )}
      </Grid>

    </Cols>
  )
}

export default SearchPage