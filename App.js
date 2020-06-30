import React, { Fragments, useEffect} from 'react';
import search from './components/search';
import search from './components/logs/Logs';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
    useEffect (() => {
        //init materialize JS
        M.AutoInit();
    }
    );
    return <Fragments>
      <Searchbar />
      <div className='container'>
          <AddBtn />
          <logs />
      </div>
    </Fragments>;
      
    
}

export default App;