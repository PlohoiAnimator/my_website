import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./homepage.css";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="HomePage">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}
