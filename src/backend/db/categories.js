import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Travelling",
  },
  {
    _id: uuid(),
    categoryName: "Technical",
  },
  {
    _id: uuid(),
    categoryName: "Learning",
  },
  {
    _id: uuid(),
    categoryName: "Career",
  },
  {
    _id: uuid(),
    categoryName: "Wildlife",
  },
];
