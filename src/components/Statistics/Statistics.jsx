import css from './Statistics.module.css';

const Statistics = props => {
  return (
    <section className={css.statistics}>
      {props.title && <h2 className={css.title}>{props.title}</h2>}

      <ul className={css[`stat-list`]}>
        {props.stats.map(({ id, label, percentage }) => (
          <li
            className={css.item}
            key={id}
            style={{ backgroundColor: getDarkColor() }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function getDarkColor() {
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
}

export default Statistics;
