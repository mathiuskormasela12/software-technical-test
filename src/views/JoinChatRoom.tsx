// ========== JoinChatRoom
// import all modules
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Control,
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

export const JoinChatRoom: React.FC = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: '',
    roomId: '',
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setState((currentState) => ({
      ...currentState,
      [name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <JoinChatRoomHero>
      <Head title="Chat Room" />
      <Container size={80}>
        <HeroFlex>
          <Header>
            <Title>Join Chat Room</Title>
          </Header>
          <Form onSubmit={handleSubmit}>
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
                <Button type="submit">
                  Join
                </Button>
              </FormSection>
            </FormRow>
          </Form>
        </HeroFlex>
      </Container>
    </JoinChatRoomHero>
  );
};
