import React from 'react';
import Menu from './menu/Menu';
import Body from './body/Body';

class App extends React.Component {

    render() {
        return (
            <div className="row col-lg-12 col-md-12">
                <div className="col-lg-3 col-md-3">
                    <Menu></Menu>
                </div>
                <div className="col-lg-9 col-md-9">
                    <Body ></Body>
                </div>


            </div>
        )
    }
}
export default App