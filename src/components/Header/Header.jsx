import { DisplayRows, MainHeaderContainer, Rows } from 'components/CommonUI/Layout'
import { Text, TextInput } from 'components/CommonUI/TextStyle'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { FiSearch, FiThumbsUp } from 'react-icons/fi';
import { GrHomeRounded } from 'react-icons/gr';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { login, logout, onUserState } from 'api/firebase';
import { useEffect } from 'react';


function Header() {
  // 로그인기능
  const [user, setUser] = useState()
  const handleLogin = () => {
    login().then(setUser);
  }
  const handleLogout = () => {
    logout().then(setUser);
  }
  useEffect(()=>{
    onUserState((user)=>{
      console.log(user);
      setUser(user)
    })
  })


  return (
    <nav>
      <MainHeaderContainer>
        <Rows
          _padding='0 0 0 15px' _items='center' _content='flex-start' _height='70px' _bg='#FAF8F6'
        >
          <DisplayRows><Link to='/'><GrHomeRounded/></Link></DisplayRows>
          <DisplayRows _displaymedia='none'><Link to='/'>Home</Link></DisplayRows>

          <DisplayRows _margin='0 0 0 10px' ><Link to='/bestseller'><FiThumbsUp/></Link></DisplayRows>
          <Link to='/bestseller'>Best</Link>
          
          <DisplayRows _margin='0 0 0 10px' ><Link to='/search'><FiSearch/></Link></DisplayRows>
          <Link to='/search'>Search</Link>


        </Rows>
        <Rows
          _padding='0 15px 0 0' _items='center' _content='flex-end' _bg='#FAF8F6'
        >
          <DisplayRows><Link to='/cart'><BsFillSuitHeartFill/></Link></DisplayRows>
          
          <DisplayRows  _margin='0 10px 0 0'  _displaymedia='none'><Link to='/like'>Like</Link></DisplayRows>
        {
          !user && 
          <Rows 
            _content='flex-start' _width='100px' _bg='#FAF8F6'
            onClick={handleLogin}
          >
            <MdOutlineAccountCircle size={20}/><Text>Sign In</Text>
          </Rows>
        }
        {
          user && 
          <Rows 
            _content='flex-start' _width='100px' _bg='#FAF8F6'
            onClick={handleLogout}
          >
            <MdOutlineAccountCircle size={20}/><Text>Logout</Text>
          </Rows>
        }
        </Rows>
      </MainHeaderContainer>
    </nav>
  )
}

export default Header
