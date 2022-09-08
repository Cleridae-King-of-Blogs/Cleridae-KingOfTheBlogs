import "./single.css";
import SideBarAuthor from "../../components/sidebarAuthor/SideBarAuthor";
import SinglePost from "../../components/singlePost/SinglePost";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <SideBarAuthor />
    </div>
  );
}
