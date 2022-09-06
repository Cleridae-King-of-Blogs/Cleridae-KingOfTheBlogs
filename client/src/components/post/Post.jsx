import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  const PF = "http://localhost:4000/images/";

  return (
    <div className="post">
      <Link
        to={`/post/${post._id}`}
        className="link"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      </Link>
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link
          to={`/post/${post._id}`}
          className="link"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />

        <Link
          to={`/?user=${post.username}`}
          className="link"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <p
            style={{ fontSize: "16px", fontWeight: "bold" }}
            className="postAuthor"
          >
            {post.username}
          </p>
        </Link>

        <span style={{ fontSize: "13px" }} className="postAuthor2">
          {new Date(post.updatedAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
