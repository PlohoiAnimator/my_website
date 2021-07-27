import Sidebar from "../../components/Sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";

export default function Single() {
  return (
    <div className="singlePage">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
