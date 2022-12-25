import React, { useEffect, useState } from "react";
import { careerHndlerData } from "../../service/auth.service";
import { listBody } from "../../utils/helper";

export default function Career() {
  const [categoriesData, setcategoriesData] = useState([]);

  useEffect(() => {
    getcategoryData();
  }, []);

  const getcategoryData = async () => {
    const response = await careerHndlerData(
      listBody({
        where: {
          isActive: true,
        },
        perPage: 1000,
      })
    );
    if (response) {
      setcategoriesData(response);
    }
  };
  return (
    <>
      <main className="main-wrapper">
        {/* Start Breadcrumb Area  */}
        <div className="axil-breadcrumb-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-8">
                <div className="inner">
                  <ul className="axil-breadcrumb">
                    <li className="axil-breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="separator" />
                    <li
                      className="axil-breadcrumb-item active"
                      aria-current="page"
                    >
                      Pages
                    </li>
                  </ul>
                  <h1 className="title">Career</h1>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        {/* End Breadcrumb Area  */}
        {/* Start Privacy Policy Area  */}
        <div className="axil-privacy-area axil-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                {categoriesData?.map((card) => {
                  return (
                    <>
                      <div className="axil-privacy-policy">
                        <span className="policy-published">Post name:</span>
                      </div>
                      <p>
                        <strong>Job Location</strong>: Rajkot
                        <br />
                        <strong>Department</strong>: Operation Department
                        <br />
                        <strong>Gender</strong>: Male or Female
                        <br />
                        <strong>Experience</strong>: Fresher / Experience both
                        can Apply
                        <br />
                        <strong>Training</strong>: Training Will Be Provided By
                        Company
                        <br />
                        <strong>Salary</strong>: Depends On Interview
                        <br />
                        <strong>Other Benefits</strong>: PF And Employees State
                        Insurance Corporation (ESIC) Benefit
                      </p>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* End Privacy Policy Area  */}
      </main>
    </>
  );
}
