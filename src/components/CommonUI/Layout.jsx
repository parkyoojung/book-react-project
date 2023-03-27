import styled from "styled-components";
import Swiper from 'swiper';

export const BlackBackground = styled.div`
    cursor: ${p => p._cursor || 'pointer'};
    width: '100%';
    background-color: black;
    height: ${p => p._height || "auto"};
`;
export const Container = styled.div`
    cursor: ${p => p._cursor || 'pointer'};
    display: flex;
    flex-direction: column;
    gap: ${p => p._gap || 8}px;
    width: '100%';
    height: ${p => p._height || "auto"};
`;

export const Contents = styled.div`
    display: block;
    padding: ${p => p._padding || "24px 20px"};
    background: ${p => p._bg || "#FFF"};
    max-width: 728px;
    width: ${p => p._width || "100%"};
    height: ${p => p._height || "auto"};
    cursor: ${p => p._cursor || 'pointer'};
    @media screen and (max-width: 450px) {
        padding: ${p => p._paddingmedia};
    }
`;

export const Inner = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
`;

export const Scroll = styled.div`
    overflow: scroll;
    flex-direction: row;
    width: '100%';
    &::-webkit-scrollbar {
        display: none;
    }
`;
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0px;
    width: 100%;
    padding-top: 16px;
    gap: 32px 20px;
    align-self: center;
    height: ${p => p._height || "auto"};
    @media screen and (max-width: 535px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
export const ImgLayout = styled.img`
  background-repeat: no-repeat;
  overflow: hidden;
  width: ${p => p._width || "100%"};
  height: ${p => p._height || "auto"};
  object-fit: ${p => p._object || "cover"};
  border-radius: ${p => p._bdr || '99px 99px 0px 0px'};
  margin-top: ${p => p._margint || '0px'};
  margin-bottom: ${p => p._marginb || '0px'};
  z-index: 40;
  @media screen and (max-width: 450px) {
  }
`;

export const Rows = styled.div`
  display: flex;
  flex-direction: rows;
  gap: ${p => p._gap || 8}px;
  justify-content: ${p => p._content || "inherit"};
  align-items: ${p => p._items || "inherit"};
  width: ${p => p._width || "100%"};
  height: ${p => p._height || "auto"};
  padding: ${p => p._padding || "0px"};
  white-space: nowrap;
  overflow: ${p => p._overflow || "hidden"};
  transform: ${p => p._transform};
  background-color: ${p => p._bg || 'white'};
  margin: ${p => p._margin};
  @media screen and (max-width: 620px) {
    padding: ${p => p._paddingmedia};
  }
`;

export const DisplayRows = styled.div`
  display: ${p => p._display || 'flex'};
  flex-direction: rows;
  gap: ${p => p._gap || 8}px;
  justify-content: ${p => p._content || "inherit"};
  align-items: ${p => p._items || "inherit"};
  width: ${p => p._width};
  height: ${p => p._height || "auto"};
  padding: ${p => p._padding || "0px"};
  margin: ${p => p._margin || "0px"};
  white-space: nowrap;
  overflow: ${p => p._overflow || "hidden"};
  transform: ${p => p._transform};
  background-color: ${p => p._bg || 'white'};
  @media screen and (max-width: 500px) {
    display: ${p => p._displaymedia};
  }
`;

export const Cols = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: ${p => p._gap || 8}px;
  width: ${p => p._width || "100%"};
  padding: ${p => p._padding || "0px"};
  justify-content: ${p => p._content};
  align-items: ${p => p._items};
  background-color: ${p => p._bg};
`;

export const Relative = styled.div`
    position: relative;
    width: ${p => p._width || "100%"};
    height: ${p => p._height || "auto"};
    padding: ${p => p._padding || "0px"};
    background-color: ${p => p._bg};
`;

export const Absolute = styled.div`
    top: ${p => p._top};
    bottom: ${p => p._bottom};
    left: ${p => p._left};
    right: ${p => p._right};
    position: absolute;
    width: ${p => p._width || "100%"};
    height: ${p => p._height || "auto"};
    padding: ${p => p._padding || "0px"};
    background-color: ${p => p._bg};
    z-index: 50;
`;

export const SwiperWapper = styled(Swiper)`
  	width: 100% !important;
	max-width: 728px !important;
	height: 180px !important;
	overflow: hidden !important;
`;




// 헤더 레이아웃
export const MainHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: black;
    font-size: 17px;
    @media screen and (max-width: 728px) {
        width: 100%;
    }
`;
