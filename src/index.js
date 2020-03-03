import React from 'react';
import ReactDOM from 'react-dom';

// Components
import MapContainer from './components/map/map_container';
import List from './components/list/list';
import Toolbar from './components/toolbar/toolbar';

// CSS
import './css/base.css';
import './css/list.css';
import './css/map.css';
import './css/toolbar.css';

//Context
import ListContextProvider from './contexts/ListContext';

class App extends React.Component {
      render() {
            return(
                  <div className="app">
                        <ListContextProvider>
                              <Toolbar />
                              <MapContainer />
                              <List/>
                        </ListContextProvider>
                  </div>
            );
      }
}

ReactDOM.render(<App/>, document.getElementById('root'));