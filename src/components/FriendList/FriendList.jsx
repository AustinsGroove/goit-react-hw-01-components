import css from './FriendList.module.css';
import { clsx } from 'clsx';

const FriendList = ({ friends }) => {
  return (
    <ul className={css[`friend-list`]}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={css.item} key={id}>
          {isOnline ? (
            <span className={clsx(css.status, css[`is-online`])}></span>
          ) : (
            <span className={clsx(css.status, css[`is-offline`])}></span>
          )}
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
