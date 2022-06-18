// ========== JoinChatRoom
// import all modules
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
import Service from '../service';
import { setMessages } from '../redux/actions/messages';
import { setToken } from '../redux/actions/auth';

// import all components
import { Container, Head } from '../components';

export const JoinChatRoom: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken: string = useSelector((currentState: any) => (currentState.auth.accessToken));
  const refreshToken: string = useSelector((currentState: any) => (currentState.auth.refreshToken));

  const [state, setState] = useState({
    username: '',
    roomId: '',
    loading: false,
    errorMessage: '',
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setState((currentState) => ({
      ...currentState,
      [name]: e.target.value,
    }));
  };

  const getAllMessages = async (activeRoomId: string) => {
    try {
      const { data } = await Service.getAllMessages({
        activeRoomId,
      });
      dispatch(setMessages(data && data.results ? data.results : []));
      setState((current) => ({
        ...current,
        loading: true,
      }));
      navigate('/', {
        state: {
          activeRoomId,
          roomId: state.roomId,
        },
      });
    } catch (err: any) {
      setState((current) => ({
        ...current,
        loading: false,
        errorMessage: err.message,
      }));
      dispatch(setMessages([]));
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setState((current) => ({
      ...current,
      loading: true,
    }));
    if (state.username === '' || state.roomId === '') {
      setState((current) => ({
        ...current,
        loading: false,
        errorMessage: 'Username or room id is required',
      }));
    } else {
      setState((current) => ({
        ...current,
        loading: false,
      }));

      try {
        const { data } = await Service.joinRoom({
          username: state.username,
          roomId: state.roomId,
        });
        dispatch(setToken(data.results.accessToken, data.results.refreshToken));

        if (data.success) {
          getAllMessages(data.results.roomId);
          setState((current) => ({
            ...current,
            loading: false,
            errorMessage: '',
          }));
        }
      } catch (err: any) {
        setState((current) => ({
          ...current,
          loading: false,
          errorMessage: err
					&& err.response
					&& err.response.data
					&& err.response.data.message
            ? err.response.data.message
            : err && err.message
              ? err.message
              : 'Server Error',
        }));
        dispatch(setToken('', ''));
      }
    }
  };

  useEffect(() => {

  }, [accessToken, refreshToken]);

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
                {state.errorMessage !== '' && <ErrorMessage>{state.errorMessage}</ErrorMessage>}
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
