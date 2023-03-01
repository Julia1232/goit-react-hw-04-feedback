import React from 'react'
import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export default function Statistics({good, neutral, bad, total, positiRound }) {
  return (
    <div className={css.statisticsName}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positiRound.toFixed(1)} %</p>
    </div>
  )
}
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total:PropTypes.func,
  positiRound: PropTypes.func,
};
