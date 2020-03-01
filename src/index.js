import React from 'react';
import ReactDOM from 'react-dom';

// Map component
import TestMap from './components/map/map_test';

// Style Sheets
import './index.css'

class App extends React.Component {
      render() {
            return(
                  <div id="content_area">
                        <TestMap></TestMap>
                  </div>
            );
      }
}

ReactDOM.render(<App/>, document.getElementById('root'));