import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Резюме & Портфолио</span>
        <span className="headerTitleLg">Блог</span>
      </div>
      <img
        className="headerImg"
        src="https://i.pinimg.com/originals/16/6c/1b/166c1b77496855071254b3a2f519acb8.jpg"
        alt=""
      />
    </div>
  );
}
