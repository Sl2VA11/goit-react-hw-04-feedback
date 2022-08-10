import {  useState } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from '../Section/Section';

export function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = {
    good: 'good',
    neutral: 'neutral',
    bad: 'bad',
  };

  const handleIncrement = nameBtn => {
    switch (nameBtn) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const handleDecrement = nameBtn => {
    switch (nameBtn) {
      case 'good':
        setGood(good - 1);
        break;
      case 'neutral':
        setNeutral(neutral - 1);
        break;
      case 'bad':
        setBad(bad - 1);
        break;

      default:
        return;
    }
  };
 
  
  return (
    <>
      <Section title="Please rate us using the buttons" />
      <Section>
        <FeedbackOptions onLeaveFeedback={handleIncrement} options={options} />
      </Section>
      <Section>
        {good || bad || neutral !== 0 ? (
          <Statistics
            options={options}
            good={good}
            neutral={neutral}
            bad={bad}
            onLeaveFeedbackDecrement={handleDecrement}
          />
        ) : (
          'No feedback'
        )}
      </Section>
    </>
  );
}
