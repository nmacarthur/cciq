import styled, { css } from 'styled-components';

const Column = styled.div`
  position: relative;
  padding: 0 1rem;
  width: 100%;
  align-items:stretch;
  flex-wrap: wrap;
  text-align: ${props => props.textAlign};

  ${props =>
    props.xs &&
    css`
      @media (min-width: 0px) {
        width: ${props => (props.xs ? (props.xs / 12) * 100 : '100')}%};
      }
    `}

  ${props =>
    props.sm &&
    css`
      @media (min-width: 576px) {
        width: ${props => (props.sm ? (props.sm / 12) * 100 : '100')}%};
      }
    `}

  ${props =>
    props.md &&
    css`
      @media (min-width: 768px) {
        width: ${props => (props.md ? (props.md / 12) * 100 : '100')}%};
      }
    `}

  ${props =>
    props.lg &&
    css`
      @media (min-width: 992px) {
        width: ${props => (props.lg ? (props.lg / 12) * 100 : '100')}%};
      }
    `}

  ${props =>
    props.xl &&
    css`
      @media (min-width: 1200px) {
        width: ${props => (props.xl ? (props.xl / 12) * 100 : '100')}%};
      }
    `}
  
`;

export default Column;
