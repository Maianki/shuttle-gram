import axios from "axios";

import { USERS_API, BOOKMARKS_API, FOLLOW_API, UNFOLLOW_API } from "utils";

/**
 * Service to get all users
 */

export const getAllUsersService = async () => {
  const response = await axios.get(USERS_API);
  return response;
};

/**
 * Service to get a particular user from the db
 */

export const getSingleUserService = async (userId) => {
  const response = await axios.get(`${USERS_API}/userId`);
  return response;
};

/**
 * Service to edit details of a particular user
 */

export const editUserService = async (token, userData) => {
  const response = await axios.post(
    `${USERS_API}/edit`,
    {
      userData,
    },
    {
      headers: { authorization: token },
    }
  );
  return response;
};

/**
 * Service to get add a user to follow list
 */

export const addUserToFollowService = async (token, followedUserId) => {
  const response = await axios.post(
    `${FOLLOW_API}/${followedUserId}`,
    {},
    {
      headers: { authorization: token },
    }
  );

  return response;
};

/**
 * Service to remove user from a follow list
 */

export const removeFromFollowService = async (token, followedUserId) => {
  const response = await axios.post(
    `${UNFOLLOW_API}/${followedUserId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
  return response;
};

/**
 * Service to get all bookmarks of the users
 */

export const getAllBookmarksService = async (token) => {
  const response = axios.get(`${BOOKMARKS_API}`, {
    headers: { authorization: token },
  });
  return response;
};

/**
 * Service to add post to bookmarks
 */

export const addToBookmarksService = async (token, postId) => {
  const response = await axios.post(
    `${BOOKMARKS_API}/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
  return response;
};

/**
 * Service to remove post from bookmarks
 */
export const removeFromBookmarksService = async (token, postId) => {
  const response = await axios.delete(
    `${USERS_API}/remove-bookmark/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
  return response;
};
