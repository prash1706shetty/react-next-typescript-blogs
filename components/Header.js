import headerStyle from "../styles/Header.module.css";

const Header = () => {
    const colorvalue = 5;
  return (
    <div>
      <h1 className={headerStyle.title}>Prashanth blogs</h1>
    </div>
  );
};

export default Header;
