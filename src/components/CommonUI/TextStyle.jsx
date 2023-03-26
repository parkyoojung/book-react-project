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
  }
`