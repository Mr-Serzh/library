import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { getAuthorBooks } from '../../services/books';
import LoaderComponent from '../../components/LoaderComponent';

import s from './BookDetailsView.module.css';

export default function BookDetailsView(props) {
  const [isLoding, setIsLoding] = useState(false);
  const history = useHistory();
  const location = useLocation(props);

  const {
    location: { state },
  } = props;

  const { book, sameAuthorBooks } = state || {};

  const handleGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      {!book ? (
        <h1 className={s.noBook}>Book is not found</h1>
      ) : (
        <>
          {isLoding ? (
            <LoaderComponent />
          ) : (
            <>
              {book && (
                <>
                  <Button
                    variant="contained"
                    color="secondary"
                    type="button"
                    onClick={handleGoBack}
                    className={s.btn}
                  >
                    &#9754; Back to list
                  </Button>
                  <div className={s.book}>
                    <img className={s.img} src={book.cover} alt={book.title} />
                    <h2>{book.title}</h2>
                    <h3 className={s.bookDescr}>Author: {book.author}</h3>
                    <p className={s.bookDescr}>ISBN: {book.isbn}</p>
                    <p className={s.bookDescr}>Author's books:</p>

                    {Boolean(sameAuthorBooks?.length) && (
                      <ul className={s.bookList}>
                        {sameAuthorBooks.map(item => (
                          <li key={item.id} className={s.bookListItem}>
                            <Link
                              className={s.bookLink}
                              to={{
                                pathname: `/${item.id}`,
                                state: {
                                  book: item,
                                  sameAuthorBooks: getAuthorBooks(
                                    [...sameAuthorBooks, book].filter(
                                      entry => entry.id !== item.id,
                                    ),
                                    item.author,
                                  ),
                                },
                              }}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                    <Link className={s.bookLink} to={`/`}>
                      &#9754; Back to list
                    </Link>
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
