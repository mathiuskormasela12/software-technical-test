// ========== IMessageReduxAction
// import all modules
import { MessageReduxTypes } from '../types';
import { IMessage } from './IMessage';

export interface IMessageReduxAction {
	type: MessageReduxTypes,
	payload: {
		data: {
			messages: IMessage[];
		}
	}
}
