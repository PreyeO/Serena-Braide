import LOGO from "../assets/logo1.png";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={LOGO} alt="logo" />
      </div>
    </nav>
  );
};

export default NavBar;
