import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import Styles from './App.module.css';

class App extends Component {
    render() { 
        return (
            <div>
                <Cards/>
                <CountryPicker/>
                <Chart/>
            </div>
          );
    }
}
 
export default App;
