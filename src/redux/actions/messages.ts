// ========== Message Actions
// import all modules
import { IMessage } from '../../interfaces';
import { SetMessagesFunc } from '../../types';

export const setMessages: SetMessagesFunc = (messages: IMessage[]) => ({
  type: 'SET_MESSAGES',
  payload: {
    data: {
      messages,
    },
  },
});
