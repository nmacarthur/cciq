import styled from 'styled-components';

const Card = styled.div`
  color: #1d1d1b;
  padding: 2rem 2rem;
  position: relative;
  border: 3px solid #1d1d1b;
  background: 0 0;
  cursor: pointer;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  -webkit-box-shadow: 5px 5px 0 0 #1d1d1b;
  box-shadow: 5px 5px 0 0 #1d1d1b;

  :hover {
    transform: translate(2.5px, 2.5px);
    -webkit-box-shadow: 0px 0px 0 0 #1d1d1b;
    box-shadow: 0px 0px 0 0 #1d1d1b;
    background-color: #1d1d1b;
    color: #f0dd00;
  }
`;

export default Card;
