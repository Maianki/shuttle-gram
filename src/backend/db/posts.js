import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Shuttle Shopy is a great ecommerce app. Amazing services.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Amisha",
    lastName: "Bisht",
    username: "bishtamisha",
    profilePic:
      "https://res.cloudinary.com/dj5aind8q/image/upload/v1653058462/ShuttleGram/Selena_Ada_xlefd7.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "sarah420",
        text: "Will check this one.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "ankit12",
        text: "Looks great.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Ankit",
    lastName: "Kumain",
    username: "ankit12",
    profilePic:
      "https://res.cloudinary.com/dj5aind8q/image/upload/v1653059012/ShuttleGram/IMG_6124_001_t4ypiy.jpg",
    comments: [
      {
        _id: uuid(),
        username: "johnDoe123",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "bishtamisha",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-03-23T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Life is a beautiful journey that is meant to be embraced to the fullest every day. However, that doesn't mean you always wake up ready to seize the day, and sometimes need a reminder that life is a great gift",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "John",
    lastName: "Doe",
    username: "johnDoe123",
    profilePic:
      "https://res.cloudinary.com/dj5aind8q/image/upload/v1653058462/ShuttleGram/John_Doe_x59mkq.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "sarah420",
        text: "Nice",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "ankit12",
        text: "Good one!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Got my first job as a react developer. So happy right now cannot express in words.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "John",
    lastName: "Doe",
    username: "johnDoe123",
    profilePic:
      "https://res.cloudinary.com/dj5aind8q/image/upload/v1653058462/ShuttleGram/John_Doe_x59mkq.jpg",
    createdAt: "2022-01-23T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "sarah420",
        text: "That is great dude",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "ankit12",
        text: "woww",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Grateful of all god for all the things that happened last week.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Sarah",
    lastName: "Pi",
    username: "sarah420",
    profilePic:
      "https://res.cloudinary.com/dj5aind8q/image/upload/v1653058462/ShuttleGram/Sarah_Pi_uq2rae.jpg",
    createdAt: "2022-04-23T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "ankit12",
        text: "Congratulations!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
