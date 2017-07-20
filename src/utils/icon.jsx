import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  display: inline-block;
  vertical-align: middle;
  width: 3.5rem;
  height: 3.5rem;
  fill: ${props => props.color || '#fff'}
`;

const Icon = props => (
  <Svg {...props}>
    <use xlinkHref={`#${props.id}`} />
  </Svg>
);

export default Icon;
