// ========== App
// import all modules
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import persistedStore from './redux/store';
import Root from './Root';
import { GlobalStyles } from './styles';

// import all views
import { JoinChatRoom } from './views/JoinChatRoom';
import { ChatRoom } from './views/ChatRoom';
import PrivateRoute from './PrivateRoute';

const App: React.FC = () => {
  const { store, persistor } = persistedStore;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Root>
          <BrowserRouter>
            <Routes>
              <Route path="/join" element={<JoinChatRoom />} />
              <Route
                path="/"
                element={(
                  <PrivateRoute>
                    <ChatRoom />
                  </PrivateRoute>
							)}
              />
            </Routes>
          </BrowserRouter>
          <GlobalStyles />
        </Root>
      </PersistGate>
    </Provider>
  );
};

export default App;
