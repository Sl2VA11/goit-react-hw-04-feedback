import css from './Feedback.module.css';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
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

