import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb.js";
import Meta from "../components/Meta.js";
import ProductCard from "../components/ProductCard.js";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color.js";
import { FaCodeCompare } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import Container from "../components/Container.js";
const SingleProduct = () => {
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpc3MlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
  };
  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />

      <Container class1="main-product-wrapper py-5 home-wrapper-2">
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
                  Introducing the Automatic Luxury Swiss Watch a masterpiece of
                  precision engineering and timeless elegance.
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
                  <p className="mb-0 t-review">(2 Reviews)</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div className="py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">Swiss</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <spam className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </spam>
                    <spam className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </spam>
                    <spam className="badge border border-1 bg-white text-dark border-secondary">
                      L
                    </spam>
                    <spam className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </spam>
                    <spam className="badge border border-1 bg-white text-dark border-secondary">
                      XXL
                    </spam>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Color :</h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "70px" }}
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0" type="submit">
                      Add To Cart
                    </button>
                    <button className="button signup">Buy It Now</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="">
                      <FaCodeCompare className="fs-5 me-2" />
                      Add To Compare
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <FaHeart className="fs-5 me-2" />
                      Add To Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">Shipping & Return :</h3>
                  <p className="product-data">
                    🌟 Limited-Time Shipping Special! Enjoy FREE Shipping on All
                    Orders for a Limited Period! 🚚✨ Explore our fantastic
                    selection of products and have them delivered to your
                    doorstep with the added bonus of complimentary shipping.
                    Don't miss out on this exclusive offer – shop now and
                    experience the convenience of free shipping on your favorite
                    items! 🎁🌐 #FreeShipping #ShopNow #SpecialOffer"
                  </p>
                </div>
              </div>
              <div className="d-flex gap-10 align-items-center my-3">
                <h3 className="product-heading">Product Link :</h3>
                <a
                  href="javascript:void(0);"
                  onClick={() => {
                    copyToClipboard(
                      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpc3MlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"
                    );
                  }}
                >
                  Copy Product Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py 5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>
                Introducing the latest Samsung Smartwatch a fusion of
                cutting-edge technology and sophisticated design. This sleek and
                powerful wearable is your ultimate companion for a connected
                lifestyle.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
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
                    <a className="text-dark text-decoration-underline" href="">
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
                    Monitor your fitness journey with precision, from heart rate
                    and sleep patterns to stress levels and more. Stay proactive
                    about your well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
