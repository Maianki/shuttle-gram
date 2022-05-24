export const feedData = (posts, followUsers, currentUser) => {
  return posts.filter(
    (post) =>
      post.username === currentUser ||
      followUsers.some((user) => user.username === post.username)
  );
};
