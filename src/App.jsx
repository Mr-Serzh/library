import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppBar from './components/AppBar';
import Container from './components/Container';
import LoaderComponent from './components/LoaderComponent';

const BooksView = lazy(() =>
  import('./views/BooksView/BooksView.js' /* webpackChunkName: "books-view" */),
);
const BookDetailsView = lazy(() =>
  import(
    './views/BookDetailsView/BookDetailsView.js' /* webpackChunkName: "book-details-view" */
  ),
);
const NotFoundView = lazy(() =>
  import(
    './views/NotFoundView/NotFoundView.js' /* webpackChunkName: "not-found-view" */
  ),
);

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<LoaderComponent />}>
        <Switch>
          <Route path="/" exact component={props => <BooksView {...props} />} />

          <Route
            path="/:bookId"
            exact
            component={props => <BookDetailsView {...props} />}
          />

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
