// ========== Root
// import all modules
import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import socket from './helpers/socket';
import { IRootProps } from './interfaces';
import Service from './service';
import { setMessages } from './redux/actions/messages';

const Root: React.FC<IRootProps> = ({ children }) => {
  const dispatch = useDispatch();

  const getAllMessages = async (id: string) => {
    try {
      const { data } = await Service.getAllMessages({
        activeRoomId: id,
      });
      dispatch(setMessages(data && data.results ? data.results : []));
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.log(err);
      dispatch(setMessages([]));
    }
  };

  useEffect(() => {
    socket.onAny(() => {
      socket.once('SEND_MESSAGE', (id: string) => {
        getAllMessages(id);
      });
    });
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};

export default Root;
