export const filteredFeedData = (filterBy, feedPosts) => {
  switch (filterBy) {
    case "trending":
      return [...feedPosts]
        .filter((post) => post.likes.likeCount > 0)
        .sort((a, b) => b.likes.likeCount - a.likes.likeCount);
    case "oldest":
      return [...feedPosts].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    case "recent":
      return [...feedPosts].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    default:
      return [...feedPosts];
  }
};
