import { IBook } from "../interfaces/IBook";

const books: IBook[] = [
  { id: 1, author_id: 1, genre_id: 1, title: "Володар перснів", description: "Епічна історія про боротьбу добра і зла.", image: "https://upload.wikimedia.org/wikipedia/uk/0/0c/The_Fellowship_Of_The_Ring.jpg" },
  { id: 2, author_id: 1, genre_id: 1, title: "Хоббіт", description: "Пригоди Більбо Беггінса в Середзем'ї.", image: "https://upload.wikimedia.org/wikipedia/ru/d/dc/Hobbit_-_Desolation_of_Smaug.jpg" },
  { id: 3, author_id: 2, genre_id: 1, title: "Гра престолів", description: "Перша книга циклу 'Пісня льоду і полум'я'.", image: "https://upload.wikimedia.org/wikipedia/uk/1/17/%D0%93%D1%80%D0%B0_%D0%9F%D1%80%D0%B5%D1%81%D1%82%D0%BE%D0%BB%D1%96%D0%B2.jpg" },
  { id: 4, author_id: 2, genre_id: 1, title: "Битва королів", description: "Продовження 'Гри престолів'.", image: "https://upload.wikimedia.org/wikipedia/uk/c/cc/%D0%91%D0%B8%D1%82%D0%B2%D0%B0_%D0%BA%D0%BE%D1%80%D0%BE%D0%BB%D1%96%D0%B2.jpg" },
  { id: 5, author_id: 3, genre_id: 3, title: "Сяйво", description: "Класичний роман жахів про готель 'Оверлук'.", image: "https://upload.wikimedia.org/wikipedia/uk/thumb/5/59/%D0%A1%D1%8F%D0%B9%D0%B2%D0%BE.jpg/220px-%D0%A1%D1%8F%D0%B9%D0%B2%D0%BE.jpg" },
  { id: 6, author_id: 3, genre_id: 3, title: "Воно", description: "Історія про клоуна Пеннівайза.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuh6FBIweeTZBDGx20sQvAbHCNW175c9ZwbA&s" },
  { id: 7, author_id: 3, genre_id: 2, title: "11/22/63", description: "Подорож у часі, щоб врятувати Кеннеді.", image: "https://upload.wikimedia.org/wikipedia/en/1/14/11-22-63.jpg" },
  { id: 8, author_id: 1, genre_id: 1, title: "Сильмариліон", description: "Легенди про Середзем'я.", image: "https://upload.wikimedia.org/wikipedia/uk/5/54/%D0%A1%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0%D1%80%D0%B8%D0%BB%D1%96%D0%BE%D0%BD.jpg" },
  { id: 9, author_id: 2, genre_id: 2, title: "Вихор", description: "Науково-фантастична історія про майбутнє.", image: "https://img.knigamir.com/67a/67adf12a29c9fbf6e9d4372991544d55.jpg" },
  { id: 10, author_id: 3, genre_id: 3, title: "Кладовище домашніх тварин", description: "Моторошна історія про втрату і жах.", image: "https://upload.wikimedia.org/wikipedia/uk/b/b6/%D0%9A%D0%BB%D0%B0%D0%B4%D0%BE%D0%B2%D0%B8%D1%89%D0%B5_%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D1%96%D1%85_%D1%82%D0%B2%D0%B0%D1%80%D0%B8%D0%BD.jpg" }
];

export { books };
