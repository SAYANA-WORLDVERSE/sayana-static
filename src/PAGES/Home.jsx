import React, { Fragment } from "react";
import HeroSection from "../COMPONENTS/HeroSection";
import Slider from "react-slick";
import Tooltip from "@mui/material/Tooltip";
import "../Style/Home.css";
import gradiant from "../assets/gradiant-1.png";
import computer from "../assets/computer.png";
import mobile from "../assets/mobile.png";
import rocket from "../assets/rocket.png";
import Rating from "@mui/material/Rating";
import pen from "../assets/pen.png";
import laptop from "../assets/laptop-png.png";
import web2 from "../assets/web-2.png";
import boy from "../assets/boy-setting.png";
import question from "../assets/question.png";
import designComputer from "../assets/design-computer.png";
import note from "../assets/note.png";
import video from "../assets/video.png";
import phone from "../assets/phone.png";
import dev from "../assets/setting-assets.png";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import client1 from "../assets/Layer01.png";
import client2 from "../assets/Layer02.png";
import client3 from "../assets/Layer03.png";
import client4 from "../assets/Layer04.png";
import client5 from "../assets/Layer05.png";
import newsRocket from "../assets/new-rocket.png";
import partner1 from "../assets/partner-1.png";
import partner2 from "../assets/partner-2.png";
import partner3 from "../assets/partner-3.png";
import partner4 from "../assets/partner-4.png";
import partner5 from "../assets/partner-5.png";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useNavigate } from "react-router";
import { useTheme } from "../COMPONENTS/Context";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const { isDark } = useTheme();

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const setting = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Fragment>
      <HeroSection />

      <section className="about-us">
        <div className="container about-us-content col-md-8 ">
          <h1 className="main-title ">
            Explore<span className="linear-text"> Sayana Worldverse</span>
          </h1>
          {/*<p className="main-sub-heading">Software development company</p>*/}
          <p className="main-paracontent text-center">
            At Sayana Worldverse, we break down barriers using captivating,
            modern and innovative software. We are passionate about creating
            inspiring digital experiences, not just about coding. As innovators
            driven by superior design, we enable companies to achieve
            unprecedented success. Come along on a creative adventure as we
            redefine what's possible using our knowledge and creative solutions.
          </p>
          <button onClick={() => navigate("/contact")}>Contact Us</button>
        </div>
      </section>

      <section>
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <div className="crafted-solution">
            <p>Our Solutions and Your Choices</p>
          </div>

          <div className="services d-flex justify-content-center flex-column align-items-center">
            <img
              src={gradiant}
              alt="gradiant"
              loading="lazy"
              className="gradiant-bg"
            />
            <div className="bg-inner">
              <img
                src={computer}
                alt="cmp"
                loading="lazy"
                className="computer"
              />

              <Tooltip title="Application Development" placement="left">
                <img
                  src={mobile}
                  onClick={() => navigate("/applicationdevelopment")}
                  alt=" mob"
                  loading="lazy"
                  className="mobile"
                  data-aos="fade-right"
                />
              </Tooltip>

              <Tooltip title="Digital Marketing" placement="left">
                <img
                  src={rocket}
                  onClick={() => navigate("/Digitalmarketing")}
                  alt="roc"
                  loading="lazy"
                  className="rocket"
                  data-aos="fade-right"
                />
              </Tooltip>
              <Tooltip title="Product Development" placement="left">
                <img
                  src={dev}
                  alt="dev"
                  loading="lazy"
                  className="setting"
                  data-aos="fade-top"
                  onClick={() => navigate("/productdevelopment")}
                />
              </Tooltip>
              <Tooltip title="Graphics Design" placement="right">
                <img
                  src={pen}
                  alt="pen"
                  loading="lazy"
                  className="pen"
                  data-aos="fade-left"
                  onClick={() => navigate("/graphicsdesign")}
                />
              </Tooltip>
              <Tooltip title="Web Design & Development" placement="right">
                <img
                  src={laptop}
                  alt="laptop"
                  loading="lazy"
                  onClick={() => navigate("/webdesign")}
                  className="laptop"
                  data-aos="fade-left"
                />
              </Tooltip>
            </div>
            <p className="learn-more mt-5 fw-bold text-center">
              Infinite potential | Unlocked through vision | Skill meets
              imagination | Custom digital masterpieces | Captivate | Inspire |
              Innovate | Break boundaries
            </p>
            <p className="text-center ">
              Together we build it At Sayana Worldverse
            </p>
            <button onClick={() => navigate("/contact")}>Learn More</button>
          </div>
        </div>
      </section>

      <section className="digital-excellence d-flex align-items-center flex-column">
        <img src={web2} alt="web2" loading="lazy" className="digital-wave" />
        <div className="container mt-1 d-md-flex  align-items-center justify-content-between">
          <div className="col-md-6  ">
            <img src={boy} alt="boy" loading="lazy" className="boy-setting" />
          </div>
          <div className="col-md-4">
            <h1 className="excellence">Our Mission & Vision</h1>
            <p className="ex-para">
              <b>Our Mission : </b> At Sayana Worldverse, our primary mission is
              to empower businesses by delivering cutting-edge custom software
              solutions. We are dedicated to understanding the unique needs of
              each client and providing tailored services that drive efficiency,
              productivity, and growth.
            </p>
            <p className="ex-para">
              <b>Our Vision : </b> Our vision at Sayana Worldverse is to be
              recognized as a beacon of creativity and technology in the custom
              software development industry. We aspire to set industry standards
              for excellence, innovation, and customer satisfaction, continually
              pushing boundaries and reshaping the future of digital solutions.
            </p>
            <button onClick={() => navigate("/about")}>Read More</button>
          </div>
        </div>
        <div className="container mt-5 d-md-flex  align-items-center">
          <div className="col-md-6">
            <h1 className="excellence">Why Choose Us</h1>
            <p className="ex-para">
              <b>Expertise:</b> Benefit from our extensive experience and
              specialized knowledge in custom software development, web design,
              app design, product development, digital marketing, and graphic
              design.
            </p>
            <p className="ex-para">
              <b> Innovation: </b>Our team thrives on innovation, consistently
              delivering unique and cutting-edge solutions tailored to your
              specific needs and challenges.
            </p>
            <p className="ex-para">
              <b>Client-Centric Approach:</b> We prioritize understanding your
              vision, goals, and objectives, ensuring that every solution is
              meticulously crafted to align with your business strategy.
            </p>
            <p className="ex-para">
              <b>Reliability:</b> As your trusted partner, Sayana Worldverse is
              committed to reliability, consistency, and transparency, ensuring
              timely delivery and exceeding expectations.
            </p>
            <button onClick={() => navigate("/about")}>Read More</button>
          </div>

          <div className="col-md-6  ">
            <img
              src={question}
              alt="que"
              loading="lazy"
              className="boy-setting"
            />
          </div>
        </div>

        <div className="container mt-5">
          <div className="row justify-content-evenly">
            <div className="cards col-md-2 p-2">
              <p className="number mb-0 ">
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <CountUp
                      start={0}
                      end={5}
                      duration={40}
                      isVisible={isVisible}
                    />
                  )}
                </VisibilitySensor>{" "}
                <span>+</span>
              </p>
              <p className="cards-text">Years of Experience</p>
            </div>
            <div className="cards col-md-2 p-2">
              <p className="number mb-0 ">
                {" "}
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <CountUp
                      start={0}
                      end={50}
                      duration={30}
                      isVisible={isVisible}
                    />
                  )}
                </VisibilitySensor>{" "}
                <span>+</span>{" "}
              </p>
              <p className="cards-text">Projects</p>
            </div>
            <div className="cards col-md-2 p-2">
              <p className="number mb-0 ">
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <CountUp
                      start={0}
                      end={60}
                      duration={30}
                      isVisible={isVisible}
                    />
                  )}
                </VisibilitySensor>{" "}
                <span>+</span>
              </p>
              <p className="cards-text">Satisfied Clients</p>
            </div>
            <div className="cards col-md-2 p-2">
              <p className="number mb-0 ">
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <CountUp
                      start={0}
                      end={99}
                      duration={30}
                      isVisible={isVisible}
                    />
                  )}
                </VisibilitySensor>{" "}
                <span>%</span>
              </p>
              <p className="cards-text"> Clients Satisfication</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us mt-5">
        <div className="container about-us-content col-md-8 ">
          <h1 className="title">
            <span className="color-title"> Efficient Workflow</span>
          </h1>
          <p className="main-paracontent ">for Optimal Results</p>
        </div>
      </section>

      <section className="mt-5">
        <div className="container d-md-flex  align-items-center justify-content-between">
          <div className="col-md-6  ">
            <img src={designComputer} alt="de" className="boy-setting" />
          </div>
          <div className="col-md-6 d-flex flex-column gap-3 ">
            <div
              className="implements d-flex  align-items-center gap-3"
              data-aos="fade-left"
            >
              {/* <div className="num">
                <span>1</span>
              </div> */}
              <div className="text">
                <h4 className="mb-1">1. Initial Consultation:</h4>
                <p>
                  Please share your mind and thoughts with our team, and we will
                  carefully listen to your needs while building the foundation
                  of our cooperation .
                </p>
              </div>
            </div>
            <div
              className="implements d-flex  align-items-center gap-3"
              data-aos="fade-left"
            >
              {/* <div className="num">
                <span>2</span>
              </div> */}
              <div className="text">
                <h4 className="mb-1">2. Strategic Blueprint:</h4>
                <p>
                  At Sayana Worldverse, we use our expertise in branding,
                  digital solutions, product development, and marketing, among
                  other outstanding domains, to create a strategic blueprint. At
                  the same time, it becomes the way we will accommodate your
                  desire with your particular industry.
                </p>
              </div>
            </div>
            <div
              className="implements d-flex  align-items-center gap-3"
              data-aos="fade-left"
            >
              {/* <div className="num">
                <span>3</span>
              </div> */}
              <div className="text">
                <h4 className="mb-1">3. Execution & Development</h4>
                <p>
                  From here onwards, our team puts the plan into action
                  executing with accuracy and creativity. Utilizing the latest
                  technologies and methodologies, we bring your fresh ideas to
                  life as we work within the target timelines and quality
                  perimeters. undertaking this process with accuracy ensures a
                  steadfast projection and development process.
                </p>
              </div>
            </div>
            <div
              className="implements d-flex  align-items-center gap-3"
              data-aos="fade-left"
            >
              {/* <div className="num">
                <span>4</span>
              </div> */}
              <div className="text">
                <h4 className="mb-1"> 4. Evaluation & Refinement:</h4>
                <p>
                  Always committed to higher standards post-execution, we
                  continually evaluate results to refine strategies ensuring the
                  best outcome, project adaptability as well as sustainable
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us mt-5 py-md-5">
        <div className="container about-us-content col-md-8 ">
          <h1 className="main-title">
            <span className="linear-text">
              Exploring Trends & Our Perspectives
            </span>
          </h1>

          <p className="main-paracontent text-center">
            Journey with us through the intersections of innovation, design, and
            market dynamics. Access timely articles, expert insights, and
            actionable strategies to drive your business aspirations.
          </p>
        </div>

        <div className="container">
          <section className="d-flex  flex-column justify-content-center align-items-center mt-5 ">
            <div className="col-md-12  d-md-flex justify-content-center blog-container">
              <div className="col-md-3 d-flex justify-content-center">
                <div className="blog-cards">
                  <img src="/images/blog4.jpg" alt="blog4" loading="lazy" />

                  <div className="blog-cards_content">
                    <p className="blog-cards__title">
                      A Good Online Marketing Strategy in 7 Steps
                    </p>
                    <p className="blog-cards__description">
                      Nowadays, if you have a business, online marketing is
                      inevitable. Online marketing is the way to reach your
                      (potential) customers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center">
                <div className="blog-cards">
                  <img
                    src="/images/blog5.png"
                    alt="blog5"
                    loading="lazy"
                    style={{ height: "235px" }}
                  />

                  <div className="blog-cards_content">
                    <p className="blog-cards__title">
                      Don't Let These 5 Conversion Killers Ruin Your Website's
                      Potential
                    </p>
                    <p className="blog-cards__description">
                      If you build a website as an entrepreneur, it is of course
                      your goal that it will also convert.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="mt-5" onClick={() => navigate("/blog")}>
                View All
              </button>
            </div>
          </section>
        </div>
      </section>

      <section>
        <div className="container about-us-content col-md-10  py-5">
          <h1 className="main-title">
            <span className="linear-text">Today To Schedule a discussion</span>
          </h1>

          <p className="main-paracontent ">
            We are here to assist you on your journey to digital excellence.
            Reach out to Sayana Worldverse today!
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-card">
                <div className="ring-icon">
                  <img
                    src={phone}
                    alt="photo"
                    loading="lazy"
                    className="ring"
                  />
                </div>

                <div className="card-content d-flex flex-column justify-items-center align-items-center gap-3">
                  <p className="text-center">
                    questions or remarks? Just write us a message !
                  </p>
                  <div className="list">
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <FiPhoneCall />
                      </div>
                      <p className="card-number mt-0 ">+91-8019242343</p>
                    </div>
                    {/* <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <AiOutlineMail />
                      </div>
                      <p className="card-number mt-0 ">support@sayanaworldverse.com</p>
                    </div>
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <CiLocationOn />
                      </div>
                      <p className="card-number mt-0 ">
                        Madhapur,Hyderabad, Telangana
                        <br /> 500072
                      </p>
                    </div> */}
                  </div>
                  <Link to="tel:+91-8096826999">
                    <button>Call Now</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-card">
                <div className="ring-icon">
                  <img src={note} alt="note" loading="lazy" className="ring" />
                </div>

                <div className="card-content d-flex flex-column justify-items-center align-items-center gap-3">
                  <p className="text-center">
                    Our support team is spread across the globe to give you
                    answers fast
                  </p>
                  <div className="list">
                    {/* <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <FiPhoneCall />
                      </div>
                      <p className="card-number mt-0 ">+91-8096826999</p>
                    </div>
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <CiLocationOn />
                      </div>
                      <p className="card-number mt-0 ">
                        Madhapur,Hyderabad, Telangana
                        <br /> 500072
                      </p>
                    </div> */}
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <AiOutlineMail />
                      </div>
                      <p className="card-number mt-0 ">
                        support@sayanaworldverse.com
                      </p>
                    </div>
                  </div>
                  <button onClick={() => navigate("/contact")}>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-card">
                <div className="ring-icon">
                  <img
                    src={video}
                    alt="video"
                    loading="lazy"
                    className="ring"
                  />
                </div>

                <div className="card-content d-flex flex-column justify-items-center align-items-center gap-3">
                  <p className="text-center">
                    Join Our Online community to Learn, Network & Grow your
                    online business
                  </p>
                  <div className="list">
                    {/* <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <FiPhoneCall />
                      </div>
                      <p className="card-number mt-0 ">123-456-7890</p>
                    </div>
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <CiLocationOn />
                      </div>
                      <p className="card-number mt-0 ">
                        Madhapur,Hyderabad, Telangana
                        <br /> 500072
                      </p>
                    </div> */}
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <AiOutlineMail />
                      </div>
                      <p className="card-number mt-0 ">
                        info@sayanaworldverse.com
                      </p>
                    </div>
                  </div>
                  <button>Connect</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" about-us-content   py-5">
          <h1 className="client">
            <span className="client-title">Clients We Worked With</span>
          </h1>

          <p className="main-paracontent text-center ">
            These are a few of our clients that we've been fortunable to work
            with, Come be victorious with us.
            <br />
            Our clients trust us to deliver exceptional services.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="project-slider">
            <Slider {...settings}>
              <div className="slider-items p-4">
                <div className="slider-inner">
                  <div className="partner-header">
                    <img
                      src={isDark ? client1 : partner1}
                      alt="partner1"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="slider-items p-4">
                <div className="slider-inner">
                  <div className="partner-header">
                    <img
                      src={isDark ? client2 : partner2}
                      alt="partner2"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="slider-items p-4">
                <div className="slider-inner">
                  <div className="partner-header">
                    <img
                      src={isDark ? client3 : partner3}
                      alt="partner3"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="slider-items p-4">
                <div className="slider-inner">
                  <div className="partner-header">
                    <img
                      src={isDark ? client4 : partner4}
                      alt="partner4"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="slider-items p-4">
                <div className="slider-inner">
                  <div className="partner-header">
                    <img
                      src={isDark ? client5 : partner5}
                      alt="partner5"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section>
        <div className=" about-us-content  mt-5 py-5">
          <h4 className=" clients ">
            <span className="client-title">Reviews</span>
          </h4>

          <p className="main-paracontent mt-2">What Clients Say About Us</p>
        </div>
      </section>

      <section>
        <div className="container">
          <Slider {...setting}>
            <div className="client-card">
              <div className="client-card-content">
                <img
                  src="/images/c1.png"
                  alt="c1"
                  loading="lazy"
                  className="test-monial"
                />
                <p className="client-name"> Aditya Multi Speciality </p>
                <p className="rating">
                  <Rating name="read-only" value={5} readOnly />
                </p>
                <p className="client-review">
                  The team at Aditya Multi Speciality Hospital is exceptionally
                  pleased with Sayana Worldverses services. From Web Development
                  that ensures a user-friendly online presence to SEO and
                  Digital Marketing that boost our visibility, and outstanding
                  Graphic Designing that reflects our professionalism.
                </p>
              </div>
            </div>
            <div className="client-card">
              <div className="client-card-content">
                <img
                  src="/images/c8.jpg"
                  alt="c8"
                  loading="lazy"
                  className="test-monial"
                />
                <p className="client-name"> Ortho 360 </p>
                <p className="rating">
                  <Rating name="read-only" value={5} readOnly />
                </p>
                <p className="client-review">
                  Sayana Worldverse has been a reliable partner for Ortho 360,
                  contributing significantly to our online success. Their Web
                  Development, SEO, Digital Marketing, and Graphic Designing
                  services have played a pivotal role in establishing our online
                  identity, ensuring that our orthopaedic care services reach
                  those in need.
                </p>
              </div>
            </div>
            <div className="client-card">
              <div className="client-card-content">
                <img
                  src="/images/c6.png"
                  alt="c6"
                  loading="lazy"
                  className="test-monial"
                />
                <p className="client-name">Sri Srinivasa Scan</p>
                <p className="rating">
                  <Rating name="read-only" value={5} readOnly />
                </p>
                <p className="client-review">
                  Sri Srinivasa Scan has benefited immensely from Sayana
                  Worldverse's expertise. Their Web Development, SEO, Digital
                  Marketing, and Graphic Designing services have not only
                  improved our online presence but also conveyed the precision
                  and excellence of our scan and diagnostic services.
                </p>
              </div>
            </div>
            <div className="client-card">
              <div className="client-card-content">
                <img
                  src="/images/c7.jpg"
                  alt="c7"
                  loading="lazy"
                  className="test-monial"
                />
                <p className="client-name"> Care of Careers </p>
                <p className="rating">
                  <Rating name="read-only" value={5} readOnly />
                </p>
                <p className="client-review">
                  As a client of Sayana Worldverse, Care of Careers has
                  experienced a seamless integration of Web Development, SEO,
                  Digital Marketing, Graphic Designing, and Ads services. This
                  has significantly boosted our online platform for software
                  courses, attracting a wider audience and enhancing our brand
                  visibility.
                </p>
              </div>
            </div>
            <div className="client-card">
              <div className="client-card-content">
                <img
                  src="/images/c2.png"
                  alt="c2"
                  loading="lazy"
                  className="test-monial"
                />
                <p className="client-name">Haripriya's Media </p>
                <p className="rating">
                  <Rating name="read-only" value={5} readOnly />
                </p>
                <p className="client-review">
                  Haripriya's Media owes much of its success to Sayana
                  Worldverse's expertise. Their Web Development, SEO, Social
                  Media Managing, YouTube Growth Managing, and Graphic Designing
                  services have elevated our YouTube channel, making it a go-to
                  destination for engaging content.
                </p>
              </div>
            </div>
            <div className="client-card">
              <div className="client-card-content">
                <img
                  src="/images/c5.jpg"
                  alt="c5"
                  loading="lazy"
                  className="test-monial"
                />
                <p className="client-name">Sri Soudha</p>
                <p className="rating">
                  <Rating name="read-only" value={5} readOnly />
                </p>
                <p className="client-review">
                  The partnership with Sayana Worldverse has been instrumental
                  in establishing an impressive online presence for Sri Soudha.
                  Through their Web Development, Digital Marketing, and Graphic
                  Designing services, we have successfully showcased our
                  architectural prowess to a global audience.
                </p>
              </div>
            </div>
            <div className="client-card">
              <div className="client-card-content">
                <img
                  src="/images/c3.jpg"
                  alt="c3"
                  loading="lazy"
                  className="test-monial"
                />
                <p className="client-name">Haripriya's Bhakthi </p>
                <p className="rating">
                  <Rating name="read-only" value={5} readOnly />
                </p>
                <p className="client-review">
                  The collaboration with Sayana Worldverse has significantly
                  contributed to the success of Haripriya's Bhakthi. Their Web
                  Development, SEO, Social Media Managing, YouTube Growth
                  Managing, and Graphic Designing services have played a crucial
                  role in building a dedicated audience for our spiritual
                  content.
                </p>
              </div>
            </div>
            <div className="client-card">
              <div className="client-card-content">
                <img
                  src="/images/c4.png"
                  alt="c4"
                  loading="lazy"
                  className="test-monial"
                />
                <p className="client-name">Ocean Dental Hospital </p>
                <p className="rating">
                  <Rating name="read-only" value={5} readOnly />
                </p>
                <p className="client-review">
                  Ocean Dental Hospital has experienced a transformative journey
                  with Sayana Worldverse. Their services in Product Development,
                  SEO, Digital Marketing, and Graphic Designing have not only
                  enhanced our online visibility but have also effectively
                  communicated our commitment to quality dental care.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section className="news">
        <div className="container ">
          <div className="news-letter  d-md-flex align-items-center">
            <div className="col-md-6 news-content">
              <h2 className="news-title">News Letter</h2>
              <p className="news-para">
                Subscribe To Our Newsletter and Stay Updated
              </p>
              <div className="form-group">
                <input
                  type="text"
                  className="news-input"
                  placeholder="Enter Your Email"
                  aria-labelledby="email"
                />
                <button className="subscribe-btn">Subscribe</button>
              </div>
            </div>
            <div className="col-md-6 right-col">
              <img
                src={newsRocket}
                alt="rocket"
                loading="lazy"
                className="news-rocket"
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
