// ========== Services
// import all modules
import http from './http';
import {
  ICreateAccessTokenBody,
  IExitRoomParams,
  IGetAllMessagesParam,
  IJoinBody,
  ISendMessageBody,
} from '../interfaces';

class Service {
  public static joinRoom(data: IJoinBody) {
    return http().post('/users/join', data);
  }

  public static exitRoom(data: IExitRoomParams) {
    return http().put(`/users/exit/${data.id}/${data.roomId}`);
  }

  public static createAccessToken(data: ICreateAccessTokenBody) {
    return http().post('/users/access-token', data);
  }

  public static sendMessage(data: ISendMessageBody) {
    return http().post('/messages', data);
  }

  public static getAllMessages(data: IGetAllMessagesParam) {
    return http().get(`/messages/${data.activeRoomId}`);
  }
}

export default Service;
