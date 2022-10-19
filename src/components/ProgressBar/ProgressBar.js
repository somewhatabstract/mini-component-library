/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const wrapperStyles = {
  small: {
    '--border-radius': '4px',
    '--padding': '0px',
    '--height': '8px',
  },
  medium: {
    '--border-radius': '4px',
    '--padding': '0px',
    '--height': '12px',
  },
  large: {
    '--border-radius': '8px',
    '--padding': '4px',
    '--height': '24px',
  },
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--border-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  height: var(--height);
`;

const InnerBorderClipper = styled.div`
  border-radius: 4px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  border-radius: 4px 0 0 4px;
  height: 100%;
  overflow: hidden;
`;

const ProgressBar = ({ value, size }) => {
  const normalizedValue = Math.min(Math.max(0, value), 100);
  const width = `${normalizedValue}%`;
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={wrapperStyles[size]}
    >
      <InnerBorderClipper>
        <Bar style={{"--width": width}} />
        <VisuallyHidden>{width}</VisuallyHidden>
      </InnerBorderClipper>
    </Wrapper>
  );
};

export default ProgressBar;
