import PropTypes from 'prop-types';
import c from './Feedback.module.css';

export const Feedback = ({ options, onLeaveFeedback }) => (
  <div className={c.feedback}>
    {options.map((option, index) => (
      <button
        key={index}
        onClick={() => onLeaveFeedback(option)}
        className={c.feedbackBtn}
      >
        {option}
      </button>
    ))}
  </div>
);

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
