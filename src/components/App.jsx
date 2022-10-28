import { Component } from 'react';
import {Section} from './Section/Section';
import {Statistics} from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification'
import css from './App.module.css'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  response = e => {
    this.setState(state => ({
      [e.target.name]: state[e.target.name] + 1,
    }));
  };
  
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => {
      return total + value;
    }, 0);  
  };

  countPositiveFeedbackPercentage = () => {
    return (Math.round((this.state.good / this.countTotalFeedback()) * 100));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
   
    return (
      <div className={css.reviews}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.response} />
          {this.countTotalFeedback() !== 0
          ? (<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          />)
            : (<Notification message="There is no feedback"/>) }
        </Section>
      </div>
    )
  };
};

export default App;