import React from 'react';
import './calendar.css'

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: [1, 2, 3, 4, 5],
            selectedDate: null,
            clickCount: 0,
        }
        this.incrementDate = this.incrementDate.bind(this)
        this.decrementDate = this.decrementDate.bind(this)
    }

    componentDidMount() {
        this.setState({
            selectedDate: this.state.dates[0]
        })
    }

    incrementDate() {
        this.setState({
            clickCount: this.state.clickCount + 1,
        })
    }
    decrementDate(){
        this.setState({
            clickCount: this.state.clickCount - 1
        })
    }
    render() {

        return (
            <React.Fragment>
                <div className="dateChangeBtn" onClick={this.decrementDate}> 
                    Previous
                </div>
                <div className="dateDisplay">
                    Date: {this.state.dates[this.state.clickCount]}
                </div>
                <div className="dateChangeBtn"  onClick={this.incrementDate}> 
                    Next
                </div>
            </React.Fragment>
        )
    }
}
export default Calendar