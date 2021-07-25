import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* About me */}
      <div className="sidebarItem">
        <span className="sidebarTitle">Обо мне</span>
        <img
          src="https://avatarfiles.alphacoders.com/146/thumb-1920-146420.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          tempora.
        </p>
      </div>
      {/* Categories */}
      <div className="sidebarItem">
        <span className="sidebarTitle">Категории</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Жизнь</li>
          <li className="sidebarListItem">Стиль</li>
          <li className="sidebarListItem">Музыка</li>
          <li className="sidebarListItem">Спорт</li>
          <li className="sidebarListItem">Технологии</li>
          <li className="sidebarListItem">Кино</li>
        </ul>
      </div>
      {/* Соц.Сети */}
      <div className="sidebarItem">
        <span className="sidebarTitle">Соц.сети</span>
        <ul className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook"></i>
          <i className="sidebarIcon fab fa-instagram"></i>
          <i className="sidebarIcon fab fa-vk"></i>
          <i className="sidebarIcon fab fa-twitter"></i>
        </ul>
      </div>
      {/*  */}
    </div>
  );
}
