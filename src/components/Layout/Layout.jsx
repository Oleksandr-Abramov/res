import s from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.container}>{children}</div>;
      </div>
    </>
  );
};

export default Layout;
