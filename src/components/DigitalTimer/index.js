import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: parseInt(25),
      isTimeRunning: false,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(this.myTimer, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  changeStartPause = () => {
    this.setState(prevState => {
      const {isTimeRunning} = prevState
      return {
        isTimeRunning: !isTimeRunning,
      }
    })
  }

  const playPause= isTimeRunning? "https://assets.ccbp.in/frontend/react-js/pause-icon-img.png ":"https://assets.ccbp.in/frontend/react-js/play-icon-img.png"

  const altText= isTimeRunning? "play icon":"pause icon"

  const heading=isTimeRunning?"Start":"Pause"

  myTimer = () => {
    this.setState(prevState => {
      const {time} = prevState
      return {
        time: time - 1,
      }
    })
  }

  increaseTime = () => {
    this.setState(prevState => ({time: prevState.time + parseInt(1)}))
  }

  decreaseTime = () => {
    this.setState(prevState => ({time: prevState.time - parseInt(1)}))
  }

  inputValue = event => {
    this.setState({time: event.target.value})
  }

  render() {
    const {time} = this.state
    return (
      <div className="the-page">
        <h1 className="heading">Digital Timer</h1>
        <div className="second-portion">
          <div className="time-image">
            <div className="white-circle">
              <p className="date-show">{time.getMinute()}</p>
            </div>
          </div>
          <div className="second-right-portion">
            <div className="start-pause">
              <button type="button">
                <img src={playPause} alt={altText} onClick={this.componentDidMount} />
              </button>
              <p className="image-text">{heading}</p>

              <button type="button">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="reset-setting"
                />
              </button>
              <p className="image-text">Reset</p>
            </div>
            <p className="set-timer-limit">Set Timer limit</p>
            <div className="right-bottom">
              <p className="minus" onClick={this.decreaseTime}>
                -
              </p>
              <input
                type="text"
                onChange={this.inputValue}
                className="input-setting"
                value={time}
              />
              <p className="plus" onClick={this.increaseTime}>
                +
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
