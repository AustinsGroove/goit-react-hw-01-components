import { clsx } from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ name, isOnline, avatar }) => {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={clsx(css.status, css[`is-online`])}></span>
      ) : (
        <span className={clsx(css.status, css[`is-offline`])}></span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
