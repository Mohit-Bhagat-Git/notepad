import React from 'react';
import BrowserRouter from 'react-router-dom'
import Calendar from './Calendar';

class Body extends React.Component{
    render(){
        return(
            <div>
                <Calendar></Calendar>
            </div>
        )
    }
}

export default Body;