// ========== Socket
// import all modules
import { io } from 'socket.io-client';

const { REACT_APP_APP_URL } = process.env;

const socket = io(String(REACT_APP_APP_URL));

export default socket;
