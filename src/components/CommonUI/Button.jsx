import styled from "styled-components";

export const BorderBox = styled.button`
  width: ${p => p._width || "80px"};
  height: ${p => p._height || "auto"};
  padding: ${p => p._pd || '0px 16px'};
  display: flex;
  gap: 8px;
  justify-content: ${p => p._justyfy || 'space-between'};
  align-items: center;
  font-weight: ${p => p._fontw || '500'};
  font-size: ${p => p._fonts || '15px'};
  color: ${p => p._fontc || 'black'};
  background-color: ${p => p.theme.color[p._bg || 'transparent']};
  border: ${p => p._border};
  margin: ${p => p._margin};
  &::after {
    content: "";
    width: 24px;
    height: 24px;
    transform: rotate(${(props) => (props.active ? 180 : 0)}deg);
  }
`;