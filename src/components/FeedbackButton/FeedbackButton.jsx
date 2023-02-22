import React from 'react'
import shortid from 'shortid'
import PropTypes from 'prop-types'
import css from './FeedbackButton.module.css'

const FeedbackButton = ({ options, onIncrement }) => {
    return (
        <>
            {options.map((option) => (
                <button key={shortid.generate()} type="button" name={option} onClick={onIncrement} className={css.FeedbackButton}>
                    {option}
                </button>
            ))}
        </>
    )
};
FeedbackButton.propTypes = {
    options: PropTypes.array.isRequired,
    onIncrement: PropTypes.func.isRequired,
}
export default FeedbackButton;
