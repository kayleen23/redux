import React, { useState, useEffect } from 'react'
import LogItem from './Logitem';
import Preloader from '../layout/preloader';
import { GET_LOGS, SET_LOADING, LOGS_ERROR } from '../actions/types';

const initailState = {
    logs: null,
    current: null,
    loading: false,
    error: null,

};

export default (state = initailState, action) =>{
    switch (action.type) {
        case GET_LOGS:
            return (action.type) {
            ...state,
            logs: action.payload,
            loading: false
    };
    case ADD_LOG:
        return {
            ...state,
            logs [...state, logs, action.payload]
        }
    case SET_LOADING:
        return {
            ...state,
            loading: true
        };

        case LOGS_ERROR:
            console.error(action.payload)
            return {
                ...state
            }

}

 const Logs = () => {
     const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs();
    }, []);
    //eslint-disable-next-line

    const getLogs =  async () => {
        setLoading(true);
        const res = await fetch('/logs');
        const data = await res.json();

        setLogs(data);
        setLoading(false);
    }

    if(loading){
        return  <Preloader/>
    }

    return (
       <ul className="collection-with-header">
           <li className="collection-header">
               <h4 className="center">System Logs</h4>
           </li>
           {!loading && logs.length === 0 ? (<p className="center">No logs to show...</p>) : (
               logs.map (log => <logItem log={log} key={log.id}/>)
           )}
       </ul>
    )
}

export default Logs
