import classes from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={classes["friend-item"]}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={classes["friend-name"]}>{name}</p>
      <p className={classes[isOnline ? "online" : "offline"]}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendListItem;