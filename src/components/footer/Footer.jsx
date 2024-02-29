import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <i className="fa-solid fa-tower-cell" />
        Go Live
      </div>
      <div className="right">
        <p>UTF-8</p>
        <p>PORT: 3000</p>
        <i className="fa-solid fa-bell" />
      </div>
    </div>
  );
}

export default Footer;
