import { useState, useEffect } from 'react';
import {
  Link,
  useRouteMatch,
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import * as booksAPI from '../../services/books-api';
import LoaderComponent from '../../components/LoaderComponent';
import s from './BookDetailsView.module.css';

export default function BookDetailsView() {
  const { url } = useRouteMatch();
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [isLoding, setIsLoding] = useState(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setIsLoding(true);
    // fetch('https://azsoft-code-server.herokuapp.com/books')
    //   .then(resp => resp.json())
    //   .then(result => setBook(result.books))
    booksAPI
      .getBooks()
      .then(result => setBook(result.books))
      .catch(error => console.log(error.massage))
      .finally(() => setIsLoding(false));
  }, []);

  const handleGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  const detailBbook = book?.find(item => item.id === bookId);
  // console.log(detailBbook);

  return (
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
                <img
                  className={s.img}
                  src={detailBbook?.cover}
                  alt={detailBbook?.title}
                />
                <h2>{detailBbook?.title}</h2>
                <h3 className={s.bookDescr}>{detailBbook?.author}</h3>
                <p className={s.bookDescr}>{detailBbook?.isbn}</p>
                <p className={s.bookDescr}>
                  A list of book titles by the same Author (with links)
                </p>
                <Link className={s.bookLink} to={`/`}>
                  Back to list
                </Link>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
