import React from 'react';

import scss from './statistics.module.scss';

function Statistics({ good, neutral, bad }) {
  let total = good + neutral + bad;

  const countPositiveFeedbackPercentage = (good, total) => {
    return `${Math.round((good * 100) / total)}%`;
  };
  return (
    <ul className={scss.list}>
      <li className={scss.item}>
        <p className={scss.title}>Good</p>
        <span>{good}</span>
      </li>
      <li className={scss.item}>
        <p className={scss.title}>Neutral</p>
        <span>{neutral}</span>
      </li>
      <li className={scss.item}>
        <p className={scss.title}>Bad</p>
        <span>{bad}</span>
      </li>
      <li className={scss.item}>
        <p className={scss.title}>Total</p>
        <span>{total}</span>
      </li>
      <li className={scss.item}>
        <p className={scss.title}>Positive feedback</p>
        <span>{countPositiveFeedbackPercentage(good, total)}</span>
      </li>
    </ul>
  );
}

export default Statistics;
