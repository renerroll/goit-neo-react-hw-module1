import classes from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={classes["profile"]}>
      <div className={classes["profile-data"]}>
        <img
          className={classes["profile-image"]}
          src={image}
          alt="User avatar"
        />
        <p className={classes["profile-name"]}>{name}</p>
        <p className={classes["profile-tag"]}>{tag}</p>
        <p className={classes["profile-location"]}>{location}</p>
      </div>
      <ul className={classes["profile-stats"]}>
        {Object.entries(stats).map(([statName, statValue]) => (
          <li className={classes["profile-stats-item"]} key={statName}>
            <span className={classes["profile-stats-item-title"]}>
              {statName}
            </span>
            <span className={classes["profile-stats-item-numbers"]}>
              {statValue}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;