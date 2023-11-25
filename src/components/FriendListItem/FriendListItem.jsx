import { clsx } from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ friends }) => {
  return friends.map(({ id, isOnline, avatar, name }) => {
    return (
      <li className={css.item} key={id}>
        {isOnline ? (
          <span className={clsx(css.status, css[`is-online`])}></span>
        ) : (
          <span className={clsx(css.status, css[`is-offline`])}></span>
        )}
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  });
};

export default FriendListItem;