import React from "react";
import BreadCrumb from "../components/BreadCrumb.js";
import Meta from "../components/Meta.js";
import Container from "../components/Container.js";
const TermsAndCondition = () => {
  return (
    <>
      <Meta title={"Terms And Condition"} />
      <BreadCrumb title="Terms And Condition" />

      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermsAndCondition;
