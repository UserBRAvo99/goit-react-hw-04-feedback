import React from 'react';
import { useState } from 'react';

import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from 'components/Notification';

import scss from '../Feedback/feedback.module.scss';

export default function FeedbackHook() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const mapState = {
  //   good: setGood,
  //   neutral: setNeutral,
  //   bad: setBad,
  // };

  const handleBtnClick = event => {
    // const { value, name } = event.target;

    const { name } = event.target;

    // if (name === 'good') {
    //   setGood(state => state + 1);
    // } else if (name === 'neutral') {
    //   setNeutral(state => state + 1);
    // } else if (name === 'bad') {
    //   setBad(state => state + 1);
    // }

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
    // mapState[name](prevState => prevState + 1);
  };

  const options = ['good', 'neutral', 'bad'];

  return (
    <div className={scss.wrapper}>
      <h2 className={scss.title}>Please leave feedback</h2>
      <div className={scss.wrapperBtn}>
        <FeedbackOptions options={options} onLeaveFeedback={handleBtnClick} />
      </div>
      <h2 className={scss.title}>Statistics</h2>

      {good || neutral || bad ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={good + neutral + bad}
        />
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
}
