import classes from "./FriendList.module.css";

import FriendListItem from "./FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className={classes["friend-list"]}>
      {friends.map((friend) => (
        <li key={friend.id} className={classes["friend-item"]}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;