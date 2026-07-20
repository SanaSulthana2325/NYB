function Notification() {

  const notifications = [];

  return (

    <div>

      {
        notifications.length > 0
          ? notifications.map((notification, index) =>
              <p key={index}>{notification}</p>
            )
          : <h2>No Notifications</h2>
      }

    </div>

  );

}

export default Notification;