import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return (
    <div>
      <span>
        <b>{message}</b>
      </span>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
