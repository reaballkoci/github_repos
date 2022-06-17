import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ListUsers } from './pages/ListUsers/indes';
import store from './store';
import React from 'react';
import SingleUser from './pages/SingleUser';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<ListUsers />} />
        <Route path='/user/:id' element={<SingleUser />} />
      </Routes>
    </Provider>
  );
};

export default App;
