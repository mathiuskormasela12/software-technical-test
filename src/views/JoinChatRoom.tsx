// ========== JoinChatRoom
// import all modules
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Button,
  Control,
  ErrorMessage,
  Form,
  FormRow,
  FormSection,
  Header,
  HeroFlex,
  JoinChatRoomHero,
  TextField,
  Title,
} from '../styles';

// import all components
import { Container, Head } from '../components';
import { setMessages } from '../redux/actions/messages';

export const JoinChatRoom: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: '',
    roomId: '',
    loading: false,
    errorMessage: '',
  });

  const getAllMessages = () => {
    if (state.username === '' || state.roomId === '') {
      setState((current) => ({
        ...current,
        errorMessage: 'Username or romo id is required',
      }));
    } else {
      setState((currentState) => ({
        ...currentState,
        loading: true,
      }));

      const data = [
        {
          _id: '39339033',
          senderId: '9409053',
          senderName: 'Mathius',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. ',
        },
        {
          _id: '494942',
          senderId: '340423',
          senderName: 'Yerin',
          message: 'Hello Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
          _id: '3843111',
          senderId: '2383829',
          senderName: 'Yuju',
          message: 'Hello Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
      ];

      dispatch(setMessages(data));

      setTimeout(() => {
        setState((currentState) => ({
          ...currentState,
          loading: false,
        }));
        navigate('/');
      }, 1000);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setState((currentState) => ({
      ...currentState,
      [name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    getAllMessages();
  };

  return (
    <JoinChatRoomHero>
      <Head title="Chat Room" />
      <Container size={80}>
        <HeroFlex>
          <Header>
            <Title>Join Chat Room</Title>
          </Header>
          <Form>
            <FormRow>
              <FormSection flexDirectionColumn>
                <Control>
                  <TextField
                    type="text"
                    placeholder="Username"
                    onChange={(e) => handleInput(e, 'username')}
                    value={state.username}
                  />
                </Control>
                <Control>
                  <TextField
                    type="text"
                    placeholder="Room Id"
                    onChange={(e) => handleInput(e, 'roomId')}
                    value={state.roomId}
                  />
                </Control>
              </FormSection>
              <FormSection>
                {state.errorMessage !== '' && <ErrorMessage>Username or Password is required</ErrorMessage>}
                <Button type="button" onClick={(!state.loading) ? handleSubmit : () => {}}>
                  {state.loading ? 'Loading...' : 'Join'}
                </Button>
              </FormSection>
            </FormRow>
          </Form>
        </HeroFlex>
      </Container>
    </JoinChatRoomHero>
  );
};
