import React from "react";
import BreadCrumb from "../components/BreadCrumb.js";
import Meta from "../components/Meta.js";
import { Link } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />

      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiArrowSmLeft />
                  Go back to Blogs
                </Link>
                <h3 className="title">A beautiful Sunday morning workout</h3>
                <img
                  src="images/blog-3.jpg"
                  className="img-fluid w-100 my-4"
                  alt="blog"
                />
                <p>
                  In the fast-paced world we live in, staying connected and
                  organized is more crucial than ever. Samsung, a global leader
                  in cutting-edge technology, has once again redefined the
                  smartwatch experience with its impressive range of Galaxy
                  smartwatches. Let's take a closer look at how these sleek
                  wearables seamlessly integrate style and functionality, making
                  them an essential companion for the modern lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
