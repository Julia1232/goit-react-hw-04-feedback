import React, { Component } from 'react';
import css from './Feedback.module.css';
import FeedbackButton from 'components/FeedbackButton/FeedbackButton';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const result = this.state.bad + this.state.good + this.state.neutral;
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
    const positive = (100 * this.state.good) / result;
    return positive;
  };

  render() {
    const objKey = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const { good, neutral, bad } = this.state;

    return (
      <div className={css.FeedbackForm}>
        <Section
          className={css.FeedbackForm__title}
          title="Please leave feedback"
        >
          <FeedbackButton options={objKey} onIncrement={this.handleIncrement} />
        </Section>
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statisticsk">
            <Statistics
              className={css.Feedback__value}
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiRound={positivePercentage}
            />
          </Section>
        )}
      </div>
    );
  }
}
