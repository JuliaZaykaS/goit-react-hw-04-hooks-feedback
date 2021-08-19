import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positiveFeedback,
}) {
  return (
    <ul className={s.statisticList}>
      <StatisticItem label={'Good'} value={good} />
      <StatisticItem label={'Neutral'} value={neutral} />
      <StatisticItem label={'Bad'} value={bad} />
      <StatisticItem label={'Total'} value={total} />
      <StatisticItem label={'Positive feedback'} value={positiveFeedback} />
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.string.isRequired,
};
