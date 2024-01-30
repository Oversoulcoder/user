import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb.js";
import Meta from "../components/Meta.js";
import ProductCard from "../components/ProductCard.js";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 500,
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpc3MlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
  };
  const [orderedProduct, setorderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />

      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://cdn.watchswiss.com/wp-content/uploads/2018/01/1030_895-794-productlarge-tourbographperpetual-front.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://watchesofmayfair.com/media/catalog/product/cache/fb5607d7e099727d725b63b66ee94e4f/a/-/a-lange-and-sohne-706-025.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.luxatic.com/wp-content/uploads/2015/07/The-top-ten-most-expensive-watch-brands-in-the-world-00001.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8oCwz8dmsxR_f2nxyMwjfy0q1DMFKMM4Gw&usqp=CAU"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3>
                    Introducing the Automatic Luxury Swiss Watch a masterpiece
                    of precision engineering and timeless elegance.
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">Php 30,000</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">(2 Reviews)</p>
                  </div>
                  <a href="#review">Write a Review</a>
                </div>
                <div className="border-bottom">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py 5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Introducing the latest Samsung Smartwatch a fusion of
                  cutting-edge technology and sophisticated design. This sleek
                  and powerful wearable is your ultimate companion for a
                  connected lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-item-end">
                  <div>
                    <h4 className="mb-2">Customer Review</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Base on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Choyer</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Monitor your fitness journey with precision, from heart
                      rate and sleep patterns to stress levels and more. Stay
                      proactive about your well-being.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
