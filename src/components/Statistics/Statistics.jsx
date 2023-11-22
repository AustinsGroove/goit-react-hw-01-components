const Statistics = props => {
  return (
    <section className="statistics">
      {props.title && <h2 className="title">{props.title}</h2>}

      <ul className="stat-list">
        {props.stats.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
