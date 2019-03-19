import styled from 'styled-components';

import { Button } from 'rebass';

const ChunkyButton = styled.div`
  text-align: center;
  color: #1d1d1b;
  padding: 1rem 2rem;
  position: relative;
  border: 3px solid #1d1d1b;
  background: 0 0;
  cursor: pointer;
  border-radius: 2px;
  font-weight: 600;
  display: inline-block;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  -webkit-box-shadow: 5px 5px 0 0 #1d1d1b;
  box-shadow: 5px 5px 0 0 #1d1d1b;

  :hover {
    transform: translate(2.5px, 2.5px);
    -webkit-box-shadow: 0px 0px 0 0 #1d1d1b;
    box-shadow: 0px 0px 0 0 #1d1d1b;
  }
`;

export default ChunkyButton;
