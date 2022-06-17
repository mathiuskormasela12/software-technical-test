// ========== MessageField
// import all modules
import React from 'react';
import PropsTypes from 'prop-types';
import { IMessageFieldProps } from '../interfaces';
import {
  InputField,
  InputContainer,
  InputLeft,
  InputRight,
  Icon,
  SendButton,
} from '../styles';
import arrow from '../icons/arrow.svg';

export const MessageField: React.FC<IMessageFieldProps> = ({ onSubmit, ...props }) => (
  <form>
    <InputContainer>
      <InputLeft>
        <InputField {...props} />
      </InputLeft>
      <InputRight>
        <SendButton type="button" onClick={onSubmit}>
          <Icon src={arrow} alt="Arrow" />
        </SendButton>
      </InputRight>
    </InputContainer>
  </form>
);

MessageField.propTypes = {
  value: PropsTypes.string.isRequired,
  onChange: PropsTypes.func.isRequired,
  onSubmit: PropsTypes.func.isRequired,
  placeholder: PropsTypes.string.isRequired,
  type: PropsTypes.string.isRequired,
};
