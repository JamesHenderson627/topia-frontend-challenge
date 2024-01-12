export default function listUsersInView(
  users,
  positionX,
  positionY,
  screenWidth,
  screenHeight
) {
  let usersInView = [];

  // WRITE SOLUTION BELOW. ADD USERNAME AND IS_BROADCASTER TO 'usersInView' IF USER FALLS INTO VISIBLE RANGE

  usersInView = Object.values(users)
    .map((user) => {
      const distanceFromCenter = Math.floor(
        Math.sqrt((user.x - positionX) ** 2 + (user.y - positionY) ** 2)
      );
      user.is_broadcaster = false;
      const isInsideViewport =
        distanceFromCenter <= screenWidth / 2 ||
        distanceFromCenter <= screenHeight / 2;
      return {
        ...user,
        distanceFromCenter,
        is_broadcaster: isInsideViewport
      };
    })
    .filter((user) => user.is_broadcaster);

  // END SOLUTION SECTION

  return usersInView;
}
