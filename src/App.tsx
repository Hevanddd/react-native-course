import React from 'react';

import {Provider} from 'react-redux';
import configureStore from './store';
import Navigation from './Navigation';

export const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
