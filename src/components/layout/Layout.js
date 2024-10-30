import classes from './Layout.module.css';

export default function Layout({children}) {
  return (
    <div data-testid="layout"> 
      <main className={classes.main}>{children}</main>
    </div>
  );
}
