import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const fontSizes = {
  small: 14,
  large: 18,
};

const iconSizes = {
  small: 16,
  large: 24,
};

const strokeWidths = {
  small: 1.5,
  large: 2,
};

const styles = {
  small: {
    "--border-bottom": `1px solid ${COLORS.black}`,
    "--padding-bottom": "2px",
    "--padding-top": `${fontSizes["small"] / 2}px`,
    "--padding-left": `${iconSizes["small"] * 1.5}px`,
    "--font-size": `${fontSizes["small"]}px`,
    "--outline-offset": "2px",
  },
  large: {
    "--border-bottom": `2px solid ${COLORS.black}`,
    "--padding-bottom": "4px",
    "--padding-top": `${fontSizes["large"] / 2}px`,
    "--padding-left": `${iconSizes["large"] * 1.5}px`,
    "--font-size": `${fontSizes["large"]}px`,
    "--outline-offset": "3px",
  },
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  width: var(--width);

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  bottom: calc(var(--padding-bottom) + 2px);
`;

const TextInput = styled.input`
  border: none;
  border-bottom: var(--border-bottom);
  color: inherit;
  font-weight: 700;
  font-size: var(--font-size);
  outline-offset: var(--outline-offset);
  padding-left: var(--padding-left);
  padding-top: var(--padding-top);
  padding-bottom: var(--padding-bottom);
  width: 100%;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Wrapper style={{
      ...styles[size],
      "--width": `${width}px`
    }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={iconSizes[size]} strokeWidth={strokeWidths[size]} />
      </IconWrapper>
      <TextInput type="text" placeholder={placeholder}  />
    </Wrapper>
  );
};

export default IconInput;
