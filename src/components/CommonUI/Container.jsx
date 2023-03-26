import React from 'react'
import styled from "styled-components";
import PropTypes from "prop-types";
import MainNav from 'components/MainPage/MainNav';

export const Container = (props) => {
    return (
        <Wrapper>
          <Main as="main">
            {props.children}
          </Main>
        </Wrapper>
    );
};

Container.props = {
    title: PropTypes.string,
    search: PropTypes.bool,
    bell: PropTypes.bool,
    cart: PropTypes.bool,
    back: PropTypes.bool,
    backArrow: PropTypes.bool,
    titleCenter: PropTypes.bool,
    onBackClick: PropTypes.func,
    backPath: PropTypes.string,
};



export const Wrapper = styled.div`
z-index: 10;
position: relative;
width: 100%;
height: auto;
background-color: white;
`;

export const Main = styled.div`
  z-index: 20;
  background-color: ${p => p._bc || "white"};
  min-height: calc(100vh - 60px);
  position: relative;
  width: 100%;
  max-width: 728px;
  margin: 0 auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;