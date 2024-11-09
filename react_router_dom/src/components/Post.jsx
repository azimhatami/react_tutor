import React from "react";
import { Link, useParams } from "react-router-dom";

const posts = [
  {
    id: "1",
    title: "Page One",
    description: "This is page one.",
  },
  {
    id: "2",
    title: "Page Two",
    description: "This is page two.",
  },
  {
    id: "3",
    title: "Page Three",
    description: "This is page three.",
  },
];

function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);
  return (
    <div>
      <h1>{post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <Link to='/posts'>Go to posts</Link>
    </div>
  );
}

export default Post;
