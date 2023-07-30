import PropTypes from 'prop-types';
import Style from './Notification.module.css';

export const Notification = ({ message }) => (
  <p className={Style.message}>{message}</p>
);

Notification.protoTypes = {
  message: PropTypes.string.isRequired,
};
