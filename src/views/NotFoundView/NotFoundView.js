import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  text: {
    height: '50vh',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0,
  },
  number: {
    display: 'inlineBlock',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top',
  },
});

export default function NotFoundView() {
  const styles = useStyles();
  return (
    <h2 className={styles.text}>
      <span className={styles.number}>404</span>This page could not be found.
    </h2>
  );
}
