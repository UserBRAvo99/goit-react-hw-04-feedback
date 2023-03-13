import React, { useEffect } from 'react';
import { useState } from 'react';

import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from 'components/Notification';

import scss from '../Feedback/feedback.module.scss';

export default function FeedbackHook() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleBtnClick = event => {
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
  };

  useEffect(() => {
    totalFeedback(Number(good), Number(neutral), Number(bad));
  }, [good, neutral, bad]);

  const totalFeedback = (a, b, c) => {
    setTotal(state => a + b + c);
  };

  const countPositiveFeedbackPercentage = (a, b) => {
    return `${Math.round((a * 100) / b)}%`;
  };

  const options = ['good', 'neutral', 'bad'];

  return (
    <div className={scss.wrapper}>
      <h2 className={scss.title}>Please leave feedback</h2>
      <div className={scss.wrapperBtn}>
        <FeedbackOptions options={options} onLeaveFeedback={handleBtnClick} />
      </div>
      <h2 className={scss.title}>Statistics</h2>

      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positiveFeedback={countPositiveFeedbackPercentage(good, total)}
        />
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
}

// class Feedback extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   eventBtn = event => {
//     const { name } = event.target;
//     this.setState(prevState => {
//       return {
//         [name]: prevState[name] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     return this.state.bad + this.state.neutral + this.state.good;
//   };
//   countPositiveFeedbackPercentage = () => {
//     return `${Math.round(
//       (this.state.good * 100) / this.countTotalFeedback()
//     )}%`;
//   };

//   render() {
//     const total = this.countTotalFeedback();
//     const positiveFeedback = this.countPositiveFeedbackPercentage();
//     const options = Object.keys(this.state);
//     return (
//       <div className={scss.wrapper}>
//         <h2 className={scss.title}>Please leave feedback</h2>
//         <div className={scss.wrapperBtn}>
//           <FeedbackOptions options={options} onLeaveFeedback={this.eventBtn} />
//         </div>
//         <h2 className={scss.title}>Statistics</h2>

//         {total > 0 ? (
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={total}
//             positiveFeedback={positiveFeedback}
//           />
//         ) : (
//           <Notification message="There is no feedback"></Notification>
//         )}
//       </div>
//     );
//   }
// }

// export default Feedback;
