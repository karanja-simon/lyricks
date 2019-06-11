import React from 'react';
import { Provider } from 'react-redux';
import Player from './containers/player';
import Lyrics from './containers/lyrics';
import { lyrics } from './shared/data/lyrics';
import store from './store';

function App() {

  return (
    <Provider store={store}>
      <div className="content">
        <Lyrics lyrics={lyrics} />
        <div id="footer">
        <Player lyrics={lyrics} />         
        </div>
      </div>
    </Provider>
  );
}

export default App;
