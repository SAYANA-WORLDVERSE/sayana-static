import React, { Fragment, useState } from "react";
import heroimg from "../assets/career-hero.png";
import "../Style/Career.css";
import Header from "../COMPONENTS/Header";
import Swal from 'sweetalert2';


const Career = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    mobile: "",
    email: "",
    file: "",
    position: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Submit");


  
  const validateForm = () => {
    const newErrors = {};

    if (!formData.full_name) {
      newErrors.full_name = "Full name is required";
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.position) {
      newErrors.position = "Position is required";
    }

    if (!formData.file) {
      newErrors.file = "File is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Submiting...");

   
      // Prepare form data for submission
      const data = new FormData();
      data.append("full_name", formData.full_name);
      data.append("mobile", formData.mobile);
      data.append("email", formData.email);
      data.append("file", formData.file);
      data.append("position", formData.position);
      data.append("message", formData.message);

      // Submit the form data
      try {
        const response = await fetch("https://sayana-worldverse.vercel.app/submit-form", {
          method: "POST",
          body: data,
        });

        const result = await response.json();
        Swal.fire({
          icon: "success",
          title: "Form Submitted Successfully!",
          text: "Thank you for submitting the form.",
        });
        console.log(result);

        setFormData({
          full_name: "",
          mobile: "",
          email: "",
          file:"",
          position: "",
          message: "",
        });
       
    
        setButtonText("Submit");
      } catch (error) {
        console.error("Error submitting form:", error);
        setButtonText("Submit");
        Swal.fire({
          icon: "error",
          title: "Oops... Something went wrong!",
          text: "There was an error submitting the form. Please try again.",
        });
      }
    
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

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
                  Sayana World Verse is proud to be recognized as one of the most professional workplaces in Hyderabad, 
                  owing to its foundation of self-improvement and solution-driven mindset. Working alongside a team of young and dynamic professionals, you’ll have ample opportunity to develop your skills and grow both personally and professionally.
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
          {/* <p className="career-para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            nisi iure aut natus quod dolores in est eveniet? Consectetur dolor
            quam iusto aspernatur nesciunt eveniet delectus asperiores aut quo
            corporis, cumque incidunt eum, quidem optio illo dolore, ducimus
            earum tenetur?
          </p> */}
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
                    type="text"
                    className="form-control career-input"
                    placeholder="Full Name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="number"
                    className="form-control spinner"
                    placeholder="Mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                  />

                </div>
                <div class="col-md-12">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                </div>
                <div class="col-md-12">
                  <select
                    id="inputState"
                    class="form-control"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                  >
                    <option selected>Choose Position</option>
                    <option value="Frontend Developer">
                      Frontend Developer
                    </option>
                  </select>
                </div>
                <div class="col-md-12">
                  <input
                    type="file"
                    className="form-control"
                    name="file"
                    accept=".pdf,.doc,.docx"
                    
                    onChange={handleFileChange}
                  />
                </div>

                <div class="col-md-12">
                  <textarea
                    type="text"
                    className="form-control"
                    id="message"
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div class="col-12">
                  <button
                    type="submit "
                    className="float-end"
                    onClick={handleSubmit}
                  >
                   {buttonText}
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
