import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    username: "johnDoe123",
    email: "johndoe@gmail.com",
    password: "johnDoe123",
    bio: "I am in every developer's dummy list",
    portfolio: "https://eduma.thimpress.com/demo-react/our_team/john-doe/",
    profilePic:
      "https://res.cloudinary.com/dj5aind8q/image/upload/v1653058462/ShuttleGram/John_Doe_x59mkq.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "balikadarsh",
    email: "adarshbalika@gmail.com",
    password: "balika123",
    bio: "I am a frontend web developer",
    portfolio: "https://adarshbalika.netlify.app/",
    profilePic:
      "https://res.cloudinary.com/dj5aind8q/image/upload/v1653058462/ShuttleGram/Selena_Ada_xlefd7.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sarah",
    lastName: "Pi",
    username: "sarah420",
    email: "sarah@gmail.com",
    password: "sarah420",
    bio: "Building stuff at google",
    portfolio: "https://www.google.com/",
    profilePic:
      "https://res.cloudinary.com/dj5aind8q/image/upload/v1653058462/ShuttleGram/Sarah_Pi_uq2rae.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ankit",
    lastName: "Kumain",
    username: "ankit12",
    email: "ankit@gmail.com",
    password: "ankit123",
    bio: "Building stuff with javascript and reacr",
    portfolio: "https://ankitkumain.netlify.app/",
    profilePic:
      "https://res.cloudinary.com/dj5aind8q/image/upload/v1653059012/ShuttleGram/IMG_6124_001_t4ypiy.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
