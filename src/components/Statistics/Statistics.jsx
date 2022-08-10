import css from '../feedback/Feedback.module.css';

import propTypes from 'prop-types';
export default function Statistics({
  options,
  good,
  neutral,
  bad,
  onLeaveFeedbackDecrement,
}) {
  const total = good + neutral + bad;
  const positiveFeedbackProcent = Math.round((good / total) * 100);

  return (
    <div>
      {Object.keys(options).map(option => {
        return (
          <div className={css.feedbackRatingsWrap} key={option}>
            <p className={css.feedbackRatings}>
              {option}:{' '}
              {(option === 'good' ? good : 0) ||
                (option === 'neutral' ? neutral : 0) ||
                (option === 'bad' ? bad : 0)}
            </p>
            <button
              className={css.btnDecrement}
              onClick={() => onLeaveFeedbackDecrement(option)}
              style={{ backgroundColor: 'orange' }}
            >
              -
            </button>
          </div>
        );
      })}

      <p>Total: {total}</p>
      <p>Positive Feedback: {positiveFeedbackProcent}%</p>
    </div>
  );
}
Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  value: propTypes.number,
};
