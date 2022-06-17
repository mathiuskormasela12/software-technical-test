// ========== Redux Action
// import all modules
import { IAuthReduxAction, IMessage } from '../interfaces';
import { IMessageReduxAction } from '../interfaces/IMessageReduxAction';

// eslint-disable-next-line no-unused-vars
export type SetTokenFunc = (accessToken: string, refreshToken: string) => IAuthReduxAction

// eslint-disable-next-line no-unused-vars
export type SetMessagesFunc = (messages: IMessage[]) => IMessageReduxAction
