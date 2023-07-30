import PropTypes from 'prop-types';
import Style from './Statistic.module.css';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul className={Style.feedbackList}>
    <li className={Style.feedbackListItem}>Good: {good}</li>
    <li className={Style.feedbackListItem}>Neutral: {neutral} </li>
    <li className={Style.feedbackListItem}>Bad: {bad} </li>
    <li className={Style.feedbackListItem}>Total: {total} </li>
    <li className={Style.feedbackListPercentage}>
      Positive feedback: {positivePercentage}%{' '}
    </li>
  </ul>
);

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
