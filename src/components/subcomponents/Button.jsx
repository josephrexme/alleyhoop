import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-block;
  margin: 0 1rem;
  padding: 1rem 3rem;
  background: transparent;
  color: white;
  border: solid 2px currentColor;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  font-size: 1.6rem;
  cursor: pointer;
  ${props => props.solarized && css`
    background: white;
    color: var(--brand-color-3);
  `}
`;

export default Button;