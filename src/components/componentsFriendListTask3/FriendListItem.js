import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export function FriendListItem({ friend }) {
  return (
    <li key={friend.id} className={css.item}>
      <span
        className={`${css.status} ${
          friend.isOnline ? css.online : css.offline
        }`}
      >
        {friend.isOnline}
      </span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
