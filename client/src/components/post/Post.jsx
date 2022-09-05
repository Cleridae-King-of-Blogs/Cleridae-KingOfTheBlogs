import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  const PF = "http://localhost:4000/images/";
  return (
    <div className="post">
      <Link to={`/post/${post._id}`} className="link">
        {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      </Link>
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        {/* <span className="postAuthor">
          {post.username}, {new Date(post.createdAt).toDateString()}
        </span> */}

        <p
          style={{ fontSize: "16px", fontWeight: "bold" }}
          className="postAuthor"
        >
          {post.username}{" "}
          <span style={{ fontSize: "13px" }}>
            , {new Date(post.createdAt).toDateString()}
          </span>
        </p>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
