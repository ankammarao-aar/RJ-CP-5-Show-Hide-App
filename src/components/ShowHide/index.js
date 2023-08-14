// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirst: false, isLast: false}

  first = () => {
    this.setState(prevState => ({isFirst: !prevState.isFirst}))
  }

  last = () => {
    this.setState(prevState => ({isLast: !prevState.isLast}))
  }

  render() {
    const {isFirst, isLast} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-card">
          <div>
            <button className="show" onClick={this.first}>
              Show/Hide Firstname
            </button>
            {isFirst ? <p className="name">Joe</p> : null}
          </div>
          <div>
            <button className="show" onClick={this.last}>
              Show/Hide Lastname
            </button>
            {isLast ? <p className="name">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
