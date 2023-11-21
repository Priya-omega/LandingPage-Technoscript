import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/Placement.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PartnerSlider from '../component/PartnerSlider';
import Testimonial from '../component/Testimonial';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import Head from 'next/head';
import Timer from '../component/Timer';
import Embedded from '../component/Embedded';

export default function LandingPage() {



  //------------------   placement slider ---------------------------

  var settings = {
    // autoplay:false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 5,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  function handleSubmit() {
    alert("Form Submitted Successfully!")
  }

  return (
    <>

      <Head>
        <title>TechnoScripts Best Embedded system Course Training Institute in Pune</title>
        <meta name="description" content="Join TechnoScripts Best Embedded Training institute in pune, embedded System course in Pune & Pimpri Chinchwad. one of the best training institute for embedded system course training in Pune. Technoscripts providing embedded courses with 100% Placement" />
      </Head>

      <div className="landingPage">

        <div className='topbar'>
          <div className="box">
            <div className="content one">

              <p> <FiPhoneCall className='call' /> Call : 8605006788  </p>

            </div>

            <div className="content">
              <p> <GoMail className='mail' /> info@technoscripts.in</p>
            </div>
          </div>


        </div>

        <div className="nav">
          <Link href="https://technoscripts.in/" className='h1'> <img src="img/logopng.webp" alt="" /> </Link>

          <div className='homemenu'>
            <Link href="https://technoscripts.in/"> Home <AiOutlineMenuFold className='menu' /> </Link> </div>
        </div>



        {/* ---------------placement------------------ */}

        <div className={styles.placement}>
          <Slider {...settings}>

            <div className={styles.placementcontainer}>
              <div className={styles.placementbox}>

                <div className={styles.text}>
                  <p><span className={styles.purple}>856+</span>Placement Drives in 2022</p>

                  <p>In <span className={styles.purple}>Core Embedded Companies</span></p>

                  <div className={styles.yelbtn}>Online Courses / Offline Courses</div>



                  <p> Highest Salary Package Offered - <span className={styles.yel}>18 LPA</span></p>


                  <button className={styles.btn}> <Link href="https://technoscripts.in/embedded-course-in-pune" className='link'>View all Courses </Link> </button>



                </div>

                <div className={styles.logo1}>

                  <div className={styles.container1}>
                    <div className={styles.box}>
                      <img src="img/placement/1.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/2.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/3.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/4.webp" alt="CompanyLogo" />
                    </div>
                  </div>

                  <div className={styles.container1}>
                    <div className={styles.box}>
                      <img src="img/placement/5.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/6.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/7.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/8.webp" alt="CompanyLogo" />
                    </div>
                  </div>

                  <div className={styles.container1}>
                    <div className={styles.box}>
                      <img src="img/placement/9.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/10.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/11.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/12.webp" alt="CompanyLogo" />
                    </div>
                  </div>

                  <div className={styles.container1}>
                    <div className={styles.box}>
                      <img src="img/placement/13.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/14.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/15.webp" alt="CompanyLogo" />
                    </div>
                    <div className={styles.box}>
                      <img src="img/placement/16.webp" alt="CompanyLogo" />
                    </div>
                  </div>

                </div>

              </div>


            </div>

            <div className={styles.placementcontainer}>
              <div className={styles.placementbox}>
                <div className={styles.text}>
                  <p><span className={styles.purple}>100%</span>Placement Program</p>

                  <p>and <span className={styles.purple}>Get Hired By Top MNCs</span></p>

                  <div className={styles.yelbtn}>Online Courses / Offline Courses</div>

                  <p> Highest Salary Package Offered - <span className={styles.yel}>18 LPA</span></p>

                  <button className={styles.btn}> <Link href="https://technoscripts.in/embedded-course-in-pune" className='link'>  View all Courses </Link> </button>


                </div>


                <div className={styles.logo2}>

                  <div className={styles.container1}>
                    <div className={styles.box}>
                      <img src="img/placement/17.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/18.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/19.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/20.webp" alt="CompanyLogo" />
                    </div>
                  </div>

                  <div className={styles.container1}>
                    <div className={styles.box}>
                      <img src="img/placement/21.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/22.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/23.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/24.webp" alt="CompanyLogo" />
                    </div>
                  </div>

                  <div className={styles.container1}>
                    <div className={styles.box}>
                      <img src="img/placement/25.webp" alt="CompanyLogo" />

                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/26.webp" alt="CompanyLogo" />

                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/27.webp" alt="CompanyLogo" />

                    </div>
                    <div className={styles.box}>
                      <img src="img/placement/28.webp" alt="CompanyLogo" />

                    </div>
                  </div>

                  <div className={styles.container1}>
                    <div className={styles.box}>
                      <img src="img/placement/29.webp" alt="CompanyLogo" />

                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/30.webp" alt="CompanyLogo" />

                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/31.webp" alt="CompanyLogo" />

                    </div>
                    <div className={styles.box}>
                      <img src="img/placement/32.webp" alt="CompanyLogo" />

                    </div>
                  </div>

                </div>
              </div>

            </div>


            <div className={styles.placementcontainer}>
              <div className={styles.placementbox}>
                <div className={styles.text}>
                  <p><span className={styles.purple}>572+</span>Hiring Partners</p>

                  <p>will <span className={styles.purple}> Transform Your Career

                  </span></p>

                  <div className={styles.yelbtn}>Online Courses / Offline Courses</div>



                  <p> Highest Salary Package Offered - <span className={styles.yel}>18 LPA</span></p>
                  <button className={styles.btn}> <Link href="https://technoscripts.in/embedded-course-in-pune" className='link'>View all Courses </Link> </button>



                </div>


                <div className={styles.logo2}>

                  <div className={styles.container1}>
                    <div className={styles.box}>
                      <img src="img/placement/33.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/34.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/35.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/36.webp" alt="CompanyLogo" />
                    </div>
                  </div>

                  <div className={styles.container1}>
                    <div className={styles.box}>
                      <img src="img/placement/37.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/38.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/39.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/40.webp" alt="CompanyLogo" />
                    </div>
                  </div>

                  <div className={styles.container1}>
                    <div className={styles.box}>
                      <img src="img/placement/41.webp" alt="CompanyLogo" />

                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/42.webp" alt="CompanyLogo" />

                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/43.webp" alt="CompanyLogo" />

                    </div>
                    <div className={styles.box}>
                      <img src="img/placement/44.webp" alt="CompanyLogo" />

                    </div>
                  </div>

                  <div className={styles.container1}>
                    <div className={styles.box}>
                      <img src="img/placement/45.webp" alt="CompanyLogo" />

                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/46.webp" alt="CompanyLogo" />

                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/47.webp" alt="CompanyLogo" />

                    </div>
                    <div className={styles.box}>
                      <img src="img/placement/48.webp" alt="CompanyLogo" />

                    </div>
                  </div>






                </div>



              </div>

            </div>


            <div className={styles.placementcontainer}>
              <div className={styles.placementbox}>
                <div className={styles.text}>
                  <p><span className={styles.purple}>4552+</span> Student Placed</p>

                  <p>In <span className={styles.purple}>Core Embedded Companies</span></p>

                  <div className={styles.yelbtn}>Online Courses / Offline Courses</div>



                  <p> Highest Salary Package Offered - <span className={styles.yel}>18 LPA</span></p>

                  <button className={styles.btn}> <Link href="https://technoscripts.in/embedded-course-in-pune" className='link'>View all Courses </Link> </button>


                </div>


                <div className={styles.logo2}>

                  <div className={styles.container1}>
                    <div className={styles.box}>
                      <img src="img/placement/49.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/50.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/51.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/52.webp" alt="CompanyLogo" />
                    </div>
                  </div>

                  <div className={styles.container1}>
                    <div className={styles.box}>
                      <img src="img/placement/53.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/54.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/55.webp" alt="CompanyLogo" />
                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/56.webp" alt="CompanyLogo" />
                    </div>
                  </div>

                  <div className={styles.container1}>
                    <div className={styles.box}>
                      <img src="img/placement/57.webp" alt="CompanyLogo" />

                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/58.webp" alt="CompanyLogo" />

                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/59.webp" alt="CompanyLogo" />

                    </div>
                    <div className={styles.box}>
                      <img src="img/placement/60.webp" alt="CompanyLogo" />

                    </div>
                  </div>

                  <div className={styles.container1}>
                    <div className={styles.box}>
                      <img src="img/placement/61.webp" alt="CompanyLogo" />

                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/62.webp" alt="CompanyLogo" />

                    </div>

                    <div className={styles.box}>
                      <img src="img/placement/63.webp" alt="CompanyLogo" />

                    </div>
                    <div className={styles.box}>
                      <img src="img/placement/64.webp" alt="CompanyLogo" />

                    </div>
                  </div>






                </div>



              </div>

            </div>

          </Slider>
        </div>

        <div className="contactform">

          <div className="text">
            <h1> Schedule a call with our Technical Counselor </h1>
            <br />
            <p>Share your Contact details below one of our career counselors will reach out to you and help you make the right decision for your career with our Embedded Systems course .assistance will be provided for placement </p>


          </div>

          <div className="container">

            <Timer />


            <div className="form">
              <form action="https://formsubmit.co/hr.technoscripts@gmail.com" method="POST" onSubmit={handleSubmit}>

                <input type="hidden" name="_captcha" value="false" />

                <input type="hidden" name="_subject" value="Technoscripts Enquiry Form!" />

                <input type="hidden" name="_next" value="https://technoscripts.info/" />


                <div className="input">
                  <label htmlFor="">Full Name <em>*</em> </label> <br />
                  <input type="text" placeholder='Enter Full Name' name='user_name' required />
                </div>

                <div className="input">
                  <label htmlFor="">Email ID <em>*</em></label> <br />
                  <input type="email" name='user_email' placeholder='sample@gmail.com' required />
                </div>

                <div className="input">
                  <label htmlFor="">Phone Number <em>*</em> </label> <br />
                  <input type="number" name='user_number' placeholder='Enter your number' required />
                </div>

                <div className="consent">
                  <h3>User Consent</h3>
                  <div>
                    <input type="checkbox" name="" id="" /> <label htmlFor="">Allow Whatsapp and phone call</label>
                  </div>

                  <div>
                    <input type="checkbox" name="" id="" /> <label htmlFor="">Allow Emails to be sent</label>
                  </div>



                </div>
                <div className="btn">
                  <button type='submit'> Register Now</button>

                </div>


              </form>
            </div>
          </div>



        </div>

        <div className="feature">
          <div className="box">
            <img src="img/landing/3.jpg" alt="" />

            <div className="text">
              <h2> 4552+ </h2>
              <p> Students Placed </p>
            </div>
          </div>

          <div className="box">
            <img src="img/landing/6.png" alt="" />

            <div className="text">
              <h2> 572+ </h2>
              <p> Hiring Partners </p>
            </div>
          </div>

          <div className="box">
            <img src="img/landing/5.png" alt="" />

            <div className="text">
              <h2> 27.3 LPA/- </h2>
              <p> Package Offered </p>
            </div>
          </div>

          <div className="box">
            <img src="img/landing/2.png" alt="" />

            <div className="text">
              <h2> 258+ </h2>
              <p> Corporate Trainings </p>
            </div>
          </div>
        </div>


        <Embedded />


        {/* ----------------- PartnerSlider -------------------- */}

        <div className="pageContainer">
          <div className="heading">
            <h1>Our Hiring Partners</h1>

          </div>
          <p>We prepare the student for technical as well as the non technical part of the interviews. The placement team ensures that the students who have completed the course they shall upload their updated resume in the specified format. Resumes will be forwarded to the number of companies based on their requirements, with whom we have a tie-up for placements. </p>

          <p>
            The candidate will be informed about the interview details by the placement coordinator & candidate should prepare accordingly.
            Mock interviews will be conducted periodically by a panel consisting of a trainer & HR present at the center.
          </p>

          <div>
            <PartnerSlider />
          </div>
        </div>

        <div className="pageContainer">
          <div className="heading">
            <h1> Move On To Your Dream Career !!</h1>
            <p>TechnoScripts provides 100% job-oriented training programs which deal with real-world practical applications. Get Support from Industry Experts for a thriving career. Our objective is to teach the next generation of experts in this fascinating sector since we believe embedded systems are the future. </p>

          </div>

          <div className="addpoint">

            <div className="container">
              <div className="box">
                <img src="img/card/1.jpg" alt="" />
                <div className="text">
                  <h3>Live Projects</h3>
                  <p>Work on live projects
                    Learn & implement.Exposure to Industry based LIVE projects </p>
                </div>
              </div>

              <div className="box">
                <img src="img/card/2.jpg" alt="" />
                <div className="text">
                  <h3>100% Placement Support</h3>
                  <p>100% placement support and guidance is provided to every student till you get placed</p>
                </div>
              </div>

              <div className="box">
                <img src="img/card/3.jpg" alt="" />
                <div className="text">
                  <h3>Industry Experts</h3>
                  <p>Learn from experienced engineers and Industry experts working professionals</p>
                </div>
              </div>

              <div className="box">
                <img src="img/card/4.jpg" alt="" />
                <div className="text">
                  <h3>Learn Online / Classroom</h3>
                  <p>We offer both classroom & online training available as per student convinence</p>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="box">
                <img src="img/card/5.png" alt="" />
                <div className="text">
                  <h3>ISO 9001 : 2015 Certified</h3>
                  <p>ISO 9001:2015 certified Centre with International Accreditation from IAF & DAC.</p>
                </div>
              </div>

              <div className="box">
                <img src="img/card/6.png" alt="" />
                <div className="text">
                  <h3>Interview Preparation</h3>
                  <p>Mock Interviews, Evaluation, Doubt solving sessions conducted periodically by a panel </p>
                </div>
              </div>

              <div className="box">
                <img src="img/card/7.png" alt="" />
                <div className="text">
                  <h3>Fully equipped labs</h3>
                  <p>Fully equipped and sophisticated embedded labs with all necessary Hardware & equipments </p>
                </div>
              </div>

              <div className="box">
                <img src="img/card/8.png" alt="" />
                <div className="text">
                  <h3>Course Completion Certificate</h3>
                  <p>On course completion receives project performance &  course completion certificate.</p>
                </div>
              </div>

            </div>




          </div>


        </div>

        <Testimonial />

        <div className='Copyright'>
          <p>2005 all rights are reserved. Copyright @TechnoScripts</p>
        </div>

      </div>

    </>
  )
}
