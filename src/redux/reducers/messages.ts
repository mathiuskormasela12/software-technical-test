// ========== Messages
// import all modules
import { IMessageReduxStates } from '../../interfaces';
import { IMessageReduxAction } from '../../interfaces/IMessageReduxAction';

const initialStates: IMessageReduxStates = {
  messages: [],
};

const messagesReducer = (states = initialStates, action: IMessageReduxAction): IMessageReduxStates => {
  switch (action.type) {
    case 'SET_MESSAGES': {
      return {
        ...states,
        messages: action.payload.data.messages,
      };
    }

    case 'ADD_MESSAGES': {
      return {
        ...states,
        messages: [
          ...action.payload.data.messages,
          ...states.messages,
        ],
      };
    }

    default: {
      return {
        ...states,
      };
    }
  }
};

export default messagesReducer;
