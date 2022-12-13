import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav_box">
      <div className="nav_left">
        <img
          src="http://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"
          alt="logo"
          width="28px"
          height="24px"
        />
        <h3>ReactFacts</h3>
      </div>
      <div className="nav_right">
        <h4>React Course - Project 1</h4>
      </div>
    </nav>
  );
};

export default Navbar;
