const Nav = () => {
  return (
    <>
      <div className="nav">
        <img
          className="logo"
          src="/assets/images/logoimg.png"
          alt="image"
        ></img>
        <input type="checkbox" id="click"></input>
        <label for="click" className="menuicon">
          <i class="fa-solid fa-lg fa-bars"></i>
        </label>
        <div className="navleft">
          <ul className="navitems">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Faq</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
