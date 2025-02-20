import { IBook } from "../interfaces/IBook";

const books: IBook[] = [
  {
    id: "1",
    title: "TypeScript Handbook",
    author: "Anders Hejlsberg",
    authorDescription: "Головний архітектор TypeScript та один із творців C#.",
    description: "Офіційний довідник з TypeScript від одного з його творців.",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631019859i/58943173.jpg"
  },
  {
    id: "2",
    title: "Effective TypeScript",
    author: "Dan Vanderkam",
    authorDescription: "Інженер-програміст, колишній співробітник Google, експерт із TypeScript.",
    description: "Книга з 62 порадами, які допоможуть писати чистий і ефективний TypeScript-код.",
    image: "https://effectivetypescript.com/images/cover-2e.jpg"
  },
  {
    id: "3",
    title: "Programming TypeScript",
    author: "Boris Cherny",
    authorDescription: "Інженер-програміст, працював у Facebook та інших технологічних компаніях.",
    description: "Глибоке занурення в можливості TypeScript для створення надійного коду.",
    image: "https://m.media-amazon.com/images/I/914Lo09RDcL.jpg"
  }
];

export { books };
