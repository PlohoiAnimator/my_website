import Header from "../Header/Header";
import Pages from "../Pages/Pages";
import Sidebar from "../Sidebar/Sidebar";
import "./content.css";

export default function Content() {
  return (
    <div>
      <Header />
      <div className="content">
        <Pages />
        <Sidebar />
      </div>
    </div>
  );
}
