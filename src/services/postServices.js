import { POSTS_API, LIKES_API, DISLIKES_API, COMMENTS_API } from "utils";
import axios from "axios";

/**
 * Service to return all posts of single users
 */
export const getAllPostsOfSingleUserService = async (username) => {
  const response = await axios.get(`${POSTS_API}/user/${username}`);
  return response;
};

/**
 * Service to return all posts
 */
 export const getPostsService = async () => {
  const response = await axios.get(POSTS_API);
  return response;
};

/**
 * Service to return  particular post
 */
export const getSinglePostService = async (postId) => {
  const response = await axios.get(`${POSTS_API}/:${postId}`);
  return response;
};

/**
 * Service to create a post
 */

export const createPostService = async (token, content) => {
  const response = await axios.post(
    POSTS_API,
    { postData: content },
    { headers: { authorization: token } }
  );
  return response;
};

/**
 * Service to delete a post
 */

export const deletePostService = async (token, postId) => {
  const response = await axios.delete(`${POSTS_API}/${postId}`, {
    headers: { authorization: token },
  });
  return response;
};

/**
 * Service to edit the post
 */

export const editPostService = async (token, postId, content) => {
  const response = await axios.post(
    `${POSTS_API}/edit/${postId}`,
    {
      postData: { content },
    },
    {
      headers: { authorization: token },
    }
  );
  return response;
};

/**
 * Service to like a particular post
 */

export const likePostService = async (token, postId) => {
  const response = await axios.post(
    `${LIKES_API}/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
  return response;
};

/**
 * Service to dislike a particular post
 */

export const dislikePostService = async (token, postId) => {
  const response = await axios.post(
    `${DISLIKES_API}/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
  return response;
};

/**
 * Service to get gets all the comments for a particular posts
 */

export const getAllCommentService = async (postId) => {
  const response = await axios.get(`${COMMENTS_API}/${postId}`);
  return response;
};

/**
 * Service to add a comment to a particualar post.
 */

export const addCommentsService = async (token, postId, commentData) => {
  const response = await axios.post(
    `${COMMENTS_API}/add/${postId}`,
    {
      commentData,
    },
    {
      headers: { authorization: token },
    }
  );

  return response;
};

/**
 * Service to edit a comment of a particualar post.
 */

export const editCommentsService = async (
  token,
  postId,
  commentId,
  commentData
) => {
  const response = await axios.post(
    `${COMMENTS_API}/edit/${postId}/${commentId}`,
    {
      commentData,
    },
    {
      headers: { authorization: token },
    }
  );
  return response;
};

/**
 * Service to delete a comment from a particular post.
 */

export const deleteCommentService = async (
  token,
  postId,
  commentId,
  commentData
) => {
  const response = await axios.delete(
    `${COMMENTS_API}/delete/${postId}/${commentId}`,
    {
      headers: { authorization: token },
    }
  );
  return response;
};
