// ========== ChatRoom
// import all modules
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  ExitText,
  HeroChatBody,
  HeroChatFooter,
  HeroChatHeader,
  HeroChatHeaderCol,
  HeroChatRoom,
  HeroChatRoomFlex,
  RoomIdText,
} from '../styles';

// import all modules
import {
  Head,
  Container,
  MessageField,
  ChatBubble,
} from '../components';
import { IMessage } from '../interfaces';

export const ChatRoom: React.FC = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    message: '',
  });
  const messages: IMessage[] = useSelector((current: any) => current.messages.messages);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((currentState) => ({
      ...currentState,
      message: e.target.value,
    }));
  };

  const handleSubmit = () => {
    navigate('/join');
  };

  return (
    <HeroChatRoom>
      <Container size={30}>
        <Head title="Chat Room" />
        <HeroChatRoomFlex>
          <HeroChatHeader>
            <HeroChatHeaderCol>
              <ExitText onClick={() => navigate('/join')}>Exit</ExitText>
            </HeroChatHeaderCol>
            <HeroChatHeaderCol>
              <RoomIdText>Mathius</RoomIdText>
            </HeroChatHeaderCol>
          </HeroChatHeader>
          <HeroChatBody isEmpty={messages.length === 0}>
            {messages.length === 0 && <p>Empty Chat</p>}
            {messages.map((item) => (
              <ChatBubble
                key={item._id}
                message={item.message}
                senderName={item.senderName}
                myMessage={item.senderId === '340423'}
              />
            ))}
          </HeroChatBody>
          <HeroChatFooter>
            <MessageField
              type="text"
              placeholder="Message Here..."
              onChange={handleInput}
              onSubmit={handleSubmit}
              value={state.message}
            />
          </HeroChatFooter>
        </HeroChatRoomFlex>
      </Container>
    </HeroChatRoom>
  );
};
