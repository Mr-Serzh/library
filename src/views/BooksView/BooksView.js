import { useState, useEffect } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import * as booksAPI from '../../services/books-api';
import LoaderComponent from '../../components/LoaderComponent';
import { getAuthorBooks } from '../../services/books';
import s from './BooksView.module.css';

export default function BooksView(props) {
  // const { url } = useRouteMatch();
  const [books, setBooks] = useState(null);
  const [isLoding, setIsLoding] = useState(false);
  // const history = useHistory(props);

  const { history } = props;

  useEffect(() => {
    setIsLoding(true);
    // fetch('https://azsoft-code-server.herokuapp.com/books')
    //   .then(resp => resp.json())
    //   .then(result => setBooks(result.books))
    booksAPI
      .getBooks()
      .then(result => setBooks(result.books))
      .catch(error => console.log(error.massage))
      .finally(() => setIsLoding(false));
  }, []);

  const handleMoreClick = book => {
    const { id } = book;
    const sameAuthorBooks = getAuthorBooks(
      books.filter(e => e.id !== id),
      book.author,
    );
    history.push(`/${id}`, { sameAuthorBooks, book });
  };

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
                        <Link
                          className={s.bookLink}
                          to={`/${book.id}`}
                          onClick={() => {
                            handleMoreClick(book);
                          }}
                        >
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
