import "./header.css";

export default function Header() {
  const PF = "http://localhost:4000/images/";

  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">The Zip Coder's</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        // src="https://images.unsplash.com/photo-1633942793943-277d0073fdb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2026&q=80"
        src={PF + `headercut.png`}
        alt=""
      />
    </div>
  );
}
