import React from 'react';
import css from './Feedback.module.css';
import FeedbackButton from 'components/FeedbackButton/FeedbackButton';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import { useState } from 'react';

export default function Feedback() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleIncrement = e => {
    const name = e.target.name;
    setState(prevState => ({
      ...state,
      [name]: prevState[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const result = state.good + state.neutral + state.bad;
    return result;
  };

  const countPositiveFeedbackPercentage = () => {
    const result = countTotalFeedback();
    const positive = (100 * state.good) / result;
    return positive;
  };

  const objKey = Object.keys(state);
  console.log(112 + objKey);

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={css.FeedbackForm}>
      <Section
        className={css.FeedbackForm__title}
        title="Please leave feedback"
      >
        <FeedbackButton options={objKey} onIncrement={handleIncrement} />
      </Section>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statisticsk">
          <Statistics
            className={css.Feedback__value}
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={total}
            positiRound={positivePercentage}
          />
        </Section>
      )}
    </div>
  );
}
