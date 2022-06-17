// ========== ChatBubble
// import all modules
import React from 'react';
import PropTypes from 'prop-types';
import { IChatBubbleProps } from '../interfaces';
import {
  BubbleContainer, BubbleText, ChatBubleStyles, SenderName,
} from '../styles/ChatBubbleStyles';

export const ChatBubble: React.FC<IChatBubbleProps> = (props) => {
  const { message, senderName, myMessage } = props;

  return (
    <BubbleContainer myMessage={myMessage}>
      {!myMessage && <SenderName>{senderName}</SenderName>}
      <ChatBubleStyles {...props}>
        <BubbleText>
          {message}
        </BubbleText>
      </ChatBubleStyles>
    </BubbleContainer>
  );
};

ChatBubble.propTypes = {
  message: PropTypes.string.isRequired,
  myMessage: PropTypes.bool.isRequired,
  senderName: PropTypes.string.isRequired,
};
