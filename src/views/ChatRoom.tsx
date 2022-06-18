// ========== ChatRoom
// import all modules
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
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
import Service from '../service';
import { IMessage } from '../interfaces';
import { setToken } from '../redux/actions/auth';
import { addMessages, setMessages } from '../redux/actions/messages';

// import all modules
import {
  Head,
  Container,
  MessageField,
  ChatBubble,
} from '../components';

export const ChatRoom: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bottom = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({
    message: '',
    fetchMessages: false,
    refresh: false,
  });
  const messages: IMessage[] = useSelector((current: any) => current.messages.messages);
  const accessToken: string = useSelector((current: any) => current.auth.accessToken);
  const userData: any = jwtDecode(accessToken);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((currentState) => ({
      ...currentState,
      message: e.target.value,
    }));
  };

  const handleLogout = async () => {
    if (userData.id && userData.roomId) {
      try {
        await Service.exitRoom({
          roomId: userData.roomId,
          id: userData.id,
        });
        dispatch(setToken('', ''));
        dispatch(setMessages([]));
        navigate('/join');
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.log(err.message);
      }
    }
  };

  const scrollToBottom = () => {
    bottom.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (state.message !== '' && userData.roomId && userData.id) {
      try {
        const { data } = await Service.sendMessage({
          message: state.message,
          activeRoomId: userData.roomId,
          senderId: userData.id,
        });
        dispatch(addMessages(data && data.results ? [data.results] : []));
        setState((current) => ({
          ...current,
          message: '',
        }));
        scrollToBottom();
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.log(err.message);
      }
    }
  };

  const getAllMessages = async () => {
    try {
      const { data } = await Service.getAllMessages({
        activeRoomId: userData.roomId,
      });
      dispatch(setMessages(data && data.results ? data.results : []));
      setState((current) => ({
        ...current,
        loading: true,
        refresh: !current.refresh,
      }));
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.log(err);
      dispatch(setMessages([]));
    }
  };

  useEffect(() => {
    if (messages.length < 1) {
      getAllMessages();
      scrollToBottom();
    }
  }, []);

  useEffect(() => {
    getAllMessages();
    scrollToBottom();
  }, [state.refresh]);

  return (
    <HeroChatRoom>
      <Container size={30}>
        <Head title="Chat Room" />
        <HeroChatRoomFlex>
          <HeroChatHeader>
            <HeroChatHeaderCol>
              <ExitText onClick={handleLogout}>Exit</ExitText>
            </HeroChatHeaderCol>
            <HeroChatHeaderCol>
              <RoomIdText>{userData.roomName}</RoomIdText>
            </HeroChatHeaderCol>
          </HeroChatHeader>
          <HeroChatBody isEmpty={messages.length === 0}>
            {messages.length === 0 && <p>Empty Chat</p>}
            {messages.map((item) => (
              <div style={{
                marginBottom: 20,
              }}
              >
                <ChatBubble
                  key={item._id}
                  message={item.message}
                  senderName={item.senderName}
                  myMessage={item.senderId === userData.id}
                />
                <div
                  ref={bottom}
                />
              </div>
            ))}
          </HeroChatBody>
          <HeroChatFooter>
            <MessageField
              type="text"
              placeholder="Message Here..."
              onChange={handleInput}
              onSubmit={handleSendMessage}
              value={state.message}
            />
          </HeroChatFooter>
        </HeroChatRoomFlex>
      </Container>
    </HeroChatRoom>
  );
};
