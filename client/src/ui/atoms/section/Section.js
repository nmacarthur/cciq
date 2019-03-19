import styled from 'styled-components';

const Section = styled.section`
  padding: ${props => props.space}rem 0;
  background-color: ${props => props.backgroundColor};
  @media screen and (max-width: 768px) {
    padding: ${props => props.space / 4}rem 0;
  }
`;

export default Section;
