import LOGO from "../assets/logo1.png";

const NavBar = () => {
  return (
    <nav className="absolute">
      <div className="logo">
        <img src={LOGO} alt="logo" />
      </div>
    </nav>
  );
};

export default NavBar;
