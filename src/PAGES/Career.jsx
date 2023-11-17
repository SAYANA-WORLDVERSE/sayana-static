import React, { Fragment } from "react";
import heroimg from "../assets/career-hero.png";
import "../Style/Career.css";
import Header from "../COMPONENTS/Header";

const Career = () => {
  return (
    <Fragment>
                  <Header title="Career" link="Career " />

      <section className="career-hero">
        <div className="container-fluid hero-section">
          <div className="container d-flex justify-content-center">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div className="hero-content">
                  <h3 className="main-title">Career</h3>
                  <p className="para-content">
                    As your digital enablement partner, we apply our
                    talent-first approach to accelerate your digital journey,
                    helping you unleash your potential and unlock unseen
                    opportunities.
                  </p>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <img src={heroimg} alt="" className="career-heroimg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="career-content py-5 m-md-5">
        <div className="container">
          <p className="career-para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            nisi iure aut natus quod dolores in est eveniet? Consectetur dolor
            quam iusto aspernatur nesciunt eveniet delectus asperiores aut quo
            corporis, cumque incidunt eum, quidem optio illo dolore, ducimus
            earum tenetur?
          </p>
          <div className="row py-5 career-container mt-5">
            <div className="col-md-7">
              <div className="d-flex justify-content-center">
                <h1 className="career-title">Current Opening</h1>
              </div>

              <div class="accordion" id="accordianCareer">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <div
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      UI & UX Designer & Developer
                    </div>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordianCareer"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid voluptatibus, quasi blanditiis, dolores, repellat
                      ipsa modi sequi dolorem cupiditate iure nobis quisquam vel
                      atque vero magni omnis provident consequuntur corrupti!
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <div
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      PHP Developer
                    </div>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordianCareer"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Enim dolorem numquam dignissimos animi sunt deleniti
                      dolorum delectus ducimus quis a, dolore, eligendi quod ea
                      velit?
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <div
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Developer HTML & CSS
                    </div>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordianCareer"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio sint mollitia cum, molestiae alias quidem
                      tenetur commodi voluptate deserunt velit quas culpa illum
                      quos esse.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <div
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Graphics Designer Interns
                    </div>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordianCareer"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio sint mollitia cum, molestiae alias quidem
                      tenetur commodi voluptate deserunt velit quas culpa illum
                      quos esse.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <div
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Content Writer Interns
                    </div>
                  </h2>
                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordianCareer"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio sint mollitia cum, molestiae alias quidem
                      tenetur commodi voluptate deserunt velit quas culpa illum
                      quos esse.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 career-form">
              <div className="d-flex justify-content-center">
                <h1 className="career-title">Submit Your CV</h1>
              </div>

              <form class="row g-3">
                <div class="col-md-12">
                  <input
                    type="email"
                    className="form-control career-input"
                    placeholder="Full Name"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="number"
                    className="form-control spinner"
                    placeholder="Mobile"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="mail"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div class="col-md-12">
                  <select id="inputState" class="form-control">
                    <option selected>Choose Position</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-12">
                  <input
                    type="file"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>

                <div class="col-md-12">
                  <textarea
                    type="text"
                    className="form-control"
                    id="message"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div class="col-12">
                  <button type="submit " className="float-end">
                    Apply Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Career;
