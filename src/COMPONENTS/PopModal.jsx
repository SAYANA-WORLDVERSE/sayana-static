import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

import "../Style/Modal.css";
import modalimg from "../assets/modal-img.png";
import like from "../assets/like.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#082f53",

  px: 4,
  py: 4,
  outline: 0,
};

export default function PopModal() {
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState(1);
  const [select, setselect] = useState(null);
  const form = document.getElementById("enquireform");
  const [formData, setFormData] = useState({
    full_name: "",
    number: "",
    email: "",
    country: "",
    service: "",
  });
  const [buttonText, setButtonText] = useState("Submit");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleButtonClick = (services) => {
    setselect(services);
  };

  const handleNext = () => {
    if (step < 4) {
      setStep((prevStep) => prevStep + 1);
    }
  };
  const handlePrev = () => {
    if (step <= 4 && step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "radio" && checked) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Submiting...");

    const templateParams = {
      full_name: formData.full_name,
      number: formData.number,
      email: formData.email,
      country: formData.country,
      service: formData.service,
    };

    console.log(templateParams);

    emailjs
      .sendForm(
        "service_yqbwuyq",
        "template_eg2d02e",
        form,
        "Jx4iBaGzWieX0UanH"
      )
      .then(
        (result) => {
          console.log("success");
          form.reset();
          setButtonText("Submit");
          handleNext();
        },
        (error) => {
          console.log(error);
          setButtonText("Submit");
        }
      );
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-header d-flex justify-content-between">
            <FaArrowLeftLong onClick={handlePrev} />

            <AiOutlineClose onClick={handleClose} />
          </div>
          <div className="modal-body  d-flex align-items-center justify-content-center">
            <form onSubmit={handleSubmit} id="enquireform">
              {step === 1 && (
                <div className="step-container d-flex flex-column  align-items-center  ">
                  <img src={modalimg} alt="" />
                  <p className="text-center">
                    Let’s create a measurable impact on
                    <br />
                    <span>Your Business</span>
                  </p>
                  <button onClick={handleNext} className="modal-btn">
                    Design a Quote
                  </button>
                </div>
              )}
              {step === 2 && (
                <div className="step-container d-flex flex-column  align-items-center  ">
                  <p>What services would you like to opt?</p>

                  <div className="radio-group">
                    <input
                      type="radio"
                      id="radio1"
                      value="UI-UX"
                      name="service"
                      className="radio-input"
                      onChange={handleChange}
                    />
                    <label htmlFor="radio1" className="radio-label">
                      <span className="radio-inner-circle"></span>
                      UI-UX
                    </label>

                    <input
                      type="radio"
                      id="radio2"
                      name="service"
                      value="Branding"
                      className="radio-input"
                      onChange={handleChange}
                    />
                    <label htmlFor="radio2" className="radio-label">
                      <span className="radio-inner-circle"></span>
                      Branding
                    </label>

                    <input
                      type="radio"
                      id="radio3"
                      name="service"
                      className="radio-input"
                      onChange={handleChange}
                    />
                    <label htmlFor="radio3" className="radio-label">
                      <span className="radio-inner-circle"></span>
                      Development
                    </label>
                    <input
                      type="radio"
                      id="radio4"
                      value="Marketing"
                      name="service"
                      className="radio-input"
                      onChange={handleChange}
                    />
                    <label htmlFor="radio4" className="radio-label">
                      <span className="radio-inner-circle"></span>
                      Marketing
                    </label>
                    <input
                      type="radio"
                      id="radio5"
                      value="Other"
                      name="service"
                      className="radio-input"
                      onChange={handleChange}
                    />
                    <label htmlFor="radio5" className="radio-label">
                      <span className="radio-inner-circle"></span>
                      Other
                    </label>
                  </div>

                  <div className="d-flex gap-3 mt-2">
                    <button onClick={handleNext} className="modal-btn">
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="step-container d-flex flex-column  align-items-center p-md-5 ">
                  <p>What services would you like to opt?</p>

                  <input
                    type="text"
                    required
                    className="form-control m-2"
                    placeholder="Full Name"
                    name="full_name"
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    className="form-control m-2"
                    placeholder="Email"
                    name="email"
                  />
                  <input
                    type="number"
                    required
                    className="form-control m-2"
                    placeholder="Phone Number"
                    name="number"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    required
                    className="form-control m-2"
                    placeholder="Country"
                    name="country"
                    onChange={handleChange}
                  />

                  <div className="d-flex gap-3 mt-2">
                    <button className="modal-btn">{buttonText}</button>
                  </div>
                </div>
              )}
              {step === 4 && (
                <div className="step-container d-flex flex-column  align-items-center p-md-5 ">
                  <img src={like} alt="" />
                  <p>Thank you! Will catch you back</p>
                </div>
              )}
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
