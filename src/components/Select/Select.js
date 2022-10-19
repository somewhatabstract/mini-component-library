import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden.js';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const HiddenNativeSelect = styled.select`
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const CustomSelect = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: 1rem;
  padding: 12px 52px 12px 16px;
  border-radius: 8px;

  :focus-within {
    outline: 5px auto -webkit-focus-ring-color;
  }

  :hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: calc(50% - 12px);
  right: 12px;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <CustomSelect>
        <HiddenNativeSelect value={value} onChange={onChange}>
        {children}
        </HiddenNativeSelect>
        <IconWrapper>
          <Icon id="chevron-down" size={24} strokeWidth={2} />
        </IconWrapper>
        {displayedValue}
      </CustomSelect>
    </Wrapper>
  );
};

export default Select;
