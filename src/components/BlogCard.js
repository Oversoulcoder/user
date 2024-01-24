import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">January 20, 2024</p>
        <h5 className="title">A beautiful sunday morning renaissance</h5>
        <p className="desc">
          In the rapidly evolving landscape of technology, Virtual Reality (VR)
          has emerged as a transformative force, offering immersive experiences
          that redefine the way we interact with digital content. At the
          forefront of this revolution is the VR headgear – a sleek and
          futuristic device that opens doors to a world of limitless
          possibilities. In this blog post, we will delve into the fascinating
          realm of VR headgear, exploring its features, applications, and the
          unparalleled experiences it brings to users.
        </p>
        <Link to="/" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
