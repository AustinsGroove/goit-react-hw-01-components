import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css[`friend-list`]}>
      {friends.map(({ id, name, isOnline, avatar }) => {
        return (
          <FriendListItem
            key={id}
            name={name}
            isOnline={isOnline}
            avatar={avatar}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;
