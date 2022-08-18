import css from './Feedback.module.css';
import propTypes from 'prop-types';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  console.log(typeof options);
  return (
    <div>
      {Object.keys(options).map(option => {
        return (
          <button
            key={option}
            className={css.btn}
            onClick={() => onLeaveFeedback(option)}
            name={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.func,
  options: propTypes.object
};