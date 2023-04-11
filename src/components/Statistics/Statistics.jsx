import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  function backColorItem(stats, ind) {
    if (stats[ind].percentage < 15) {
      return 'red';
    } else if (stats[ind].percentage > 15 && stats[ind].percentage < 30) {
      return '#F07427';
    } else if (stats[ind].percentage > 30 && stats[ind].percentage < 50) {
      return 'blue';
    } else {
      return 'green';
    }
  }

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        <li
          className={css.item}
          style={{ backgroundColor: backColorItem(stats, 0) }}
        >
          <span className={css.label}>{stats[0].label}</span>
          <span className={css.percentage}>{stats[0].percentage}%</span>
        </li>
        <li
          className={css.item}
          style={{ backgroundColor: backColorItem(stats, 1) }}
        >
          <span className={css.label}>{stats[1].label}</span>
          <span className={css.percentage}>{stats[1].percentage}%</span>
        </li>
        <li
          className={css.item}
          style={{ backgroundColor: backColorItem(stats, 2) }}
        >
          <span className={css.label}>{stats[2].label}</span>
          <span className={css.percentage}>{stats[2].percentage}%</span>
        </li>
        <li
          className={css.item}
          style={{ backgroundColor: backColorItem(stats, 3) }}
        >
          <span className={css.label}>{stats[3].label}</span>
          <span className={css.percentage}>{stats[3].percentage}%</span>
        </li>
      </ul>
    </section>
  );
};

Statistics.protTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
