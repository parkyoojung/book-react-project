import styled from 'styled-components'

export const Text = styled.div`
  text-align: ${p => p._align};
  width: ${p => p._width};
  font-weight: ${p => p._fontw || '500'};
  font-size: ${p => p._fonts || '15px'};
  color: ${(p) => p.theme.color[p._color || "black"]};
  @media only screen and (max-width: 600px) { 
    font-size: ${p => p._mediafontl || '15px'};
    
  }
  @media only screen and (max-width: 550px) { 
    font-size: ${p => p._mediafontm || '15px'};
    margin-bottom: ${p => p._mgbottommedia};
  }
`

export const TextInput = styled.input`
  width: ${props => props._width ? props._width + 'px' : '100%'};
  height: ${props => props._height || 30}px;
  padding: 5px;
  border-width: ${props => props._border || 1}px;
  border-radius: 4px;
  border-style: solid;
  border-color: ${props => props._borcolor || '#EEEEEE'};
  background-color: ${props => props._boccolor || '#FAFAFA'};
  font-weight: 400;
  font-size: 15px;
  align-self: center;
  text-align: start;
  &::placeholder {
      color: ${props => props.theme.color.gray400};
  }
`;