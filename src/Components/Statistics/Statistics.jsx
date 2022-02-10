import PropTypes from "prop-types";
import style from "./Statistics.module.css";

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  onResetStats,
}) => {
  return (
    <div className={style.Statistics}>
      <p className={style.item}>Good: {good}</p>
      <p className={style.item}>Neutral: {neutral}</p>
      <p className={style.item}>Bad: {bad}</p>
      <p className={style.item}>Total: {total()}</p>
      <p className={style.item}>Positive feedback: {positivePercentage()} %</p>
      <button
        className={style.button}
        type="button"
        onClick={() => onResetStats()}
      >
        Reset statistics
      </button>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
  onResetStats: PropTypes.func.isRequired,
};
export default Statistics;
