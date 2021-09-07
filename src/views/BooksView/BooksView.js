import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as booksAPI from '../../services/books-api';
import LoaderComponent from '../../components/LoaderComponent';
import s from './BooksView.module.css';

export default function BooksView() {
  // const { url } = useRouteMatch();
  const [books, setBooks] = useState(null);
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    setIsLoding(true);
    booksAPI
      .getBooks()
      .then(result => setBooks(result.books))
      .catch(error => console.log(error.massage))
      .finally(() => setIsLoding(false));
  }, []);

  return (
    <>
      {isLoding ? (
        <LoaderComponent />
      ) : (
        <>
          {books && (
            <ul className={s.booksList}>
              {books.map(book => (
                <li key={book.id} className={s.booksItem}>
                  {
                    <>
                      <img src={book.cover} alt={book.title} />
                      <div className={s.description}>
                        <h2 className={s.bookTitle}>{book.title}</h2>
                        <h3 className={s.bookAuthor}>{book.author}</h3>
                        <Link className={s.bookLink} to={`/${book.id}`}>
                          More information
                        </Link>
                      </div>
                    </>
                  }
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
}
